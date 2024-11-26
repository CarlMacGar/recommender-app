/**
 * Converts a floating point number to a percentage string with two decimal places.
 *
 * @param {number} value - The floating point number to convert.
 * @returns {string} The percentage value as a string, e.g., "50.00%" for 0.5.
 */

export function FloatToPercentage(value){
    return (value * 100).toFixed(2) + "%"
}