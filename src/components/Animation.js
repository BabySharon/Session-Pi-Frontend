import React, { useState } from 'react';
import axios from "axios";

import './Animation.css';
import ProcessInput from '../components/ProcessInput';
import PlayAnimation from './PlayAnimation';


function Animation() {
    var [num, setNum] = useState(1);
    const [content, setContent] = useState([1]);
    const [post, setPost] = useState([]);

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
        var input = event.target[0].value;
        var body = {
            // "input": input,
            input: "new x y  P[x branch {l1:x<m>, l2:x(2).x<true>}.x<b>.zero] | Q[ y select l2.(y<1>.y(z)).y(a).zero]",
            "processList": []
        }
        for (let index = 1; index <= event.target.length - 3; index += 3) {
            let name = event.target[index].value;
            let sessionType = event.target[index + 1].value;
            let arr = event.target[index + 2].value.split(':');
            let typingContextMap = {};
            typingContextMap[arr[0]] = arr[1];
            // body.processList.push({
            //     "name": name,
            //     "sessionType": sessionType,
            //     "typingContextMap": typingContextMap
            // })
            body.processList.push({
                "name": "P",
                "sessionType": "&{l1:!Int, l2:?Int^!Bool}.!Bool.end",
                "typingContextMap": {
                    "m": "Int",
                    "b": "Bool"
                }
            })
            body.processList.push({
                "name": "Q",
                "sessionType": "+{l1:?Int, l2:!Int^?Bool}.?Bool.?Bool.end",
                "typingContextMap": {
                    "a": "Bool",
                    "z": "Bool"
                }
            })
        }
        axios.post("http://localhost:8080/type-check?red=true", body).then((response) => {
            if (response.status === 200)
                setPost(response.data);
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
                        <button type="submit" className="btn btn-primary" >Type Check</button>
                        <button type="submit" className="btn btn-primary" >Semantics</button>
                    </div>
                </form>

            </div>
            {post.length !== 0 ? <PlayAnimation steps={post} /> : <></>}
        </div>

    );
}
export default Animation;