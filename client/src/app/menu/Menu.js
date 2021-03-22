import React, { Fragment, useState } from 'react'
import { NavLink } from 'react-router-dom'

import menuItems from './menu.json'

import { FaBars, FaAngleDown, FaAngleUp, FaAngleRight } from 'react-icons/fa'
import { IconContext } from 'react-icons'

import style from "../../style/Menu.module.css"


const MenuItem = (props) => {
    const [mouseOnMenuItem, setMouseOnMenuItem] = useState(false)
    const [mouseOnSubMenu, setMouseOnSubMenu] = useState(false)

    const [touchOnFaAngleDown, setTouchOnFaAngleDown] = useState(false)

    const handleMenuItemOver = () => {
        setMouseOnMenuItem(true)
    }
    const handleMenuItemLeave = () => {
        setMouseOnMenuItem(false)
    }

    const handleSubMenuOver = () => {
        setMouseOnSubMenu(true)
    }
    const handleSubMenuLeave = () => {
        setMouseOnSubMenu(false)
    }

    const handleFaAngleDownTouch = () => {
        setTouchOnFaAngleDown(!touchOnFaAngleDown)
    }

    return (
        <div className={style.menuLine}>
            <div className={style.menuItem} onMouseOver={handleMenuItemOver} onMouseLeave={handleMenuItemLeave}>
                <NavLink to={`./${props.url}`} activeClassName={style.navLinkSelected} className={style.navLink}>
                    <span>{props.label}
                        {(props.children.length) ?
                            <Fragment>
                                <IconContext.Provider value={{ size: "1.5em", className: `${style.FaAngleDown}` }}>
                                    {(!touchOnFaAngleDown) ? <FaAngleDown onClick={handleFaAngleDownTouch} /> : <FaAngleUp onClick={handleFaAngleDownTouch} />}
                                </IconContext.Provider>
                                <IconContext.Provider value={{ size: "1.5em", className: `${style.FaAngleRight}` }}>
                                    <FaAngleRight />
                                </IconContext.Provider>
                            </Fragment>
                            : null}
                    </span>
                </NavLink>
            </div>
            <div className={`${style.subMenu} ${(mouseOnMenuItem || mouseOnSubMenu) ? "" : style.hide} ${(touchOnFaAngleDown) ? "" : style.hideOnMobile}`} onMouseOver={handleSubMenuOver} onMouseLeave={handleSubMenuLeave}>
                <Menu
                    menuItems={props.children} />
            </div>
        </div >
    )
}

const Menu = (props) => {
    const menu = props.menuItems.map((menuItem, index) =>
        <MenuItem key={index}
            label={menuItem.label}
            url={menuItem.url}
            children={menuItem.children} />
    )
    return <div className={style.menu}>{menu}</div>
}

export const VerticalMenu = () => {
    const [showLeftMenu, setShowLeftMenu] = useState(true)

    const handleLeftMenu = () => {
        setShowLeftMenu(!showLeftMenu)
    }

    return (
        <div className={`${style.verticalMenu} ${showLeftMenu ? style.show : style.hide}`}>
            <div className={style.FaBarsDiv}>
                <IconContext.Provider value={{ color: "white", size: "2.5em", className: `${style.FaBars}` }}>
                    <FaBars onClick={handleLeftMenu} />
                </IconContext.Provider>
            </div>

            <Menu
                menuItems={menuItems} />
        </div>
    )
}

