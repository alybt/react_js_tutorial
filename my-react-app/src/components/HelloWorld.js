import React from 'react'


function HelloWorld({num, name}){

    const greeting = "Hello World";
    const introduction = "My name is Aly";
    const link = "http://www.google.com";
    

    return(
        <div>
            <div>{greeting}! {name}</div>
            <div>{introduction}</div>
            <a href ={link}> Go to Google {num}</a>
        </div>
    )
}

export default HelloWorld