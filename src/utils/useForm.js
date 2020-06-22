import React, {useState} from 'react';

export const useForm = (initialState) => {
  const [values, setValues] = useState(initialState);

  return [
    values,
    (type, params) => {
      return setValues({...values, [type]: params});
    },
  ];
};
