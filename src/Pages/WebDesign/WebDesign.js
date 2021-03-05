import React, { Component } from 'react'
import './WebDesign.scss'
import {Link} from 'react-router-dom'

//Import Images

import Express from '../../assets/web-design/desktop/image-express.jpg'
import Transfer from '../../assets/web-design/desktop/image-transfer.jpg'
import Photon from '../../assets/web-design/desktop/image-photon.jpg'
import Builder from '../../assets/web-design/desktop/image-builder.jpg'
import Blogr from '../../assets/web-design/desktop/image-blogr.jpg'
import Camp from '../../assets/web-design/desktop/image-camp.jpg'


export default class WebDesign extends Component {
    render() {
        return (
            <div className = "WebDesignContainer">

                <div className="WebDesignHero">
                    <h1> Web Design</h1>
                    <p> We build websites that serve as powerful marketing tools and bring memorable brand experiences.</p>
                </div>

                    <div className="WebDesignCardContainer">
                        <div className="Card">
                                <img src = {Express}/>
                                <h3> Express </h3>
                                <p> A multi-carrier shipping website for ecommerce businesses </p>
                        </div>

                        <div className="Card">
                                <img src = {Transfer}/>
                                <h3> Transfer </h3>
                                <p> Site for low-cost money transfers and sending money within seconds </p>
                        </div>

                        <div className="Card">
                                <img src = {Photon}/>
                                <h3> Photon </h3>
                                <p> A state-of-the-art music player with high-resolution audio and DSP effects</p>
                        </div>

                        <div className="Card">
                                <img src = {Builder}/>
                                <h3> Builder </h3>
                                <p> Connects users with local contractors based on their location</p>
                        </div>

                        <div className="Card">
                                <img src = {Blogr}/>
                                <h3> Blogr </h3>
                                <p> Blogr is a platform for creating an online blog or publication </p>
                        </div>

                        <div className="Card">
                                <img src = {Camp}/>
                                <h3> Camp </h3>
                                <p> Get expert training in coding, data, design, and digital marketing </p>
                        </div>

                    </div>

                    <div className="OtherPortfolioPages">
                        <div className="PortfolioTile" id = "AppDesignTile">
                            <h2> App Design </h2>
                            <p> <Link to = "/app-design"> View Projects </Link> <span> &gt;</span> </p>
                        </div>

                        <div className="PortfolioTile" id = "GraphicDesignTile">
                            <h2> Graphic Design</h2>
                            <p> <Link to = "/graphic-design"> View Projects </Link> <span> &gt;</span> </p>
                        </div>
                    </div>

                
            </div>
        )
    }
}
