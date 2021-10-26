import React, { useState, useEffect } from 'react';

export default function useForm(callBack, Validator) {
  const [values, setValues] = useState({});
  const [formData, setFormData] = useState([]);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    Object.keys(errors).length === 0 && isSubmitting && callBack(values);
  }, [errors]);

  console.log('useForm rendering....', values);

  useEffect(() => {
    setIsSubmitting(false);
    if (currentId) {
      setErrors(
        Validator(
          formData.filter((data) => data.id === currentId),
          values,
          errors
        )
      );
    }
  }, [values]);

  function onChange(e) {
    setCurrentId(e.target.id);
    setValues((values) => {
      return { ...values, [e.target.id]: e.target.value };
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors(Validator(formData, values, errors, true));
  }

  return {
    values,
    onSubmit,
    onChange,
    setFormData,
    errors,
  };
}
