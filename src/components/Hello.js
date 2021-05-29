import React from 'react'

/*
const Hello = () => {
    return (
        <div className = 'dummyClass'>
            <h1> Hello Riz</h1>
        </div>
    )
}
*/

const Hello = () => {
    return React.createElement(
        'div', 
        { id: 'helo', className: 'dummyClass'}, 
        React.createElement('h1', null, 'Hello Riz'))
}

export default Hello
