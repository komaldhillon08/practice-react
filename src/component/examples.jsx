import { useState, useEffect } from 'react';
//create the btn with using the components 
import { Buttons } from './button/button.jsx'
// topic file add and i click the button the show some content 
import { Topic } from './topics/topics.js'
// import section file 
import Section from './Section.jsx';
// import tabs file 
import Tabs from './Tabs.jsx';


export default function Examples() {
    const [selectTopic, setTopic] = useState()


    function clickButtonShowInfo(buttonInformation) {
        console.log(buttonInformation);
        setTopic(buttonInformation)
        // console.log("cheche the function " , setTopic);
    }
    // console.log("check the selectTopic>>>>>>>>>>>>>>>",clickButtonShowInfo);


    // console.log(reactRandomName(4));

    // click function in button and  then something information showing 
    let buttonContent = <p>select the topic</p>

    if (selectTopic) {
        buttonContent = (
            <div className="tab-content">
                <h3>{Topic[selectTopic].title}</h3>
                <p>{Topic[selectTopic].description}</p>

                {/* <button onClick={() => setCount((count) => count + 1)}>recount {count}</button> */}
            </div>
        );
    }




    return (
        // <Section title={"examples"} id="examples" className="examples">
        <Section title="examples" id="examples" className="examples">
            <Tabs button={
                <>
                    {/* <h2>examples</h2> */}
                    <menu className='btn'>
                        <ul className='list'>
                            {/*   <Buttons text={"conponents"} />
                            <Buttons text={"jsx"} />
                            <Buttons text={"html"} /> */}

                            <Buttons /* selectTopic={selectTopic === "components"}  */ onClick={() => { clickButtonShowInfo("components") }}>component</Buttons>
                            <Buttons onClick={() => { clickButtonShowInfo("jsx") }}>jsx</Buttons>
                            <Buttons onClick={() => { clickButtonShowInfo("html") }}>html</Buttons>

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
                </>
              }>


            </Tabs>
            {buttonContent}
        </Section>
    );
}