import React from 'react';

export default function Slider(props) {
  const { min, max, value, handleChange } = props;

  return (
    <div className='slider-container'>
      <input
        type='range'
        className='slider'
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
      <p className='slider-text'>
        Current value: <span className='slider-value'>{value}</span>
      </p>
    </div>
  );
}
