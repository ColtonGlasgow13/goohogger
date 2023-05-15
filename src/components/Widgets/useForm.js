// useForm.js
import { useState } from 'react';
import { putMonsterData } from '../API/API';

const useForm = (initialState, formatData) => {
  const [state, setState] = useState(initialState);

  const handleInputChange = (event, customHandler) => {
    if (customHandler) {
      customHandler(event, state, setState);
    } else {
      const { name, value } = event.target;
      setState(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = () => {
    const data = formatData(state);
    const idToken = JSON.parse(sessionStorage.getItem('idToken'));
    putMonsterData(data, idToken);
  };

  return {
    values: state,
    onChange: handleInputChange,
    onSubmit: handleSubmit,
  };
};

export default useForm;
