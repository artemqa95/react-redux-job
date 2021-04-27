import {
    GAME_COMPARE_ANSWERS,
    GAME_DEFINE_CORRECT_ANSWER,
    GAME_IS_ANSWERED,
    GAME_IS_FINISHED,
    GAME_IS_REFRESHED,
    GAME_NEXT_STEP
} from '../actions/actionTypes';

const initialState = {
    isFinished: false,
    startPoint: Math.ceil(Math.random() * 9),
    currentStep: 0,
    currentPoint: null,
    correctAnswer: null,
    answered: null,
    isAnswerCorrect: null,
    directionsArray: []
}

export default function gameReducer(state = initialState, action) {
    switch (action.type) {
        case GAME_IS_FINISHED:
            return {
                ...state, isFinished: true
            }
        case GAME_IS_REFRESHED:
            return {
                ...initialState, startPoint: Math.ceil(Math.random() * 9)
            }
        case GAME_IS_ANSWERED:
            return {
                ...state, answered: action.index + 1
            }
        case GAME_NEXT_STEP:
            return {
                ...state,
                currentStep: action.nextIndex,
                currentPoint: action.nextPos,
                directionsArray: action.newDirectionsArray
            }
        case GAME_DEFINE_CORRECT_ANSWER:
            return {
                ...state, correctAnswer: action.correctAnswer
            }
        case GAME_COMPARE_ANSWERS:
            return {
                ...state, isAnswerCorrect: action.isAnswerCorrect
            }
        default:
            return {
            ...state
        }
    }
}
