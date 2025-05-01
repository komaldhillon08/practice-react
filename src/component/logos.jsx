// header iumg componnents 
import HeaderImg from './header/header.jsx'
import { CORE_CONCEPTS } from './topics/topics.js'

export default function Logos() {
  return (
    <div className='logos'>
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
  );
}