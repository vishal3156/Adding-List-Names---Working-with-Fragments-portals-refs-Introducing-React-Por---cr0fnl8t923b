import React , {useState,useEffect, useRef} from 'react'
import '../styles/App.css';
import List from "./List";
const App = () => {
  //code here
  const inpref = useRef(null);
  const [list, setList] = useState([]);
  const addVal = () => {
    setList((prev)=>[...prev,inpref.current.value]);
  }
  return (
    <div id="main">
       <input id="input" ref={inpref} />
      <button id="button" onClick={addVal}>Click</button>
       <ul id="list">
      <List listx={list} />
      </ul>
    </div>
  )
}


export default App;
