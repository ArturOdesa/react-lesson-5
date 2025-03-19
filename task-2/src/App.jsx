import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('count', count);
  })

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  )
}

export default App
