import React from 'react';
import './ReductionStep.css'

function ReductionStep(props) {

    function displayJudgements(judgements) {
        let arr = [];
        if (judgements)
            for (let i = 0; i < judgements.length; i++) {
                arr.push(
                    <div key={i} className="judgeElement">
                        {judgements[i]}
                    </div>
                );

            }
        return arr;

    }
    return (
        <div className='step-wrap'>
            <div className="step">
                <div className='judgements'>
                    {displayJudgements(props.step.judgements)}
                </div>
                <div className='rule'>
                    <hr />
                    {props.step.ruleDescription != null ?
                        <div className='rule-name'>
                            {props.step.redRule
                            .concat("-[")
                                .concat(props.step.ruleDescription) + "]"}
                        </div>
                        :
                        <div className='rule-name'>
                            {props.step.redRule}
                        </div>
                    }
                </div>
                <div>{props.step.result}</div>
            </div>
        </div>
    );
}
export default ReductionStep;