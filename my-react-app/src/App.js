 
import { use, useState } from 'react';
import './App.css'; 
import Navbar from "./components/Navbar"; 



function App() {
  
  const [name, setName] = useState("");
  
  const [students, setStudents] = useState(['Alex', 'David', 'Joe'])
 
  const [showNotification, setShowNotification] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setStudents(currentStudents => [...currentStudents, name ]);
    setName('');
  }

  const handleDelete = (deletingStudent) => {
    const newStudents = students.filter((student) => student !== deletingStudent);
    setStudents(newStudents);


  }

  const toggleNotification = () => {
    setShowNotification(!showNotification);

  }

  return ( 
    <div className = "App">
      <Navbar></Navbar> 
      <br></br>

      {showNotification ? <div className='notification'>This is notification</div>: ''}
      <button onClick={(toggleNotification )}>Toggle Notification</button>

      <form onSubmit={handleSubmit}>
        <div>Add new Student </div>
        <input type= "text" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="submit"/>
      </form>

      <br></br>
      <h1>All Students</h1>
      <ul>
        {
          students.map((student, index) => <li key={index}>{student} <button onClick={()=> handleDelete(student)}>Delete</button></li>)
        }
      </ul>


    </div> );
}

 
export default App;
