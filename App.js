import React from 'react'
import './App.css'
import './index.css'
import Form from './comp/form'
import Navbar from './comp/navbar'
import Image from './3.jpg'
import { useState } from 'react'
function App(){
//const name ="Abdullah"

const [name , setName] = useState(" Abdullah ")
const [num , setNum] = useState(0)
const [color , setColor] = useState("red")

function getgo() {
  setName("Abdullah")
}
function inc(){
  setNum(num + 1)
}

function dec() {
  setNum(num - 1)
}

return (
  <div className='abc' style={{backgroundColor : color}}>
  {/*html*/}
  <br></br>

 <h1>hi Abdullah {num} </h1>

<button onMouseEnter={dec}> dec </button>
<button onClick={inc}> inc </button>
<button onClick={getgo}>click me</button>

<button onClick={() => setColor("blue")}> blue </button>
<button onClick={() => setColor("green")}> green </button>
<button onClick={() => setColor("red")}> red </button>
<button onClick={() => setColor("black")}> black </button>
<button onClick={() => setColor("white")}> white </button>

<hi>hi Abdullah {name}</hi>

<Navbar/>
<Form name="Abdullah" rollnum = {33}/>
<Form name="Abdullah" rollnum = {3322}/>

<br></br>
<img src={Image} width={50}></img>
<Form/>
  </div>
)
}

export default App