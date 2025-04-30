import { useEffect, useState } from 'react'
import './App.css'
// add logo file in componenet folder 
import Logos from './component/logos.jsx'
import './component/button/button.css'
// add the example file in component folder
import Examples from './component/examples.jsx'
// add multiple names 
const reactNameChange = ["komal", "preet", "singh", "dhilon"]
function reactRandomName(max) {
  return Math.floor(Math.random() * (max + 1));
}
const ShowReactName = reactNameChange[reactRandomName(3)];
// create the new function 
/* function ShowReactImg() {
  return (
    <header>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
    </header>
  );
  
} */

function App() {
  const [count, setCount] = useState(0)

  // how to use useeffect 
  useEffect(() => {
    // first 
    return () => {
      // second
    }

  }, [])

  return (
    <>
      <main>
        <Logos />
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          {ShowReactName} Click on the Vite and React logos to learn more
        </p>
        <Examples />
      </main>
    </>
  )
}
export default App
