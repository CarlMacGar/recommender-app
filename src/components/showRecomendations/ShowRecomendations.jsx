import { FaLinkedin } from "react-icons/fa";
import PropTypes from "prop-types";
import TrimString from "../../utils/trimString";
import { FloatToPercentage } from "../../utils/floatToPerc";
import FloatingContainer from "../floatingContainer/FloatingContainer";
import { useState } from "react";
import SimilarityBadge from "../similarityBadge/SimilarityBage";
import { FaCopy, FaCheck} from "react-icons/fa";

/**
 * A component that displays detailed job recommendations, including the job title, job ID, job description,
 * and similarity scores. It also allows users to copy the job ID and view a more detailed description in a floating container.
 * 
 * @component
 * @param {Object} props - Component properties.
 * @param {Object} props.data - The job data to be displayed in the component.
 * @param {string} props.data.title - The title of the job.
 * @param {number} props.data.job_id - The unique ID of the job.
 * @param {string} props.data.job_description - A description of the job.
 * @param {number} props.data.similarity_hybrid - The hybrid similarity score for the job.
 * @param {number} props.data.similarity_content - The content similarity score for the job.
 * @param {number} props.data.similarity_context - The context similarity score for the job.
 * @param {number} props.data.similarity_knn - The KNN similarity score for the job.
 * @param {string} props.data.job_posting_url - The URL for the job posting.
 * @param {string} props.data.url - An alternative URL for the job posting.
 * @returns {JSX.Element} The job recommendation card displaying the job details, including the option to copy the job ID,
 * view similarity scores, and open a detailed job description in a floating container.
 */
function ShowRecommendations({data}) {
  const [open, setOpen] = useState(false);
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
        <article className="flex flex-col items-center w-full p-3 transition-all duration-200 border shadow-md rounded-xl border-secondary-dark bg-dark-gray-light text-prim-txt hover:translate-y-2 hover:shadow-xl shadow-aqua-dark gap-y-3 md:max-w-xl cursor-help" onClick={() => setOpen(true)}>
            <div className="flex flex-col text-center gap-2">
                <h1 className="text-xl font-semibold md:text-2xl text-aqua-light">
                    {TrimString(data.title, 40)}
                </h1>
                <h2 onClick={(e) => {
                    e.stopPropagation();
                    handleCopy()
                    }} className="cursor-pointer flex items-center mx-auto gap-2" title="Copy ID">
                    Job ID: {data.job_id} {copied ? <FaCheck className="text-aqua-dark"/> : <FaCopy/>}
                </h2>
            </div>
            <section className="flex flex-col items-center w-full md:flex-row gap-x-8 md:gap-y-0 gap-y-5">
                {data.similarity_hybrid && (
                    <div className="flex flex-col text-center md:items-center gap-y-2">
                        <h2 className="font-medium md:text-lg text-sec-txt-light">
                            Similarity:
                        </h2>
                        <h3 className="text-sm font-normal md:text-base text-sec-txt">
                            {FloatToPercentage(data.similarity_hybrid)}
                        </h3>
                    </div>
                )}
                <div className="w-full text-center md:text-left">
                    <h2 className="mb-2 text-xl font-semibold text-sec-txt-light">
                        Job description ↓
                    </h2>
                    <p className="text-justify text-sec-txt-dark">
                        {TrimString(data.job_description, 92)}
                    </p>
                </div>
            </section>
            {data.similarity_hybrid && (
                <section className="flex gap-4 text-center">
                    <SimilarityBadge title="CBS" value={data.similarity_content}/>
                    <SimilarityBadge title="CXBS" value={data.similarity_context}/>
                    <SimilarityBadge title="AIBS" value={data.similarity_knn}/>
                </section>
            )}
            <a className="flex items-center px-4 py-2 text-lg font-semibold transition-all duration-150 rounded-lg gap-x-2 bg-gradient-to-bl from-vibrant-blue to-vibrant-blue-light hover:scale-105" target="_blank" href={data.job_posting_url || data.url} onClick={(e) => e.stopPropagation()}>
                <FaLinkedin />
                Take a deeper look ;)
            </a>
        </article>
        <FloatingContainer open={open} setOpen={setOpen}>
            <section className="flex flex-col gap-5 p-5">
                <h1 className="text-xl font-semibold text-center text-transparent md:text-2xl bg-clip-text bg-gradient-to-b from-vibrant-blue to-aqua">
                    {data.title + " description"}
                </h1>
                <p className="text-justify">{data.job_description}</p>
            </section>
        </FloatingContainer>
    </>
  );
}

ShowRecommendations.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    job_id: PropTypes.number,
    job_description: PropTypes.string,
    similarity_hybrid: PropTypes.number,
    similarity_content: PropTypes.number,
    similarity_context: PropTypes.number,
    similarity_knn: PropTypes.number,
    job_posting_url: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default ShowRecommendations;
