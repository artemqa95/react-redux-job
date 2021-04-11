import React from "react";
import './FooterCell.css'
import arrowImg from '../../../images/arrow.png'
const FooterCell = props => {
    const classes = ['FooterCell']
    if (props.index + 1 === props.currentIndex) classes.push('active')

    return (
        <div className={classes.join(' ')}>
            {props.index<props.currentIndex ?
                <img
                className={props.arrowDirections? props.arrowDirections[props.index] : ''}
                src={arrowImg} alt="arrow"
            /> : null}
        </div>
    )
}
export default FooterCell