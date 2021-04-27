import React from "react";
import './Footer.css'
import FooterCell from "./FooterCell/FooterCell";
import {connect} from "react-redux";
import {gameIsFinished, gameMakeStep} from "../../store/actions/game";
const Footer = props => {
    const cells = new Array(10).fill('');
    if (!props.isFinished) {
        setTimeout(() => {
            if (props.currentStep > 9) {
                props.gameIsFinished()
                return
            }
            props.gameMakeStep()
        },1000)
    }
    return (
        <div className={'Footer'}>
            {cells.map((cell, index) =>  {
                return (
                    <FooterCell currentStep={props.currentStep} key={index} index={index}/>
                )
            })}
            <h3>Укажите местоположение после 10 ходов</h3>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        isFinished: state.game.isFinished,
        currentStep: state.game.currentStep
    }
}

function mapDispatchToProps(dispatch) {
    return {
        gameIsFinished: () => dispatch(gameIsFinished()),
        gameMakeStep: () => dispatch(gameMakeStep())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)