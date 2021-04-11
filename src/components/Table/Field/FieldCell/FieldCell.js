import React from "react";
import './FieldCell.css'
const FieldCell = props => {
    let text = null
    if (props.answer) {
        const isCorrect = props.answer === props.correctAnswer
        if (isCorrect) {
            text = props.answer === props.index + 1 ? <span>👍</span> : text
        } else {
            text = props.answer === props.index + 1 ? <span>👎</span> : text
            text = props.correctAnswer === props.index + 1 ? <span>*</span> : text
        }
    }

    return (
        <div className={'FieldCell'} onClick={() => props.onAnswered(props.index)}>
            {props.children}
            {text}
        </div>
    )
}
export default FieldCell