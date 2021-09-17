import React, {useState} from 'react';
import {useSetRecoilState} from 'recoil';

import {eventsList} from '../state/atoms/eventsList';


const EventForm = (props) => {
  const [inputValue, setInputValue] = useState({
    firstName: '',
    lastName: '',
    email: '',
    date: '',
  });
  const setTodoList = useSetRecoilState(eventsList);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        firstName: inputValue.firstName,
        lastName: inputValue.lastName,
        email: inputValue.email,
        date: inputValue.date
      },
    ]);
    setInputValue('');
  };

  const submit = () => {
    const formData = {
        firstName: inputValue.firstName,
        lastName: inputValue.lastName,
        email: inputValue.email,
        date: inputValue.date
      };

    setInputValue('');
    props.onSubmit(formData);
  }

  const onChange = ({target: {value}}) => {
    setInputValue({
      ...inputValue,
      target:  value
    });
  };
  return (
    <>
      <div className='event-form'>
        <form onSubmit={submit}>
        <input name='firstName' type='text' onChange={onChange} required/>
        <input name='lastName' type='text' onChange={onChange} required/>
        <input type="email" id="email"
       pattern=".+@globex\.com" onChange={onChange} required />
       <input type="date" onChange={onChange} required/>
       <button type="submit" className="submitButton">Submit</button>
       </form>
      </div>
    </>
  );
};
export default EventForm;