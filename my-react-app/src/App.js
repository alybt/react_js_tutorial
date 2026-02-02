import HelloWorld from "./components/HelloWorld";


function App() {
  const saygoodbye = "See you again";
  const number = 15;
  const num = 18;
  const name = "Aly";


  return ( <div className = "App">
    <HelloWorld num = {num} name = {name}/>
    <div>{saygoodbye} {number + number}</div>
     </div> );
}

 
export default App;
