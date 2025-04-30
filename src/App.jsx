import { useEffect, useState } from 'react'
import './App.css'



// header iumg componnents 
import HeaderImg from './component/header/header.jsx'
import { CORE_CONCEPTS } from './component/topics/topics.js'


//create the btn with using the components 
import { Buttons } from './component/button/button.jsx'
import './component/button/button.css'

// topic file add and i click the button the show some content 
import { Topic } from './component/topics/topics.js'




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
  const [selectTopic, setTopic] = useState()

  // how to use useeffect 
  useEffect(() => {
    // first 
    return () => {
      // second
    }

  }, [])

  // console.log(reactRandomName(4));

  // click function in button and  then something information showing 

  function clickButtonShowInfo(buttonInformation) {
    console.log(buttonInformation);
    setTopic(buttonInformation)
    // console.log("cheche the function " , setTopic);
  }
  // console.log("check the selectTopic>>>>>>>>>>>>>>>",clickButtonShowInfo);



  let buttonContent = <p>select the topic</p>

  if (selectTopic) {
    buttonContent = (
      <div className="tab-content">
            <h3>{Topic[selectTopic].title}</h3>
            <p>{Topic[selectTopic].description}</p>

            <button onClick={() => setCount((count) => count + 1)}>recount {count}</button>
          </div>
    );
  }
  


  return (
    <>
      <div>
        {/* <ShowReactImg /> */}


        {/* this code is using the object type and props*/}
        {/* <HeaderImg img1={viteLogo} img={reactLogo} /> */}
        


    {CORE_CONCEPTS.map((conceptItem, index) => (
        <HeaderImg
        key={index}
        img={conceptItem.Image}
      />
    ))}


      

      </div>
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
      <section>
        <h2>examples</h2>
        <menu>
          <ul className='list'>
            {/*   <Buttons text={"conponents"} />
            <Buttons text={"jsx"} />
            <Buttons text={"html"} /> */}

            <Buttons /* selectTopic={selectTopic === "components"}  */onSelect={() => { clickButtonShowInfo("components") }}>component</Buttons>
            <Buttons onSelect={() => { clickButtonShowInfo("jsx") }}>jsx</Buttons>
            <Buttons onSelect={() => { clickButtonShowInfo("html") }}>html</Buttons>

          </ul>
        </menu>
        {/*   <div className="tab-content">
          <h3>{Topic[selectTopic].title}</h3>
          <p>{Topic[selectTopic].description}</p>

          <button onClick={() => setCount((count) => count + 1)}>recount {count}</button>
        </div>
         */}

      {/*   {!selectTopic ? (<p>Please select the topics</p>) : (
          <div className="tab-content">
            <h3>{Topic[selectTopic].title}</h3>
            <p>{Topic[selectTopic].description}</p>

            <button onClick={() => setCount((count) => count + 1)}>recount {count}</button>
          </div>
        )} */}

       {/*  {!selectTopic &&  <p>Please select the topics</p> }
        {selectTopic && (
          <div className="tab-content">
          <h3>{Topic[selectTopic].title}</h3>
          <p>{Topic[selectTopic].description}</p>

          <button onClick={() => setCount((count) => count + 1)}>recount {count}</button>
        </div>
        )}
 */}
      {buttonContent}
      </section>
    </>
  )
}

export default App
