import React from "react";
import './Field.css'
import FieldCell from "./FieldCell/FieldCell";
import startImg from '../../../images/start.png'
import {connect} from "react-redux";

const Field = props => {
const cells = new Array(9).fill('')
    return (
        <div className={'Field'}>
            {cells.map((_, index) => {
                return (
                    <FieldCell key={index}
                               index={index}>
                        {index+1 === props.startPoint? <img src={startImg} alt="start"/> : null }
                    </FieldCell>
                )
            })}
        </div>
    )
}



function mapStateToProps(state) {
   return {
       startPoint: state.game.startPoint
   }
}

export default connect(mapStateToProps)(Field)