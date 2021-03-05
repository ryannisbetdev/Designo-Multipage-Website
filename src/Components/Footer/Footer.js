import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

import FooterLogo from '../../assets/shared/desktop/logo-light.png'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="FloatingFooter">

                    <div className="FloatingFooterLeft">
                    <h2> Let's talk about your project</h2>
                    <p> Ready to take it to the next level? Contat us today and find out how our expertise can help your business grow.</p>
                    </div>

                    <div className="FloatingFooterRight">
                    <Link to = '/contact-us'>
                    <button className="LightButton"> Get in touch </button>
                    </Link>
                    </div>
                </div>


                
                <div className="MainFooter">
                        <div className="MainFooterTop">
                            <div className="Logo">
                                <img src = {FooterLogo} alt = "Designo Logo"/>
                            </div>

                            <div className="NavLinks">
                                <Link to = "/our-company">Our Company</Link>
                                <Link to = "/locations">Locations</Link>
                                <Link to = "/contact">Contact</Link>
                            </div>
                        </div>

                        <div className="MainFooterBottom">
                                <p> <span> Designo Central Office </span> <br/>
                                    3886 Wellington Street <br/>
                                    Toronto, Ontario, M9C 3J5
                                </p>

                                <p> <span> Contact Us (Central Office) <br/> P: +1 278-937-9374   <br/> M: contact@designo.co</span></p>

                        </div>
                </div>
            </footer>
        )
    }
}
