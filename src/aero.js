/**
 * Calculate aerodynamic drag force.
 * 
 * @param {number} Cd The drag coefficient.
 * @param {number} A The frontal area (in m2).
 * @param {number} p The air density (in kg/m3).
 * @param {number} u The air velocity relative to the object (in m/s).
 * @return {number} Aerodynamic drag force (in N).
 */
export const aeroDrag = (Cd, A, p, u) => 0.5 * p * (u*u) * Cd * A
