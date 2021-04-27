import React from "react";
import './Layout.css'
import Header from "../Header/Header";
import Table from "../Table/Table";
import Footer from "../Footer/Footer";
import {connect} from 'react-redux'
import Menu from "../Menu/Menu";

const Layout = props => {
    let currentBlock = (
        <>
            <Table/>
            <Footer/>
        </>
    )
    if (props.showMenu) currentBlock = <Menu/>
    return (
        <div className={'Layout'}>
            <main className={'Container'}>
                <Header/>
                {currentBlock}
            </main>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        showMenu: state.menu.showMenu,
    }
}

export default connect(mapStateToProps)(Layout)
