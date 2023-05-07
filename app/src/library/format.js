/**
 * Currency text to currency format
 * @param {*} n
 * @returns 
 */
export const currency = (n) => {
    return parseFloat(n).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
}