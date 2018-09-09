import React from 'react';

export default function Controls({
  onTeethChange,
  teeth,
}) {
  return (
    <fieldset>
      <label htmlFor="teeth">Teeth ({teeth})</label>
      <input id="teeth" onChange={onTeethChange} min="3" max="24" type="range" value={teeth} />
    </fieldset>
  );
}
