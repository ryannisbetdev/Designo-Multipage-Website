import React, { Component } from 'react'
import './Header.scss'
import Logo from '../../assets/shared/desktop/logo-dark.png'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="Logo">
                    <img src = {Logo} alt = "Designo logo"/>
                </div>

                <nav>
                    <ul>
                        <li> <Link to = "/our-company"> Our company </Link> </li>
                        <li> <Link to = "/locations"> Locations </Link> </li>
                        <li> <Link to = "/contact-us"> Contact </Link> </li>
                    </ul>
                </nav>
            </header>
        )
    }
}
