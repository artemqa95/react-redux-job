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
            <Field/>
        </section>
    )
}
export default Table