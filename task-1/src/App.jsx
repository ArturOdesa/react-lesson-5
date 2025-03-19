import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
  });

  const nameRef = useRef();
  const surnameRef = useRef();
  const emailRef = useRef();

  const onClickHandler = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const surname = surnameRef.current.value;
    const email = emailRef.current.value;
    setFormData({
      name: name,
      surname: surname,
      email: email
    })

    nameRef.current.value = '';
    surnameRef.current.value = '';
    emailRef.current.value = '';
  } 

  console.log(formData);

  return (
    <>
      <form className='form'>
        <input type="text" placeholder='Name...' ref={nameRef} />
        <input type="text" placeholder='Surname...' ref={surnameRef} />
        <input type="email" placeholder='Email...' ref={emailRef}/>
        <button onClick={onClickHandler}>Submit</button>
      </form>
    </>
  )
}

export default App
