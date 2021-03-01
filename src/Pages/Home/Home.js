import React, { Component } from 'react'
import './Home.scss'
import HeroImage from '../../assets/home/desktop/image-hero-phone.png'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div className = "HomeContainer">
                <section className="HomeHero">

                    <div className="HeroText">
                        <h1> Award-winning custom designs and digital branding solutions</h1>
                        <p> With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
                        <button className = "LightButton"> Learn More</button>
                    </div>

                    <div className="HeroImage">
                        <img src = {HeroImage} alt = "Mobile phone"/>
                    </div>

                </section>


                <section className="ProductTiles">

                    <div className="ProductTile" id = "WebDesignTile">
                        <h2> Web Design </h2>
                        <p> <Link to = "/web-design"> View Projects </Link> <span> &gt;</span> </p>
                    </div>

                    <div className="ProductTile" id = "AppDesignTile">
                        <h2> App Design </h2>
                        <p> <Link to = "/app-design"> View Projects </Link> <span> &gt;</span> </p>
                    </div>

                    <div className="ProductTile" id = "GraphicDesignTile">
                        <h2> Graphic Design</h2>
                        <p> <Link to = "/graphic-design"> View Projects </Link> <span> &gt;</span> </p>
                    </div>
                </section>
            </div>
        )
    }
}
