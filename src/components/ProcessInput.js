import React, { useState } from 'react';

function ProcessInput(props){
    // const [pos, setPos] = useState();
    function handleClose(){
        props.handleCloseClick(props.num)
    }

    return (
        <div className='inputData' name={"input" + props.num}>
        <div className='element'>
            <h5>Process Name</h5>
            <input type="text" className="textLine" />
        </div>

        <div className='element'>
            <h5>Session Type</h5>
            <input type="text" className="textLineSession" />
        </div>

        <div className='element'>
            <h5>Typing Context</h5>
            <textarea className='textContext' id="textAreaExample1" rows="10" cols="15" placeholder='Eg - a:Int'></textarea>
        </div>
        <img className="closeButton" src={require("./cancel.png")} onClick={handleClose}></img>
    </div>
    );
}


export default ProcessInput;