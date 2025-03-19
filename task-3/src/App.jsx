import { useState } from 'react'
import './App.css'
import UserCard from './components/UserCard/UserCard';
import { useEffect } from 'react';

function App() {

  const [users, setUsers] = useState([]);

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);

  const changeUserInfoHandler = () => {
    if (idx < users.length - 1) {
      setIdx(idx + 1);
    } else {
      setIdx(idx * 0);
    }
  }

  return (
    <>
      {console.log('render App')}
      <UserCard handler={changeUserInfoHandler} {...users[idx]} />
    </>
  )
}

export default App
