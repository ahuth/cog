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

    const toothCornerOffset = getToothCornerOffset(angle, toothWidth);
    const tip = toCoordinates(r1, angle, center);

    const topLeft = { x: tip.x + toothCornerOffset.x, y: tip.y - toothCornerOffset.y };
    const topRight = { x: tip.x - toothCornerOffset.x, y: tip.y + toothCornerOffset.y };
    const bottomRight = toCoordinates(r2, angleRight, center);
    const nextBottomLeft = toCoordinates(r2, angleNext, center);

    commands.push(
      `${i === 0 ? 'M' : 'L'} ${topLeft.x} ${topLeft.y}`,
      `L ${topRight.x} ${topRight.y}`,
      `L ${bottomRight.x} ${bottomRight.y}`,
      `A ${r2} ${r2} 0 0 1 ${nextBottomLeft.x} ${nextBottomLeft.y}`,
    );
  }

  return commands.join(' ');
}

function getToothCornerOffset(angle, width) {
  return {
    x: Math.sin(toRadians(angle)) * width,
    y: Math.cos(toRadians(angle)) * width,
  };
}
