import { useState } from 'react';
import { putMonsterData } from '../API/API';

const useFormInput = (initialValue, handleInputChange, formatData) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    handleInputChange(event, value, setValue);
  };

  const handleSubmit = () => {
    const data = formatData(value);
    const idToken = JSON.parse(sessionStorage.getItem('idToken'));
    putMonsterData(data, idToken);
  };

  return {
    value,
    onChange: handleChange,
    onSubmit: handleSubmit,
  };
};

export default useFormInput;
