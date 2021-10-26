import React from 'react';

export default function TextBox({
  label,
  id,
  type,
  value,
  onChangeHandler,
  required,
  minLength,
  maxLength,
  className,
}) {
  return (
    <div className="form-group">
      <div className="form-label">
        <label htmlFor={id}>{label}</label>
      </div>
      <div className="form-input">
        <input
          className={className}
          type={type}
          id={id}
          value={value}
          onChange={onChangeHandler}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
        />
      </div>
    </div>
  );
}
