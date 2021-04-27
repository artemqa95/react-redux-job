import React from "react";
import './Footer.css'
import FooterCell from "./FooterCell/FooterCell";
import {connect} from "react-redux";
import {gameIsFinished, gameMakeStep} from "../../redux/actions/game";

const Footer = props => {
    const numberOfSteps = 10;
    const cells = new Array(numberOfSteps).fill('');
    if (!props.isFinished) {
        const timeForStep = 1000
        setTimeout(() => {
            if (props.currentStep >= numberOfSteps) {
                props.gameIsFinished()
                return
            }
            props.gameMakeStep()
        }, timeForStep)
    }
    return (
        <div className={'Footer'}>
            {cells.map((cell, index) => {
                return (
                    <FooterCell currentStep={props.currentStep} key={index} index={index}/>
                )
            })}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        isFinished: state.game.isFinished,
        currentStep: state.game.currentStep,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        gameIsFinished: () => dispatch(gameIsFinished()),
        gameMakeStep: () => dispatch(gameMakeStep())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)