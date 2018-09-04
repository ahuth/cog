import toRadians from './to-radians.js';

export default function toCoordinates(radius, angle, center) {
  return {
    x: center + radius * Math.cos(toRadians(angle)),
    y: center + radius * Math.sin(toRadians(angle)),
  };
}
