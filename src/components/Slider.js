import React from 'react';

export default function Slider(props) {
  const { min, max, value, handleChange } = props;

  return (
    <div className='slider-container'>
      <input
        type='range'
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        className='slider'
      />
    </div>
  );
}
