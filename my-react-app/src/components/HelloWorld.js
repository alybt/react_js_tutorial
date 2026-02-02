import React from 'react'


function HelloWorld({num, name}){

    const greeting = "Hello World";
    const introduction = "My name is Aly";
    const link = "http://www.google.com";
    

    return(
        <div style={myStyle} >
            <div>{greeting}! {name}</div>
            <div>{introduction}</div>
            <a href ={link}> Go to Google {num}</a>
        </div>
    )

    
}
const myStyle = {backgroundColor: 'red', padding: '10px', fontSize: '20px', color: 'blue'};

export default HelloWorld