import {useState} from "react";
function App(){
  const[show,setShow]= useState(false);
  return(
    <div>
      <button onClick={()=> setShow(!show)}>
        Show/Hide
      </button>
      {show && <p>Hello React!</p>}
    </div>
  );
}
export default App;