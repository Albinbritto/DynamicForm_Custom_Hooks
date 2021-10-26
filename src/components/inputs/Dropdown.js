import React from 'react';
import React from 'react';
export default function DropDown({
  label,
  id,
  value,
  onChangeHandler,
  className,
  options = [],
}) {
  const renderedOptions = options.map((item) => {
    console.log('item', item.value, item.value === value);
    return (
      <option
        value={item.value}
        key={item.value}
        selected={item.value === value}
      >
        {item.label}
      </option>
    );
  });
  return (
    <div className="form-group">
      <div className="form-label">
        <label htmlFor={id}>{label}</label>
      </div>
      <div className="form-input">
        <select onChange={onChangeHandler} className={className} id={id}>
          {renderedOptions}
        </select>
      </div>
    </div>
  );
}
