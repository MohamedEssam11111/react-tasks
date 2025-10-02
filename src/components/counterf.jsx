import {useState} from "react";

const Counterf = ()=>{

  const [counter , setcounter] = useState(0);
  return(
  <>
    <div>functional component (counter)</div>
    <p>count: {counter}</p>
    <button onClick={()=> setcounter(counter+1)}>+1</button>
    <button onClick={()=> setcounter(0)}>reset</button>
    <button onClick={()=> setcounter(counter-1)}>-1</button>
  </>
);}
export default Counterf;