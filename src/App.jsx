import { useEffect, useState } from 'react'
import './App.css'
import './style.css'
import ProgressBarCustom from './components/ProgressBarCustom';

function App() {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((val) => {
        const next = val + 0.1;
        if (next >= 100) {
          clearInterval(interval);
          setSuccess(true);
          return 100
        }
        return next;
      });
    },20)
    
   return () => clearInterval(interval);
  }, []);

  return (
    <>
     <div className='app'>
      <span>Progress Bar</span>
      <ProgressBarCustom value={value} />
      <span>{success ? "Complete!" : "Loading..."}</span>
     </div>
    </>
  )
}

export default App
