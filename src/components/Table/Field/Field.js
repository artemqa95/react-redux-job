import React from "react";
import './Field.css'
import FieldCell from "./FieldCell/FieldCell";
import startImg from '../../../images/start.png'
const Field = props => {
const cells = new Array(9).fill('')
    return (
        <div className={'Field'}>
            {cells.map((_, index) => {
                return (
                    <FieldCell key={index}
                               onAnswered={props.onAnswered}
                               index={index}
                               correctAnswer={props.correctAnswer}
                               answer={props.answer}>
                        {index === props.startPoint? <img src={startImg} alt="start"/> : null }
                    </FieldCell>
                )
            })}
        </div>
    )
}
export default Field