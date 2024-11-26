import WelcomeMessage from "../../components/welcomeMessage/WelcomeMessage";
import ShowRecommendations from "../../components/showRecomendations/ShowRecomendations";
import RecomendationCarousel from "../../components/recomendationsCarousel/RecomendationCarousel";
import { FaSearch } from "react-icons/fa";
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";
import { getFirstJobs, getRecomendations, searchJobsTitle, getJobById } from "../../services/jobs.service";

/**
 * MainPage component is responsible for displaying the main content of the page, including the welcome message, job recommendations carousel, and search functionality.
 * It fetches initial job recommendations, handles search queries for job titles or IDs, and displays relevant results dynamically.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered MainPage component.
 *
 * @state {Array} firstJobs - List of initial job recommendations fetched from the backend.
 * @state {Array} searchResults - List of search results based on user input (either job title or ID).
 * @state {string} searchQuery - The current search query entered by the user.
 * @state {boolean} isSearching - Boolean indicating whether the search is in progress.
 * @state {boolean} idSearch - Boolean indicating whether the search was performed by job ID.
 * 
 * @function handleSearch
 * Handles the search functionality by updating the `searchQuery` state and fetching search results from the backend based on the input. It distinguishes between searching by job title or job ID.
 * 
 * @param {Object} e - The event object triggered by the input change.
 * @param {string} e.target.value - The search query entered by the user.
 * 
 * @example
 * handleSearch(event);
 *
 * @returns {void}
 */
const MainPage = () => {
    const [firstJobs, setFirstJobs] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [idSearch, setIdSearch] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);

    useEffect(() => {
        getFirstJobs().then((res) => {
            setFirstJobs(res.data);
        });
    }, []);

    const getJob = (id) => {
        getJobById(id).then((res) => {
            setSelectedJob(res.data[0]);
        });
    }

    const handleSearch = async (e) => {
        setSearchQuery(e.target.value);

        if (e.target.value.trim() === "") {
            setSearchResults([]);
            setIdSearch(false)
            return;
        }

        setIsSearching(true);
        const isNumeric = !isNaN(e.target.value);

        try {
            if (isNumeric) {
                // Búsqueda por ID
                setIdSearch(true)
                const response = await getRecomendations(e.target.value);
                getJob(e.target.value);
                setSearchResults(response.data); 
            } else {
                // Búsqueda por título
                const response = await searchJobsTitle(e.target.value);
                setSearchResults(response.data);
                setSelectedJob(null);
            }
        } catch (error) {
            console.error("Error en la búsqueda:", error);
            setSearchResults([]); // Limpiar resultados en caso de error
        } finally {
            setIsSearching(false);
        }
    };

    return (
        <>
            <main className="flex flex-col min-h-screen h-full bg-gradient-to-t from-primary-dark to-secondary-light">
                <div className="animate-slideUp" style={{ animationDelay: "0.2s" }}>
                    <WelcomeMessage />
                </div>
                <section className="animate-fadeIn" style={{ animationDelay: "0.6s" }}>
                    <RecomendationCarousel jobs={firstJobs.slice(0, 10)} />
                </section>
                <div className="w-full max-w-md p-2 mx-auto animate-slideUp" style={{ animationDelay: "0.6s" }}>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search recommendations by job title or ID"
                            className="w-full px-4 py-2 pl-10 transition duration-300 ease-in-out border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-vibrant-blue focus:border-vibrant-blue"
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                        <FaSearch className="absolute text-gray-400 transform -translate-y-1/2 top-1/2 left-3" />
                    </div>
                </div>
                {searchResults.length > 0 && selectedJob &&(
                    <div className="w-full flex flex-col items-center p-2">
                        <h2 className="text-aqua-light font-medium text-2xl py-2 lg:hidden">Job selected</h2>
                        <ShowRecommendations data={selectedJob} />
                        <h2 className="text-aqua-light font-medium text-4xl pt-10 pb-4">Jobs recommended:</h2>
                    </div>
                )}
                {searchResults.length > 0 && idSearch &&(
                    <article className="text-white text-sm flex flex-col md:flex-row gap-4 mx-auto mt-3">
                        <p><span className="text-aqua-light font-medium">CBS: </span>Content Based Similarity</p>
                        <p><span className="text-aqua-light font-medium">CXBS: </span>Context Based Similarity</p>
                        <p><span className="text-aqua-light font-medium">AIBS: </span>Artificial Intelligence Based Similarity</p>
                    </article>
                )}
                {/* Mostrar los resultados de la búsqueda */}
                <section className="grid items-center w-full grid-cols-1 px-3 pb-5 mx-auto gap-y-7 gap-x-2 lg:grid-cols-2 justify-items-center">
                    {isSearching && <p className="text-white">Searching...</p>}
                    {searchResults.length === 0 && isSearching && <p className="text-white">No results found.</p>}
                    {searchResults.length > 0 &&
                        searchResults.map((job, index) => (
                            <div key={index} className="animate-slideUp mt-3" style={{ animationDelay: `${index * 0.3}s` }}>
                                <ShowRecommendations data={job} />
                            </div>
                        ))}
                </section>
                {/* Si no hay búsqueda, mostrar los primeros trabajos */}
                {!isSearching && searchResults.length === 0 && (
                    <section className="grid items-center w-full grid-cols-1 px-3 pb-5 mx-auto gap-y-7 gap-x-2 lg:grid-cols-2 justify-items-center">
                        {firstJobs.slice(10).map((job, index) => (
                            <div key={index} className="animate-slideUp" style={{ animationDelay: `${index * 0.3}s` }}>
                                <ShowRecommendations data={job} />
                            </div>
                        ))}
                    </section>
                )}
            </main>
            <Footer />
        </>
    );
};

export default MainPage;