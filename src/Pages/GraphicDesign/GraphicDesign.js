import React, { Component } from 'react'
import './GraphicDesign.scss'
import {Link} from 'react-router-dom'

//Import Images

import Change from '../../assets/graphic-design/desktop/image-change.jpg'
import Science from '../../assets/graphic-design/desktop/image-science.jpg'
import BoxedWater from '../../assets/graphic-design/desktop/image-boxed-water.jpg'

export default class GraphicDesign extends Component {
    render() {
        return (
            <div className = "GraphicDesignContainer">

                   <div className="GraphicDesignHero">
                    <h1> Graphic Design</h1>
                    <p> We deliver eye-catching branding materials that are tailored to meet your business objectives.</p>
                </div>


                <div className="GraphicDesignCardContainer">

                <div className="Card">
                                <img src = {Change}/>
                                <h3> Tim Brown </h3>
                                <p> A book cover designed for Tim Brown’s new release, ‘Change’ </p>
                </div>

                <div className="Card">
                                <img src = {BoxedWater}/>
                                <h3> Boxed Water </h3>
                                <p> A simple packaging concept made for Boxed Water </p>
                </div>

                <div className="Card">
                                <img src = {Science}/>
                                <h3> Science! </h3>
                                <p> A poster made in collaboration with the Federal Art Project </p>
                </div>


                </div>
                
                <div className="OtherPortfolioPages">
                        <div className="PortfolioTile" id = "AppDesignTile">
                            <h2> App Design </h2>
                            <p> <Link to = "/app-design"> View Projects </Link> <span> &gt;</span> </p>
                        </div>

                        <div className="PortfolioTile" id = "WebDesignTile">
                            <h2> Web Design</h2>
                            <p> <Link to = "/web-design"> View Projects </Link> <span> &gt;</span> </p>
                        </div>
                    </div>
            </div>
        )
    }
}
