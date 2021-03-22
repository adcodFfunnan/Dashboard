import React, { useState } from 'react'

import logo from '../images/header/logo.png'

import style from "../style/Header.module.css"



const Button = (props) => {
    const [clicked, handleClick] = useState(false)

    const handleButtonClick = () => {
        handleClick(!clicked)
        if (props.label === "B3")
            props.handleSidebar()
    }
    return (
        <div className={`${style.button} ${clicked ? style.clicked : ""}`} onClick={handleButtonClick}>
            <span>{props.label}</span>
        </div>
    )
}


const RightSideBar = (props) => {
    return (
        <div className={`${style.rightSidebar} ${props.sidebarOut ? "" : style.hide}`}>
            <h3>What is Lorem Ipsum?</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
    )
}

const RightButtons = () => {
    const [sidebarOut, setSidebar] = useState(false)

    const handleSidebar = () => {
        setSidebar(!sidebarOut)
    }

    return (
        <div className={style.rightButtons}>
            <Button
                label="B3"
                handleSidebar={handleSidebar} />
            <Button
                label="B2" />
            <Button
                label="B1" />
            <RightSideBar
                sidebarOut={sidebarOut} />
        </div>
    )
}



export const Header = () => {

    return (
        <div className={style.header}>
            <div className={style.logo}>
                <img alt="" src={logo} />
            </div>
            <RightButtons />
        </div>
    )
}