import React, { Component } from 'react'

import Canada from '../../assets/shared/desktop/illustration-canada.svg'
import Australia from '../../assets/shared/desktop/illustration-australia.svg'
import UK from '../../assets/shared/desktop/illustration-united-kingdom.svg'

import './CountryList.scss'

export default class CountryList extends Component {
    render() {
        return (
            <div className = "CountryListContainer">
                <div className="Card">
                    <img src = {Canada} alt = "Canada illustration"/>
                    <h3> Canada</h3>
                    <button className = "DarkButton"> See Location </button>
                </div>

                <div className="Card">
                    <img src = {Australia} alt = "Australia illustration"/>
                    <h3> Australia</h3>
                    <button className = "DarkButton"> See Location </button>
                </div>

                <div className="Card">
                    <img src = {UK} alt = "UK illustration"/>
                    <h3> United Kingdom</h3>
                    <button className = "DarkButton"> See Location </button>
                </div>
            </div>
        )
    }
}
