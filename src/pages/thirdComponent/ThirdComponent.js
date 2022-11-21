import React from 'react';

function ThirdComponent(props) {
    const btnClick=()=>{
        console.log("Hello World!")
    }
    return (
        <div>
            <button onClick={btnClick}>Click!</button>
        </div>
    );
}

export default ThirdComponent;