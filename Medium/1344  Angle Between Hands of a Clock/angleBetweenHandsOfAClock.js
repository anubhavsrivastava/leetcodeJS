/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function (hour, minutes) {
    // hours angle
    let hours_angle = (hour * 30) + minutes * 0.5;

    // minutes angle
    let minutes_angle = minutes * 6;

    // angle 
    let angle = Math.abs(hours_angle - minutes_angle);

    return Math.min(angle, 360 - angle);
};