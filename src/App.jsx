import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boat from './boat'
import { FaHome } from "react-icons/fa";
import Banner from './banner'
import Card from './card'
import {obj} from "./news"
import Photo from './part'
import Small from './small'
import Video from './video'
import About from './about'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Boat/>
      <Banner/>
      <div style={{display:"flex"}} className='cardd'>
      <Card />
      </div>
      <div className='more'>
      <Photo/>
      </div>
      <div style={{display:"flex"}} className='cardd'>
      <Card />
      </div>
      <div style={{display:"flex"}}>
      </div>
     <Small/>
      <Video/>

      <div style={{display:"flex"}} className='cardd'>
      <Card />
      </div>
      <About/>

    </>
  )
}

export default App
