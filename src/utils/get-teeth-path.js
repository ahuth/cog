import range from 'lodash.range';
import toCoordinates from './to-coordinates.js';

const offset = 90;

export default function getTeethPath(radius, angle, center, numTeeth) {
  const commands = range(numTeeth + 1).map((num) => {
    const a = angle * num - offset;
    const point = toCoordinates(radius, a, center);
    const command = num === 0 ? 'M' : 'L';
    return `${command} ${point.x} ${point.y}`;
  });

  return commands.join(' ');
}
