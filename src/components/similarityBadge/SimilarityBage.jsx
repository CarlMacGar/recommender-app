import { FloatToPercentage } from "../../utils/floatToPerc"
import PropTypes from "prop-types";

/**
 * A component that displays a similarity badge, showing a title and a percentage value.
 * The value is converted from a float to a percentage using the `FloatToPercentage` utility function.
 * 
 * @component
 * @param {Object} props - Component properties.
 * @param {string} props.title - The title of the similarity badge (e.g., "CBS", "CXBS").
 * @param {number} props.value - The similarity value to be displayed, which will be converted into a percentage.
 * @returns {JSX.Element} The similarity badge displaying the title and percentage value.
 */
function SimilarityBadge({title, value}){
    return(
        <div className="text-sm">
            <h1 className="text-aqua">
                {title}
            </h1>
            <span>
                {FloatToPercentage(value)}
            </span>
        </div>
    )
}

SimilarityBadge.propTypes = {
    title: PropTypes.string,
    value: PropTypes.number
  };

export default SimilarityBadge;