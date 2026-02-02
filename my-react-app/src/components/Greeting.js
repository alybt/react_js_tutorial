import React from 'react'


function Greeting(){

    // function sayHi(){
    //     alert('Hi');
    // }

    const sayHi = (name,surname) =>{
        alert('Hi '+ name + ' ' + surname);
    }

    return (
        <div>
            <button onClick={() =>sayHi('Aly', 'Bitun')}> Say Hi </button>
        </div>
    )
}

export default Greeting;