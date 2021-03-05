import React, { Component } from 'react'
import './Header.scss'
import Logo from '../../assets/shared/desktop/logo-dark.png'
import { Link } from 'react-router-dom'

import Hamburger from '../../assets/shared/mobile/icon-hamburger.svg'
import Cross from '../../assets/shared/mobile/icon-close.svg'

export default class Header extends Component {

    state = {
        menuClass: "Inactive"
    }

    showMobileNav = () => {
        if (this.state.menuClass === "Inactive"){
            this.setState({
                menuClass: "Active"
            })
        } else {
            this.setState({
                menuClass: "Inactive"
            })
        }
    }


    render() {

        let Icon = null;

        if (this.state.menuClass == "Active"){
            Icon = <img src = {Cross} alt = "Close menu"/>
        } else {
            Icon = <img src = {Hamburger} alt = "Open menu"/>
        }
        return (
            <div>
            <header>
                <div className="Logo">
                    <Link to = "/">
                        <img src = {Logo} alt = "Designo logo"/>
                    </Link>
                </div>

                <nav className = "DesktopNavigation">
                    <ul>
                        <li> <Link to = "/our-company"> Our company </Link> </li>
                        <li> <Link to = "/locations"> Locations </Link> </li>
                        <li> <Link to = "/contact-us"> Contact </Link> </li>
                    </ul>
                </nav>

                <nav className = "MobileNavIcon">
                    <button onClick = {()=> this.showMobileNav()}>
                        {Icon}
                    </button>
                </nav>


            </header>

            <nav className = {this.state.menuClass}>
                    <ul>
                        <li> <Link to = "/our-company"> Our company </Link> </li>
                        <li> <Link to = "/locations"> Locations </Link> </li>
                        <li> <Link to = "/contact-us"> Contact </Link> </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
