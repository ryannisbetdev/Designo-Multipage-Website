import React, { Component } from 'react'
import './Company.scss'

import CountryList from '../../Components/CountryList/CountryList'

import HeroImage from '../../assets/about/desktop/image-about-hero.jpg'
import WorldClass from '../../assets/about/desktop/image-world-class-talent.jpg'
import RealDeal from '../../assets/about/desktop/image-real-deal.jpg'

export default class Company extends Component {
    render() {
        return (
            <div className = "CompanyContainer">
                <div className="CompanyHero">
                    <img src = {HeroImage}/>
                    <div className="HeroText">
                        <h1> About Us </h1>
                        <p> Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</p>
                    </div>
                </div>

                
                <section className="WorldClass">
                        <img src = {WorldClass}/>
                        <div className="SectionText">
                            <h2> World-class talent </h2>
                            <p>
                                We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.   
                                <br/>  <br/>
                                Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.

                            </p>
                        </div>
                </section>

                <CountryList/>

                <section className="RealDeal">
                        <img src = {RealDeal} />
                        <div className="SectionText">
                            <h2> The real deal </h2>
                            <p>
                                As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.   
                                <br/>  <br/>
                                We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.

                            </p>
                        </div>
                </section>

                      
            </div>
        )
    }
}
