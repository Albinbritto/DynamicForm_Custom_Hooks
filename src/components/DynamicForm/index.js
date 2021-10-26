import React, { useEffect } from 'react';
import useForm from '../../Hooks/useForm';
import Validator from './DynamicValidator';
import UserInput from '../inputs';

export default function DynamicForm({ model = [], formSubmitHandler }) {
  const { values, onChange, onSubmit, setFormData, errors } = useForm(
    login,
    Validator
  );

  useEffect(() => {
    setFormData(model);
  }, [model]);

  function login(formData) {
    console.log('formData', formData);
    formSubmitHandler(formData);
  }
  const renderedDynamicForm = model.map((item) => {
    const { label, type, id, value, required, minlength, maxlength, options } =
      item;
    const inputValue = Object.keys(values).includes(id) ? values[id] : value;
    const InputElement = UserInput[type];
    return (
      <div key={id}>
        <InputElement
          label={label}
          type={type}
          required={required}
          id={id}
          options={options}
          value={inputValue || ''}
          className={errors[id] ? 'error-border' : ''}
          minLength={minlength}
          maxLength={maxlength}
          onChangeHandler={onChange}
        />
        <div className="error">{errors[id]}</div>
      </div>
    );
  });

  return (
    <form onSubmit={onSubmit} noValidate>
      {renderedDynamicForm}
      <button>Submit</button>
    </form>
  );
}
