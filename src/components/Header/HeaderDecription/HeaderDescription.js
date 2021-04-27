import getText from "../../../text/translation";
import React from "react";
import {connect} from "react-redux";
import './HeaderDescription.css'
const HeaderDescription = props => {
    return (
        <div className={'HeaderDescription'}>
            <h3>{getText().footer}</h3>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        language: state.menu.language
    }
}

export default connect(mapStateToProps)(HeaderDescription)