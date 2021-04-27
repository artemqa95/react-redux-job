import {
    GAME_COMPARE_ANSWERS,
    GAME_DEFINE_CORRECT_ANSWER,
    GAME_IS_ANSWERED,
    GAME_IS_FINISHED,
    GAME_IS_REFRESHED,
    GAME_NEXT_STEP
} from "./actionTypes";
import {toggleMenu} from "./menu";

export function gameIsFinished() {
    return {
        type: GAME_IS_FINISHED
    }
}

export function gameIsRefreshed() {
    return {
        type: GAME_IS_REFRESHED
    }
}

export function gameIsAnswered(index) {
    return {
        type: GAME_IS_ANSWERED, index
    }
}

export function gameNextStep(nextIndex, nextPos, newDirectionsArray) {
    return {
        type: GAME_NEXT_STEP, nextIndex, nextPos, newDirectionsArray
    }
}

export function defineCorrectAnswer(correctAnswer) {
    return {
        type: GAME_DEFINE_CORRECT_ANSWER, correctAnswer
    }
}

export function compareAnswers(isAnswerCorrect) {
    return {
        type: GAME_COMPARE_ANSWERS, isAnswerCorrect
    }
}

export function playerClicked(index) {
    return (dispatch, getState) => {
        if (!getState().game.isFinished || getState().game.answered) return
        dispatch(gameIsAnswered(index))
        dispatch(compareAnswers(getState().game.answered === getState().game.correctAnswer))
        setTimeout(() => {
            dispatch(toggleMenu(getState().menu.showMenu))
        }, 2500)
    }
}

export function gameMakeStep() {
    return (dispatch, getState) => {
        const position = getState().game.currentPoint? getState().game.currentPoint: getState().game.startPoint
        let newDirectionsArray = [...getState().game.directionsArray]
        const banActions = [
            {up: [1,2,3]}, {down:[7,8,9]}, {left:[1,4,7]}, {right:[3,6,9]}
        ]

        let actions = [
            {up: -3}, {down:3}, {left:-1}, {right:+1}
        ]
        actions = actions.filter((action, index) => {
            const key = Object.keys(banActions[index])
            return !banActions[index][key].includes(position)
        })
        const randomAction = actions[Math.floor(Math.random()*actions.length)]
        const actionKey = Object.keys(randomAction)[0];
        let newPos = position + randomAction[actionKey]
        let newCurrentStep = getState().game.currentStep+1
        newDirectionsArray.push(actionKey)

        dispatch(gameNextStep(newCurrentStep, newPos, newDirectionsArray))
        if (newCurrentStep === 10) dispatch(defineCorrectAnswer(newPos))
    }

}

export function restartGame() {
    return (dispatch, getState) => {
        dispatch(toggleMenu(getState().menu.showMenu))
        dispatch(gameIsRefreshed())
    }
}