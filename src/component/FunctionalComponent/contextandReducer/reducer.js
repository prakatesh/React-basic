import React, { useReducer } from 'react';
const initalstate={
  ssf:0,
  ffs:10
}
const reducer=(state,action)=>
{
  switch(action.type)
  {
    case "inc":
      return {...state,ssf:state.ssf+action.val}
    case "dec":
      return {...state,ssf:state.ssf-action.val}
    case "reset":
      return initalstate
    case "inc2":
      return {...state,ffs:state.ffs+action.val}
    case "dec2":
      return {...state,ffs:state.ffs-action.val}
  }
}
function Reducer() {
  const [count,disptach]=useReducer(reducer,initalstate)
  const [count2,disptach2]=useReducer(reducer,initalstate)
  return (
    <div>
      {/* <Usecontext1.Provider value={{val:0}}>
      
      </Usecontext1.Provider> */}
      ssf-{count.ssf}<br></br>
      <button onClick={()=>disptach({type:"inc",val:1})}>Inc</button>
      <button onClick={()=>disptach({type:"dec",val:1})}>DEC</button>
      <button onClick={()=>disptach({type:"reset",val:1})}>Resset</button><br/>
      ffs-{count.ffs}<br></br>
      <button onClick={()=>disptach({type:"inc2",val:1})}>Inc</button>
      <button onClick={()=>disptach({type:"dec2",val:1})}>DEC</button><br/>
      ssf-{count2.ssf}<br></br>
      <button onClick={()=>disptach2({type:"inc",val:1})}>Inc</button>
      <button onClick={()=>disptach2({type:"dec",val:1})}>DEC</button>
      <button onClick={()=>disptach2({type:"reset",val:1})}>Resset</button><br/>
      ffs-{count2.ffs}<br></br>
      <button onClick={()=>disptach2({type:"inc2",val:1})}>Inc</button>
      <button onClick={()=>disptach2({type:"dec2",val:1})}>DEC</button>
      
    </div>
  );
}

export default Reducer;
