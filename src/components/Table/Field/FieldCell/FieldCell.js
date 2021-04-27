import React from "react";
import './FieldCell.css'
import {connect} from "react-redux";
import {playerClicked} from "../../../../store/actions/game";

const FieldCell = props => {
    let text = null

    if (props.answered) {
        if (props.isAnswerCorrect) {
            text = props.answered === props.index + 1 ? <span>👍</span> : text
        } else {
            text = props.answered === props.index + 1 ? <span>👎</span> : text
            text = props.correctAnswer === props.index + 1 ? <span>*</span> : text
        }
    }

    return (
        <div className={'FieldCell'} onClick={() => props.playerClicked(props.index)}>
            {props.children}
            {text}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        correctAnswer: state.game.correctAnswer,
        answered: state.game.answered,
        isAnswerCorrect: state.game.isAnswerCorrect,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        playerClicked: index => dispatch(playerClicked(index))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FieldCell)