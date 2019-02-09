import {reduce} from "./helpers";
import {inchesInMeter, radiusInDiameter, secondsInMinute} from "./constants";

/**
 * Calculate gear inches for drivetrain.
 * 
 * @param {number} chainringTeeth The number of teeth on the front chainring.
 * @param {number} sprocketTeeth The number of teeth on the rear sprocket.
 * @param {number} wheelDiameter The wheel diameter in meters.
 * @returns {number} Gear inches 
 */
export const gearInches = (chainringTeeth, sprocketTeeth, wheelDiameter) => (wheelDiameter * inchesInMeter) * (chainringTeeth / sprocketTeeth);

/**
 * Calculate development of drivetrain.
 * 
 * @param {number} chainringTeeth The number of teeth on the front chainring.
 * @param {number} sprocketTeeth The number of teeth on the rear sprocket.
 * @param {number} wheelDiameter The wheel diameter in meters.
 * @returns {number} Development in meters.
 */
export const development = (chainringTeeth, sprocketTeeth, wheelDiameter) => wheelDiameter * (chainringTeeth / sprocketTeeth) * Math.PI;

/**
 * Calculate gain ratio for drivetrain.
 * 
 * @param {number} chainringTeeth The number of teeth on the front chainring.
 * @param {number} sprocketTeeth The number of teeth on the rear sprocket.
 * @param {number} wheelDiameter The wheel diameter in meters.
 * @param {number} crankLength The crank length in meters.
 * @returns {number} Gain ratio
 */
export const gainRatio = (chainringTeeth, sprocketTeeth, wheelDiameter, crankLength) => ((wheelDiameter / radiusInDiameter) / crankLength) * (chainringTeeth / sprocketTeeth);

/**
 * Calculate speed (m/s) at cadence for drivetrain.
 * 
 * @param {number} chainringTeeth The number of teeth on the front chainring.
 * @param {number} sprocketTeeth The number of teeth on the rear sprocket.
 * @param {number} wheelDiameter The wheel diameter in meters.
 * @param {number} cadence Cadence (in revolutions per minute)
 * @returns {number} speed (in m/s)
 */
export const speedAtCadence = (chainringTeeth, sprocketTeeth, wheelDiameter, cadence) => (Math.PI * gearInches(chainringTeeth, sprocketTeeth, wheelDiameter) * (cadence / secondsInMinute)) / inchesInMeter;

/**
 * Calculate number of skid patches for gear combination.
 * 
 * @param {number} chainringTeeth The number of teeth on the front chainring.
 * @param {number} sprocketTeeth The number of teeth on the rear sprocket.
 * @param {boolean} [ambidextrous=true] Whether the rider is an ambidextrous skidder.
 * @returns {number} The number of skid patches.
 */
export const skidPatches = (chainringTeeth, sprocketTeeth, ambidextrous=false) => {
    const [nom, denom] = reduce(chainringTeeth, sprocketTeeth);
    return (ambidextrous && nom % 2 === 1) ? 2 * denom : denom;
};
