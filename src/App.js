import React, { useState } from 'react';
import './style.css';
import DynamicForm from './components/DynamicForm';

const formData = [
  {
    label: 'First name',
    id: 'first_name',
    type: 'text',
    value: '',
    required: true,
    requiredMsg: 'First Name is Required',
    minlength: 3,
    maxlength: 10,
  },
  {
    label: 'Last name',
    id: 'last_name',
    type: 'text',
    required: true,
    requiredMsg: 'Last Name is Required',
    minlength: 3,
    maxlength: 10,
  },
  {
    label: 'Email',
    id: 'email',
    type: 'text',
    required: true,
    requiredMsg: 'Email is Required',
  },
  {
    label: 'Phone',
    id: 'phone',
    type: 'text',
    required: true,
    requiredMsg: 'Phone Number is Required',
    minlength: 10,
    maxlength: 10,
  },
  {
    label: 'College Name',
    id: 'college_name',
    type: 'text',
    required: true,
    requiredMsg: 'College Name is Required',
  },
  {
    label: 'School',
    id: 'school_name',
    type: 'text',
  },
  {
    label: 'Address',
    id: 'address',
    type: 'text',
    required: true,
    requiredMsg: 'Address is required',
  },
  {
    label: 'city',
    id: 'city',
    type: 'dropdown',
    required: true,
    requiredMsg: 'city is required',
    value: 'chennai',
    options: [
      {
        label: 'Select city',
        value: '',
      },
      {
        label: 'chennai',
        value: 'chennai',
      },
      {
        label: 'Madurai',
        value: 'madurai',
      },
      {
        label: 'Coimbatore',
        value: 'coimbatore',
      },
      {
        label: 'Bangalore',
        value: 'bangalore',
      },
    ],
  },
];

export default function App() {
  const [formOutput, setFormOutput] = useState({});
  function onSubmit(form) {
    setFormOutput(form);
  }
  return (
    <div className="container">
      <DynamicForm model={formData} formSubmitHandler={onSubmit} />
      {JSON.stringify(formOutput)}
    </div>
  );
}
