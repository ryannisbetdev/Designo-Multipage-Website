import React, { Component } from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'

// Import Images

import HeroImage from '../../assets/home/desktop/image-hero-phone.png'
import PassionateImage from '../../assets/home/desktop/illustration-passionate.svg'
import FriendlyImage from '../../assets/home/desktop/illustration-friendly.svg'
import ResourcefulImage from '../../assets/home/desktop/illustration-resourceful.svg'


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

                <section className="CardSection">
                    <div className="Card" id = "Passionate">
                        <img src = {PassionateImage}/>
                        <div className="CardText">
                        <h3> Passionate </h3>
                        <p> Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
                        </div>
                        
                    </div>

                    <div className="Card" id = "Passionate">
                        <img src = {ResourcefulImage}/>
                        <div className="CardText">
                        <h3> Resourceful</h3>
                        <p> Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
                        </div>
                    </div>

                    <div className="Card" id = "Passionate">
                        <img src = {FriendlyImage}/>
                        <div className="CardText">
                        <h3> Friendly </h3>
                        <p> We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
