/**
 * Calculate Greatest Common Divisor.
 * 
 * @param {number} a 
 * @param {number} b
 * @returns Greatest Common Divisor. 
 */
export const gcd = (a,b) => b ? gcd(b, a % b) : a;

/**
 * Reduce a fraction by finding the Greatest Common Divisor and dividing by it.
 * 
 * @param {number} numerator 
 * @param {number} denominator
 */
export const reduce = (numerator,denominator) => {
    const gcdVal = gcd(numerator,denominator);
    return [numerator/gcdVal, denominator/gcdVal];
};
