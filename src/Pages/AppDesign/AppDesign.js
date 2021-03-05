import React, { Component } from 'react'
import './AppDesign.scss'
import {Link} from 'react-router-dom'

//Import images

import Airfilter from '../../assets/app-design/desktop/image-airfilter.jpg'
import Eyecam from '../../assets/app-design/desktop/image-eyecam.jpg'
import Faceit from '../../assets/app-design/desktop/image-faceit.jpg'
import Loopstudios from '../../assets/app-design/desktop/image-loopstudios.jpg'
import ToDo from '../../assets/app-design/desktop/image-todo.jpg'

export default class AppDesign extends Component {
    render() {
        return (
            <div className = "AppDesignContainer">
                <div className="AppDesignHero">
                    <h1> App Design</h1>
                    <p> Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.</p>
                </div>

                <div className="AppDesignCardContainer">

                <div className="Card">
                            <img src = {Airfilter}/>
                            <h3> Airfilter </h3>
                            <p> Solving the problem of poor indoor air quality by filtering the air </p>
                </div>

                <div className="Card">
                            <img src = {Eyecam}/>
                            <h3> Eyecam </h3>
                            <p> Product that lets you edit your favorite photos and videos at any time </p>
                </div>

                <div className="Card">
                            <img src = {Faceit}/>
                            <h3> Eyecam </h3>
                            <p> Get to meet your favorite internet superstar with the faceit app </p>
                </div>

                <div className="Card">
                            <img src = {ToDo}/>
                            <h3> ToDo </h3>
                            <p> A todo app that features cloud sync with light and dark mode </p>
                </div>

                <div className="Card">
                            <img src = {Loopstudios}/>
                            <h3> Loopstudios </h3>
                            <p> A VR experience app made for Loopstudios </p>
                </div>

                </div>


                <div className="OtherPortfolioPages">
                        <div className="PortfolioTile" id = "WebDesignTile">
                            <h2> Web Design </h2>
                            <p> <Link to = "/web-design"> View Projects </Link> <span> &gt;</span> </p>
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
