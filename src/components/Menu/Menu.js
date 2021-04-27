import './Menu.css'
import {connect} from "react-redux";
import {restartGame} from "../../redux/actions/game";
import getText from "../../text/translation";

const Menu = props => {
    return (
        <div className={'Menu'}>
            <div>{props.isAnswerCorrect? getText().win:getText().lose}</div>
            <button onClick={props.restartGame}>{getText().restartButton}</button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        isAnswerCorrect: state.game.isAnswerCorrect,
        language: state.menu.language
    }
}

function mapDispatchToProps(dispatch) {
    return {
        restartGame: () => dispatch(restartGame())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)