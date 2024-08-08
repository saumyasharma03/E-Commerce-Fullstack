import { useState } from 'react'
import Navbar from './components/Navbar';
import Admin from './components/Admin';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='bg-primary text-tertiary'>
      <Navbar />
      <Admin />
    </main>
  )
}

export default App
