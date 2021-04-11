import React, {Component} from "react";
import './Layout.css'
import logo from '../logo/logo.png'
import Header from "../components/Header/Header";
import Table from "../components/Table/Table";
import Footer from "../components/Footer/Footer";
export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFinished: false,
            startPoint: Math.ceil(Math.random() * 9),
            currentIndex: 0,
            currentPoint: null,
            correctAnswer: null,
            answered:false,
            currentDirection: null,
            directionArray:[]
        }
    }

    finishHandler = () => {
        console.log('итоговая позиция:', this.state.correctAnswer)
        this.setState({
            isFinished: true
        })
    }

    makeStepHandler = () => {
        const position = this.state.currentPoint? this.state.currentPoint: this.state.startPoint
        let newDirectionArray = [...this.state.directionArray]
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
        newDirectionArray.push(actionKey)
        this.setState({
            currentIndex: this.state.currentIndex + 1,
            currentPoint: newPos,
            currentDirection: actionKey,
            correctAnswer: this.state.currentIndex === 9 ? newPos: null,
            directionArray: newDirectionArray
        })
    }
    clickHandler = index => {
        if (!this.state.isFinished || this.state.answered) return
        this.setState({
            answered: index + 1,
        })
        setTimeout(this.refreshGame, 2500)

    }
    refreshGame = () => {
        this.setState({
            isFinished: false,
            startPoint: Math.ceil(Math.random() * 9),
            currentIndex: 0,
            currentPoint: null,
            correctAnswer: null,
            answered:false,
            currentDirection: null,
            directionArray:[]
        })
    }

    render() {
        const title = 'Лабиринт';
        return (
            <div className={'Layout'}>
                <main className={'Container'}>
                    <Header title={title} logo={logo}/>
                    <Table startPoint={this.state.startPoint-1}
                           onAnswered={this.clickHandler}
                           correctAnswer={this.state.correctAnswer}
                           answer = {this.state.answered}
                    />
                    <Footer
                        currentIndex={this.state.currentIndex}
                        isFinished={this.state.isFinished}
                        finishGame={this.finishHandler}
                        next={this.makeStepHandler}
                        arrowDirections={this.state.directionArray}
                    />
                </main>
            </div>
        )
    }
}
