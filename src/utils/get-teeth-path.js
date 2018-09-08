import toCoordinates from './to-coordinates.js';

const offset = 90;

export default function getTeethPath(radius, angle, center, numTeeth) {
  const commands = [];

  for (let i = 0; i < numTeeth; i += 1) {
    const a = angle * i - offset;
    const point = toCoordinates(radius, a, center);
    const command = i === 0 ? 'M' : 'L';
    commands.push(`${command} ${point.x} ${point.y}`);
  }

  return commands.join(' ');
}
