import { createContext, useState } from "react";


  export const CounterContext = createContext(0);


  export default function CounterContextProvider(props){

 const[Counter,setCounter]=useState(0);
 const[Username,setUsername]=useState('');



 function changeCounter(){
 setCounter(Math.random)
 }

 return (
  <CounterContext.Provider value={{ Counter, Username , setCounter}}>
    {props.children}
  </CounterContext.Provider>
);

 }

 