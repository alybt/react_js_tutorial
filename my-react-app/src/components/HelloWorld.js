import React from 'react'


function HelloWorld(){

    const greeting = "Hello World";
    const introduction = "My name is Aly";
    const link = "http://www.google.com"

    return(
        <div>
            <div>{greeting}</div>
            <div>{introduction}</div>
            <a href ={link}> Go to Google</a>
        </div>
    )
}

export default HelloWorld