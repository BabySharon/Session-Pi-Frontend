import React, { useEffect, useState } from 'react';

import './PlayAnimation.css';
import ReductionStep from './ReductionStep';

function PlayAnimation(props) {
    var [pos, setPos] = useState(0);
    const [stepContent, setStepContent] = useState([]);

    useEffect(() => {
        let arr = [];
        arr.push(props.steps[0])
        setStepContent(arr)
    }, []);

    function handleStepAnimation(e) {
        let direction;
        if (e.target.id == "before")
            direction = false;
        else
            direction = true;
        if (checkValidity()) {
            if (direction) {
                if (stepContent.length !== props.steps.length) {
                    setPos(++pos);
                    setStepContent([...stepContent, props.steps[pos]])
                }
            }
            else {
                if (stepContent.length !== 1) {
                    setPos(--pos);
                    let array = [];
                    array = [...stepContent];
                    array = array.slice(0, pos);
                    setStepContent(array);
                }
            }
        }
    }

    function checkValidity() {
        if (stepContent === undefined)
            return false;
        else if (stepContent.length === 0)
            return false;
        else
            return true;
    }

    function handlePlay() {
        let array = [];
        array = [...props.steps];
        setStepContent(array)
        setPos(props.steps.length - 1)
    }

    function handleClear(){
        setStepContent([]
            )
    }
    return (
        <>
            {checkValidity() ?
                <div className='animation-wrapper'>
                    <div className='animation'>
                        {stepContent.map((element, i) => {
                            return <ReductionStep key={i} step={element} />
                        })}
                    </div>

                    <div className='animation-icons'>
                        <div className='hover-parent'>
                            <img id="before" src={require('./before.png')} alt="before-button" onClick={handleStepAnimation} />
                            <p className='hover-text'>Back</p>
                        </div>
                        <div className='hover-parent'>
                            <img src={require('./play.png')} alt="play-button" onClick={handlePlay} />
                            <p className='hover-text'>Show all</p>
                        </div>
                        <div className='=hover-parent'>
                            <img id="after" src={require('./after.png')} alt="next-button" onClick={handleStepAnimation} />
                            <p className='hover-text'>Next</p>
                        </div>
                        <button className="btn btn-primary" onClick={handleClear}>Clear</button>
                    </div>

                </div> : <></>
            }
        </>
    );
}
export default PlayAnimation;