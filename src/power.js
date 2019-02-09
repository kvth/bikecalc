import {humanEfficiency, kilo, joulesInCalorie} from "./constants";

/**
 * Calculate estimated energy expenditure while cycling at a specific power.
 *
 * @param {number} watts produced average power over interval in watts
 * @param {number} seconds number of seconds where power was produced
 * @returns {number} burned energy in kilocalories
 */
export const calories = (watts, seconds) => (((watts * seconds) / joulesInCalorie) / humanEfficiency) / kilo;

/**
 * Calculate power for cadence and force.
 * 
 * @param {number} crankLength The cranklength (in meters).
 * @param {number} cadence The cadence (in revolutions per minute).
 * @param {number} force  The pedalforce (in N).
 * @returns {number} The power (in Watt). 
 */
export const power = (crankLength, cadence, force) => force * crankLength * cadence * 2 * Math.PI / 60;

/**
 * Calculate force for power and cadence.
 * 
 * @param {number} crankLength The cranklength (in meters).
 * @param {number} cadence The cadence (in revolutions per minute).
 * @param {number} power The power (in Watt).
 * @returns {number} The pedalforce (in N).
 */
export const force = (crankLength, cadence, power) => (60 * power) / (crankLength * cadence * 2 * Math.PI);

/**
 * Calculate linear pedal velocity from cadence.
 * 
 * @param {number} crankLength The cranklength (in meters).
 * @param {number} cadence The cadence (in revolutions per minute)
 * @returns {number} The linear pedal velocity (in m/s).
 */
export const pedalVelocity = (crankLength, cadence) => crankLength * ((2 * Math.PI * cadence) / 60);
