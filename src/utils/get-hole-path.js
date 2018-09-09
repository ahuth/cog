export default function getHolePath(center, radius) {
  return [
    'M', center, center - radius,
    'A', radius, radius,
    '0 0 0',
    center, center + radius,
    'A', radius, radius,
    '0 0 0',
    center, center - radius,
  ].join(' ');
}
