import toCoordinates from './to-coordinates.js';
import toRadians from './to-radians';

const offset = 90;

export default function getTeethPath(r1, r2, angleBetween, center, numTeeth) {
  const commands = [];

  const toothAngle = angleBetween / 4;
  const toothWidth = Math.tan(toRadians(toothAngle)) * r1;

  for (let i = 0; i < numTeeth; i += 1) {
    const angle = angleBetween * i - offset;
    const angleRight = angle + toothAngle;
    const angleNext = angle + angleBetween - toothAngle;

    const tooth = getToothCoordinate(angle, toothWidth);
    const tip = toCoordinates(r1, angle, center);
    const right = toCoordinates(r2, angleRight, center);
    const next = toCoordinates(r2, angleNext, center);

    commands.push(
      `${i === 0 ? 'M' : 'L'} ${tip.x + tooth.x} ${tip.y - tooth.y}`,
      `L ${tip.x - tooth.x} ${tip.y + tooth.y}`,
      `L ${right.x} ${right.y}`,
      `A ${r2} ${r2} 0 0 1 ${next.x} ${next.y}`,
    );
  }

  return commands.join(' ');
}

function getToothCoordinate(angle, width) {
  return {
    x: Math.sin(toRadians(angle)) * width,
    y: Math.cos(toRadians(angle)) * width,
  };
}
