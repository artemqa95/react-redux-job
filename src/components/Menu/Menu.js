import './Menu.css'
import {connect} from "react-redux";
import {restartGame} from "../../store/actions/game";
import text from "../../text/translation";

const Menu = props => {
    return (
        <div className={'Menu'}>
            <div>{props.isAnswerCorrect? text.win:text.lose}</div>
            <button onClick={props.restartGame}>{text.restartButton}</button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        isAnswerCorrect: state.game.isAnswerCorrect
    }
}

function mapDispatchToProps(dispatch) {
    return {
        restartGame: () => dispatch(restartGame())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)