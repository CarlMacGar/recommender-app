import { FaLinkedin } from "react-icons/fa";
import PropTypes from "prop-types";
import TrimString from "../../utils/trimString";
import { useState } from "react";
import { FaCopy, FaCheck} from "react-icons/fa";

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

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(data.job_id)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Resetea el estado después de 2 segundos
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <>
        <article className="flex flex-col items-center w-full p-5 transition-all duration-200 border shadow-md rounded-xl border-secondary-dark bg-dark-gray-light text-prim-txt hover:translate-y-2 hover:shadow-xl shadow-aqua-dark gap-y-5 md:max-w-xl cursor-help" title={data.title} onClick={handleCopy}>
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-xl font-semibold md:text-xl text-aqua-light">
                  {TrimString(data.title, 22)}
              </h1>
              <h2 className="flex items-center gap-2 mx-auto text-sm" title="Copy ID">
                Job ID: {data.job_id} {copied ? <FaCheck className="text-aqua-dark"/> : <FaCopy/>}
              </h2>
            </div>
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
    job_posting_url: PropTypes.string,
    job_id: PropTypes.number
  }).isRequired,
};

export default ShowJobs;