import React, { Component } from 'react'
import './Contact.scss'

import CountryList from '../../Components/CountryList/CountryList'
export default class Contact extends Component {
    render() {
        return (
            <div className = "ContactContainer">

                <div className="ContactBox">

                    <div className="ContactText">
                        <h1> Contact Us </h1>
                        <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
                    </div>

                    <form action="" className="ContactForm">
                        <label htmlFor = "Name"> Name </label>
                        <input type ="text" name = "Name" placeholder = "Name" /><br/>

                        <label htmlFor = "EmailAddress"> Email Address </label>
                        <input type ="text" name = "EmailAddress" placeholder = "Email Address" /><br/>

                        <label htmlFor = "Phone"> Phone </label>
                        <input type ="tel" name = "Phone" placeholder = "Phone" /><br/>

                        <label htmlFor = "Message"> Message </label>
                        <textarea name = "Message" placeholder = "Your Message"/>

                        <button className = "LightButton"> Submit</button>
                    </form>

                </div>
                <CountryList/>
            </div>
        )
    }
}
