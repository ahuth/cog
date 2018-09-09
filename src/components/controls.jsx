import React from 'react';

export default function Controls({
  diameter2,
  diameter3,
  onDiameter2Change,
  onDiameter3Change,
  onTeethChange,
  teeth,
}) {
  return (
    <fieldset>
      <label htmlFor="teeth">Teeth ({teeth})</label>
      <input id="teeth" onChange={onTeethChange} min="3" max="24" type="range" value={teeth} />
      <label htmlFor="teeth">Diameter 2 ({diameter2})</label>
      <input id="d2" onChange={onDiameter2Change} min="0.25" max="1" step="0.03125" type="range" value={diameter2} />
      <label htmlFor="teeth">Diameter 3 ({diameter3})</label>
      <input id="d3" onChange={onDiameter3Change} min="0" max="0.75" step="0.03125" type="range" value={diameter3} />
    </fieldset>
  );
}
