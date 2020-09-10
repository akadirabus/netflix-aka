import React, { useEffect, useState } from 'react'
import './Nav.css'
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Nav() {

    const [selectedMenu, setSelectedMenu] = useState("homePage");

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {

            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);

        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);


    return (

        <div className={`nav ${show && "nav__black"}`}>

            <div>

                <img
                    className="nav__logo"
                    alt="Netflix Logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                />
                <ul className="menuBar">
                    <li className={selectedMenu === "homePage" ? "menuItemsSelect" : "menuItems"} onClick={() => setSelectedMenu("homePage")}>Ana Sayfa</li>
                    <li className={selectedMenu === "series" ? "menuItemsSelect" : "menuItems"} onClick={() => setSelectedMenu("series")}>Diziler</li>
                    <li className={selectedMenu === "films" ? "menuItemsSelect" : "menuItems"} onClick={() => setSelectedMenu("films")}>Filmler</li>
                    <li className={selectedMenu === "bests" ? "menuItemsSelect" : "menuItems"} onClick={() => setSelectedMenu("bests")}>En İyiler</li>
                    <li className={selectedMenu === "myList" ? "menuItemsSelect" : "menuItems"} onClick={() => setSelectedMenu("myList")}>Listem</li>

                </ul>
            </div>
            <div className="menu__symbol">
                <img className="nav__avatar" src={require("./img/Netflix_Avatar.png")} />

                <ArrowDropDownIcon className="nav__icons"></ArrowDropDownIcon>
            </div>
            <div className="nav__avatar__menu" >

                <SearchIcon className="nav__icons"></SearchIcon>
                <CardGiftcardIcon className="nav__icons"></CardGiftcardIcon>

                <NotificationsIcon className="nav__icons"></NotificationsIcon>

                <img className="nav__avatar" src={require("./img/Netflix_Avatar.png")} />

                <ArrowDropDownIcon className="nav__icons"></ArrowDropDownIcon>

            </div>

        </div >

    )
}

export default Nav
