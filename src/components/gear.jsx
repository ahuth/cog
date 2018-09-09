import React from 'react';
import getHolePath from '../utils/get-hole-path.js';
import getTeethPath from '../utils/get-teeth-path.js';

export default function Gear({
  size,
  diameter1,
  diameter2,
  diameter3,
  teeth,
  splay,
  fill,
}) {
  const center = size / 2;
  const r1 = diameter1 * size / 2;
  const r2 = diameter2 * size / 2;
  const r3 = diameter3 * size / 2;
  const angleBetween = 360 / teeth;
  const viewBox = `0 0 ${size} ${size}`;
  const pathData = [
    getTeethPath(r1, r2, angleBetween, center, teeth, splay),
    getHolePath(center, r3),
  ].join(' ');

  return (
    <svg height={size} width={size} viewBox={viewBox}>
      <path
        d={pathData}
        fill={fill}
        stroke="black"
      />
    </svg>
  );
}
