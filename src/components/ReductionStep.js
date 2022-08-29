import React from 'react';
import './ReductionStep.css'

function ReductionStep(props) {

    // private List<String> judgements;
    // private SemanticsRule redRule;
    // private SemanticsRule ruleDescription;
    // private String result;

    return (
       
        <div className="step">
            {console.log("here")}
            <div className='judgements'>
                {props.step.judgements.array.forEach(element => {
                    <div className="judgeElement">
                        {element} 
                    </div>

                })}
                <div className='rule'>
                    <hr></hr>
                    {props.step.redRule}
                </div>
                <div>{props.step.result}</div>
                
            </div>
        </div>
    );
}
export default ReductionStep;