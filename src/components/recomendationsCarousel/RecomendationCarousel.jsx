import PropTypes from "prop-types";
import ShowJobs from "../showJobs/ShowJobs";

/**
 * A recommendation carousel component that displays a horizontally scrolling list of job recommendations.
 * The carousel scrolls continuously in a loop, showing job details in each card.
 * 
 * @component
 * @param {Object} props - Component properties.
 * @param {Array} props.jobs - A list of job objects to be displayed in the carousel.
 * @returns {JSX.Element} The recommendation carousel that shows job details in a scrolling format.
 */
function RecomendationCarousel({jobs}){
    return(
        <div className="relative w-full mx-auto overflow-hidden">
            <div className="flex pb-8 animate-scroll"
                style={{
                animation: "scroll 40s linear infinite",
            }}>
                {jobs.concat(jobs).map((job, index) => (
                <div className="flex-shrink-0 mx-2 w-72" key={index}>
                    <ShowJobs data={job} />
                </div>
                ))}
            </div>
        </div>
    )
}

RecomendationCarousel.propTypes = {
    jobs: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

export default RecomendationCarousel;