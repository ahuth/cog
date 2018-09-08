import toCoordinates from './to-coordinates.js';

const offset = 90;

export default function getTeethPath(r1, r2, angleBetween, center, numTeeth) {
  const commands = [];

  for (let i = 0; i < numTeeth; i += 1) {
    const angle = angleBetween * i - offset;
    const angleRight = angle + 6;
    const angleNext = angle + angleBetween - 6;

    const tip = toCoordinates(r1, angle, center);
    const right = toCoordinates(r2, angleRight, center);
    const next = toCoordinates(r2, angleNext, center);

    commands.push(
      `${i === 0 ? 'M' : 'L'} ${tip.x} ${tip.y}`,
      `L ${right.x} ${right.y}`,
      `A ${r2} ${r2} 0 0 1 ${next.x} ${next.y}`,
    );
  }

  return commands.join(' ');
}
