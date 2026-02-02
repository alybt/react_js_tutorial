import HelloWorld from "./components/HelloWorld";


function App() {
  const saygoodbye = "See you again";
  const number = 15;


  return ( <div className = "App">
    <HelloWorld/>
    <div>{saygoodbye} {number + number}</div>
     </div> );
}

 
export default App;
