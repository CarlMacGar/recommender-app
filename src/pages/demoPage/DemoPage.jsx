import WelcomeMessage from "../../components/welcomeMessage/WelcomeMessage";
import ShowRecommendations from "../../components/showRecomendations/ShowRecomendations";
import RecomendationCarousel from "../../components/recomendationsCarousel/RecomendationCarousel";
import FloatingContainer from "../../components/floatingContainer/FloatingContainer";
import Footer from "../../components/footer/Footer";
import demoJobs from "../../utils/demoData";
import {useState} from "react";
import { FaSearch } from "react-icons/fa";

/**
 * DemoPage component displays a static version of the application showcasing its layout and visual components.
 * It includes a welcome message, a job recommendations carousel, and a sample list of job cards.
 * 
 * This demo is intended for demonstration purposes only and uses mock data. No real search or backend communication occurs.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered DemoPage component.
 *
 * @state {boolean} demoDisclaimerOpen - Controls the visibility of the disclaimer modal. It is shown automatically on the first visit and can be manually reopened via the search bar button.
 *
 * @function handleCloseDisclaimer
 * Closes the disclaimer modal and sets a flag in localStorage to avoid showing it again automatically on future visits.
 *
 * @example
 * // Closes the disclaimer modal and sets 'seenDemoDisclaimer' in localStorage
 * handleCloseDisclaimer();
 */

const DemoPage = () => {

    const [demoDisclaimerOpen, setDemoDisclaimerOpen] = useState(() => {
        const seenDisclaimer = localStorage.getItem("seenDemoDisclaimer");
        return seenDisclaimer !== "true";
    });

    const handleCloseDisclaimer = () => {
        setDemoDisclaimerOpen(false);
        localStorage.setItem("seenDemoDisclaimer", "true");
    };

    return (
        <>
            <main className="flex flex-col h-full min-h-screen bg-gradient-to-t from-primary-dark to-secondary-light">
                <div className="animate-slideUp" style={{ animationDelay: "0.2s" }}>
                    <WelcomeMessage />
                </div>
                <section className="animate-fadeIn" style={{ animationDelay: "0.6s" }}>
                    <RecomendationCarousel jobs={demoJobs.slice(0, 10)} />
                </section>
                <div className="w-full max-w-md pt-2 pb-4 px-2 mx-auto animate-slideUp" style={{ animationDelay: "0.6s" }}>
                    <button className="relative bg-white rounded-lg ease-in-out border border-gray-300 hover:border-vibrant-blue hover:shadow-lg focus:outline-none focus:ring focus:ring-vibrant-blue transition duration-300"
                     onClick={() => setDemoDisclaimerOpen(true)}>
                        <p
                            className="w-full px-4 py-2 pl-10 text-gray-500"
                        >
                            Search recommendations by job title or ID
                        </p>
                        <FaSearch className="absolute text-gray-400 transform -translate-y-1/2 top-1/2 left-3" />
                    </button>
                </div>
                <article className="flex flex-col gap-4 mx-auto mt-3 text-sm text-white md:flex-row pb-5">
                    <p><span className="font-medium text-aqua-light">CBS: </span>Content Based Similarity</p>
                    <p><span className="font-medium text-aqua-light">CXBS: </span>Context Based Similarity</p>
                    <p><span className="font-medium text-aqua-light">AIBS: </span>Artificial Intelligence Based Similarity</p>
                </article>
                <section className="grid items-center w-full grid-cols-1 px-3 pb-5 mx-auto gap-y-7 gap-x-2 lg:grid-cols-2 2xl:grid-cols-3 justify-items-center">
                    {demoJobs.slice(10, demoJobs.length).map((job, index) => (
                        <div key={index} className="animate-slideUp" style={{ animationDelay: `${index * 0.3}s` }}>
                            <ShowRecommendations data={job} />
                        </div>
                    ))}
                </section>
            </main>
            <Footer />
            <FloatingContainer open={demoDisclaimerOpen} setOpen={handleCloseDisclaimer}>
                <section className="flex flex-col gap-5 p-5">
                   <h1 className="text-xl font-semibold text-center text-transparent md:text-2xl bg-clip-text bg-gradient-to-b from-vibrant-blue to-aqua">
                        Demo Disclaimer
                    </h1>
                    <p className="text-justify text-white">
                        The information displayed on this page is for demonstration purposes only.
                        All job postings, titles, metrics and descriptions are fictional and do not represent actual opportunities.
                        This mock data is intended solely to illustrate the application's functionality.
                    </p>
                    <p className="text-justify text-white">
                        Please do not interpret this content as real or actionable job information.
                    </p>
                    <p className="text-justify text-white italic">
                        Note: In this demo version, the search bar is non-functional and only serves to display this informational message.
                    </p>

                </section>
            </FloatingContainer>
        </>
    );
};

export default DemoPage;