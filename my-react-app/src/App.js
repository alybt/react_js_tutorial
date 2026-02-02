import HelloWorld from "./components/HelloWorld";
import './App.css';
import Sample from "./components/Sample";


function App() {
  const saygoodbye = "See you again";
  const number = 15;
  const num = 18;
  const name = "Aly";


  return ( 
    <div className = "App">
      <HelloWorld num = {num} name = {name}/>
      <div>{saygoodbye} {number + number}</div>
      <div className = 'sample-css'> Hello CSS App </div>
      <Sample> </Sample>
    </div> );
}

 
export default App;
