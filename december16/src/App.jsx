
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const fristname = "jhon";
  const x = 5;
  const mydata = {
    color:"green",
    backgroundColor:"yellow",
    fontSize:"20px",
    borderRadius:"20px",
    border:"10px solid gray",
    padding:"20px",
  }
  const img = {
    height:"300px",width:"300px",
  }

  return (
    
    <>
     <h1 style={{color:"red",backgroundColor:"magenta"}}>hello world {fristname}</h1>   
     <p className="head">to kaise ho <br/> app log ?</p>     
     <h1>{6*6*7889*56}</h1>
     <h2>{x>5? "number is greater":"number is smaller"}</h2>
     <h3 style={mydata}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolor rem reprehenderit recusandae ipsum sit. Voluptate facere libero sint mollitia possimus fuga. Illum, totam explicabo nobis dolores earum eum molestias ducimus libero dolorem sequi ab aliquid nam. Voluptatum repellat eum vel repudiandae natus rerum qui! Itaque dignissimos incidunt quam eveniet.</h3>
     <img style={img} src='\src\img\px.jpg'/>
    </>
  )
}

export default App
 