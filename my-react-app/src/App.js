 
import { useState } from 'react';
import './App.css'; 
import Navbar from "./components/Navbar"; 



function App() {
  
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("My name is" + name);
  }

  return ( 
    <div className = "App">
      <Navbar></Navbar> 
      <br></br>
      <form onSubmit={handleSubmit}>
        <div>What's your name?</div>
        <input type= "text" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="submit"/>
      </form>


    </div> );
}

 
export default App;
