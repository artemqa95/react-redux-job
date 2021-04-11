import React from "react";
import './Table.css'
import RowTableTitle from "./RowTableTitle/RowTableTitle";
import ColumnTableTitle from "./ColumnTableTitle/ColumnTableTitle";
import Field from "./Field/Field";
const Table = props => {
    return (
        <section className={'Table'}>
            <RowTableTitle/>
            <ColumnTableTitle/>
            <Field startPoint={props.startPoint}
            onAnswered={props.onAnswered}
            correctAnswer={props.correctAnswer}
            answer={props.answer}/>
        </section>
    )
}
export default Table