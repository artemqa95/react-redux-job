import React from "react";
import './Footer.css'
import FooterCell from "./FooterCell/FooterCell";
const Footer = props => {
    const cells = new Array(10).fill('');
    if (!props.isFinished) {
        setTimeout(() => {
            if (props.currentIndex > 9) {
                props.finishGame()
                return
            }
            props.next()
        },1000)
    }
    return (
        <div className={'Footer'}>
            {cells.map((cell, index) =>  {
                return (
                    <FooterCell currentIndex={props.currentIndex} key={index} index={index} arrowDirections={props.arrowDirections}/>
                )
            })}
        </div>
    )
}
export default Footer