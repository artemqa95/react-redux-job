import './Menu.css'
import {connect} from "react-redux";
import {restartGame} from "../../store/actions/game";

const Menu = props => {
    return (
        <div className={'Menu'}>
            <div>Вы {props.isAnswerCorrect? 'победили!':'проиграли:('}</div>
            <button onClick={props.restartGame}>Начать сначала</button>
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