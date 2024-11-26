/**
 * Trims a string to a specified length and appends "..." if it exceeds the limit.
 *
 * @param {string} str - The string to be trimmed.
 * @param {number} maxLen - The maximum length of the string.
 * @returns {string} The trimmed string, with "..." added if it exceeds the max length.
 */

const TrimString = (str, maxLen) => {
    return str.length > maxLen ? str.substring(0, maxLen-3) + '...' : str;
}

export default TrimString;