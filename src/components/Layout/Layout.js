import React from "react";
import './Layout.css'
import logo from '../../logo/logo.png'
import Header from "../Header/Header";
import Table from "../Table/Table";
import Footer from "../Footer/Footer";
import {connect} from 'react-redux'
import Menu from "../Menu/Menu";
import text from "../../text/translation";

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
                <Header title={text.title} logo={logo}/>
                {currentBlock}
            </main>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        showMenu: state.menu.showMenu
    }
}

export default connect(mapStateToProps)(Layout)
