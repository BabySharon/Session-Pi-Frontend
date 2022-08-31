import React, { useState } from 'react';
import axios from "axios";

import './Animation.css';
import ProcessInput from '../components/ProcessInput';
import PlayAnimation from './PlayAnimation';
import DisplayType from './DisplayType';


function Animation() {
    var [num, setNum] = useState(1);
    const [content, setContent] = useState([1]);
    const [post, setPost] = useState([]);
    const[type, setType] = useState([])
    const[red, setRed] = useState();

    function handleProcessClick(e) {
        setNum(++num);
        let arr = [];
        arr.push(...content);
        arr.push(num);
        setContent(arr);

    }

    function handleCloseClick(n) {
        setContent(content.filter(item => item !== n))
    }

    function displayProcessInput() {
        let arr = [];
        if (num > 0)
            for (let i = 0; i < content.length; i++) {
                arr.push(<ProcessInput key={content[i]} num={content[i]} handleCloseClick={handleCloseClick} />)

            }
        return arr;
    }


    // TODO typig conetxt map now only accepts one console.log("con", content);elem
    function reduce(event) {
        event.preventDefault();
        var red = event.target.red.checked;
        setRed(red);
        var input = event.target[0].value;
        console.log(event);
        var body = {
            "input": input,
            // "input": "new x y  P[x branch {l1:x<m>, l2:x(2).x<true>}.x<b>.zero] | Q[ y select l2.(y<1>.y(z)).y(a).zero]",
            "processList": [],
            "red":red
        }
        for (let index = 1; index <= event.target.length - 4; index += 3) {
            let name = event.target[index].value;
            let sessionType = event.target[index + 1].value.trim();
            console.log(sessionType);
            let arr =[];
            arr = event.target[index + 2].value.split(',');
            let typingContextMap = {};
            arr.forEach(element => {
                let a = element.trim().split(":");
                console.log("object",a);
                typingContextMap[a[0]] = a[1];
            });
            body.processList.push({
                "name": name,
                "sessionType": sessionType,
                "typingContextMap": typingContextMap
            })
            // body.processList.push({
            //     "name": "P",
            //     "sessionType": "&{l1:!Int, l2:?Int^!Bool}.!Bool.end",
            //     "typingContextMap": {
            //         "m": "Int",
            //         "b": "Bool"
            //     }
            // })
            // body.processList.push({
            //     "name": "Q",
            //     "sessionType": "+{l1:?Int, l2:!Int^?Bool}.?Bool.end",
            //     "typingContextMap": {
            //         "a": "Bool",
            //         "z": "Bool"
            //     }
            // })
        }
        axios.post("http://localhost:8080/type-check/", body).then((response) => {
            if (response.status === 200){
                console.log(response.data);
                if(red)
                    setPost(response.data.steps);
                setType(response.data.ts);
            }
            else
                console.log("Error")
        });
    }

    return (
        <div className='container-wrap'>
            <div className="input">
                <form onSubmit={reduce}>
                    <h3>Enter the input</h3>
                    <textarea className='textArea' id="textAreaExample1" rows="5" cols="5"></textarea>
                    {displayProcessInput()}

                    <div className='imgDiv'>
                        <img className="imgIcon" src={require("./plus-sign.png")} alt="add button" onClick={handleProcessClick}></img>
                        <p>Add</p>
                    </div>
                    <div className='submitWrapper'>
                        <input type="radio" id="type" value="Type Check" name="select"/>
                        <label for="type">Type Check</label>
                        <input type="radio" id="red" value="Semantics" name="select"/>
                        <label for="red">Semantics</label>
                    </div>
                    <button type="submit" id="type-check" className="btn btn-primary" >Submit</button>
                </form>

            </div>
            
            {red === true ?
           ( post.length !== 0 ? <PlayAnimation steps={post} /> : <p>Type Errors - See type checking to see the error</p>)
            :red === false? <DisplayType ts={type} />:<></>}
        </div>

    );
}
export default Animation;