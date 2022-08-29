import React, { useState } from 'react';
import axios from "axios";

import './Animation.css';
import ProcessInput from '../components/ProcessInput';
import ReductionStep from './ReductionStep';


function Animation() {
    var [num, setNum] = useState(1);
    const [content, setContent] = useState([1]);
    const [post, setPost] = useState([]);

    function handleProcessClick(e) {
        setNum(++num);
        let arr =[];
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
            input:"new x y P[x<true>.x(b).zero] | Q[zero]",
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
                "sessionType": "!Bool.?Bool.end",
                "typingContextMap": {"b":"Bool"}
            })
            body.processList.push({
                "name": "Q",
                "sessionType": "end",
                "typingContextMap": {}
            })
        }
        axios.post("http://localhost:8080/type-check?red=true", body).then((response) => {
            if(response.status == 200)
                setPost(response.data);
            else
                console.log("Error")
        });


        // console.log(event2State, body)

    } 
 
    return (
        <div className='container-wrap'>
        <div className="input">
            <form onSubmit={reduce}>
                <h3>Enter the input</h3>
                <textarea className='textArea' id="textAreaExample1" rows="10" cols="5"></textarea>
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
        <div className='animation'>
            {console.log("post", post)}
            {post.forEach((step)=>{
                <>
                <ReductionStep step={step}/>
                </>
            })}
        </div>
        </div>

    );
}
export default Animation;