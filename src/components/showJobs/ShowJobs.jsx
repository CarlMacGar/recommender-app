import { FaLinkedin } from "react-icons/fa";
import PropTypes from "prop-types";
import TrimString from "../../utils/trimString";

/**
 * A component that displays job details in a card format.
 * The card includes the job title, a trimmed version of the title for better UI, 
 * and a button that links to the job posting on LinkedIn.
 * 
 * @component
 * @param {Object} props - Component properties.
 * @param {Object} props.data - The job data to be displayed in the component.
 * @param {string} props.data.title - The title of the job.
 * @param {string} props.data.job_posting_url - The URL to the job posting on LinkedIn.
 * @returns {JSX.Element} The job card displaying the job title and a link to the job posting.
 */
function ShowJobs({data}) {

  return (
    <>
        <article className="flex flex-col items-center w-full p-5 transition-all duration-200 border shadow-md cursor-pointer rounded-xl border-secondary-dark bg-dark-gray-light text-prim-txt hover:translate-y-2 hover:shadow-xl shadow-aqua-dark gap-y-5 md:max-w-xl" title={data.title}>
            <h1 className="text-xl font-semibold md:text-xl text-aqua-light">
                {TrimString(data.title, 22)}
            </h1>
            
            <a className="flex items-center px-4 py-2 text-lg font-semibold transition-all duration-150 rounded-lg gap-x-2 bg-gradient-to-bl from-vibrant-blue to-vibrant-blue-light hover:scale-105" target="_blank" href={data.job_posting_url}>
                <FaLinkedin />
                Check now
            </a>
        </article>
    </>
  );
}

ShowJobs.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    job_posting_url: PropTypes.string
  }).isRequired,
};

export default ShowJobs;