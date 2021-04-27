import React from "react";
import './FooterCell.css'
import arrowImg from '../../../images/arrow.png'
import {connect} from "react-redux";
const FooterCell = props => {
    const classes = ['FooterCell']
    if (props.index + 1 === props.currentStep) classes.push('active')
    return (
        <div className={classes.join(' ')}>
            {props.index<props.currentStep ?
                <img
                className={props.directionsArray? props.directionsArray[props.index] : ''}
                src={arrowImg} alt="arrow"
            /> : null}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        directionsArray: state.game.directionsArray,
    }
}

export default connect(mapStateToProps)(FooterCell)