import React from "react";
import './DisplayType.css';

function DisplayType(props) {
    function handleElement(e) {
        let arr = [];
        if(e === undefined){
        for (let i = 0; i < props.ts.length; i++) {
            console.log("here");
            arr.push(
            <div className="type-wrapper">
                {props.ts[i].text !== undefined?<p>{props.ts[i].rule}{" - "+props.ts[i].text}</p> 
                :<p>{props.ts[i].rule}</p> }
                
                {console.log(props, "props")}
                <div className="typing-context">
                    {Object.keys(props.ts[i].typingContexts).map(k => {
                        return <p key={k}>{k}:{props.ts[i].typingContexts[k]}</p> 
                    })}
                </div>
                <p className="error">{props.ts[i].errorMessage}</p>
                <hr/>
            </div>);

        }
    }
    else
        arr=[];
        return arr;
    }
    return (
        <div className="type-wrapper">
            {handleElement()}
            {/* <button className="btn btn-primary" onClick={handleElement}>Clear</button> */}
        </div>
    );
}

export default DisplayType;