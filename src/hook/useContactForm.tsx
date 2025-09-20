import {useState} from 'react';


const useContactForm = () => {
  const [values, setValues] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: { target: { id: any; value: any; }; }) => {
    setValues(prevState => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  return {values, handleChange};
};

export default useContactForm;