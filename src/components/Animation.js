import './Animation.css';
import React, { useState } from 'react';
import axios from "axios";


function Animation() {
    var [num, setNum] = useState(1);
    const [post, setPost] = useState();

    function handleProcessClick(e) {
        setNum(num++);
        console.log(num);
    }
// TODO typig conetxt map now only accepts one elem
    function reduce(event) {
        event.preventDefault();
        var input = event.target[0].value;
        var body={
            "input":input,
            "processList":[]
        }
        for (let index = 1; index <= event.target.length-3; index+=3) {
           let  name = event.target[index].value;
           let  sessionType = event.target[index+1].value;
           let arr = event.target[index+2].value.split(':');
           let typingContextMap = {};
           typingContextMap[arr[0]] = arr[1];
           body.processList.push({"name": name,
           "sessionType":sessionType,
           "typingContextMap":typingContextMap
        })
        }
        axios.post("http://localhost:8080/type-check?red=true").then((response) => {
            setPost(response.data);
          });
          console.log(post);
        
      
        console.log(event, body)
    }
    return (
        <div className="input">
            <form onSubmit={reduce}>
                <h3>Enter the input</h3>
                <textarea className='textArea' id="textAreaExample1" rows="10" cols="5"></textarea>
                {(() => {
                    let content = [];
                    for (let i = 1; i <= num; i++) {
                        content.push(

                            <div className='input-data'
                                key={"input" + i} name={"input" + i}>
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
                            </div>
                        );
                        console.log(content.length);

                    }
                    return content;

                })()


                }


                <div className='imgDiv'>
                    <img className="imgIcon" src={require("./plus-sign.png")} onClick={handleProcessClick}></img>
                    <p>Add</p>
                </div>
                <div className='submitWrapper'>
                    <button type="submit" className="btn btn-primary" >Type Check</button>
                    <button type="submit" className="btn btn-primary" >Semantics</button>
                </div>
            </form>

        </div>

    );
}
export default Animation;