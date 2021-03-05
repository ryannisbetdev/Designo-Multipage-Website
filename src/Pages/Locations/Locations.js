import React, { Component } from 'react'
import './Locations.scss'

import CanadaMap from '../../assets/locations/desktop/image-map-canada.png'
import AustraliaMap from '../../assets/locations/desktop/image-map-australia.png'
import UKMap from '../../assets/locations/desktop/image-map-united-kingdom.png'

export default class Locations extends Component {
    render() {
        return (
            <div className = "LocationsContainer">
                <section className="Canada">
                    <div className="LocationsText">
                        <h2> Canada</h2>
                            <div className="Address">
                                <p> <span> Designo Central Office </span>
                                <br/>3886 Wellington Street <br/>Toronto, Ontario M9C 3J5
                                </p>
                            </div>

                            <div className="Contact">
                            <p> <span> Contact </span><br/>
                                P: +1 253-863-8967<br/>
                                M : contact@designo.co
                            </p>
                            </div>
                        </div>

                        <div className="Map">
                            <img src = {CanadaMap} alt = "Map of canada location"/>
                        </div>
                </section>

                <section className="Australia">

                <div className="Map">
                            <img src = {AustraliaMap} alt = "Map of Australia location"/>
                        </div>

                    <div className="LocationsText">
                        <h2> Australia </h2>
                            <div className="Address">
                                <p> <span> Designo AU Office </span> <br/>
                                19 Balonne Street <br/> New South Wales 2443
                                </p>
                            </div>

                            <div className="Contact">
                            <p> <span> Contact </span><br/>
                                P: (02) 6720 9092<br/>
                                M : contact@designo.au
                            </p>
                            </div>
                        </div>

                       
                </section>

                
                <section className="UK">



                    <div className="LocationsText">
                        <h2> United Kingdom </h2>
                            <div className="Address">
                                <p> <span> Designo UK Office </span> <br/>
                                13  Colorado Way <br/> Rhyd-y-fro SA8 9GA
                                </p>
                            </div>

                            <div className="Contact">
                            <p> <span> Contact </span><br/>
                                P: 078 3115 1400<br/>
                                M : contact@designo.uk
                            </p>
                            </div>
                        </div>

                        <div className="Map">
                            <img src = {UKMap} alt = "Map of UK location"/>
                        </div>

                       
                </section>
            </div>
        )
    }
}
