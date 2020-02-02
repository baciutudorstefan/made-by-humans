import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

export default class Offer extends Component {
    render() {
        return (
            <ScrollAnimation 
            animateIn="fadeIn" 
            delay="1" 
            duration="4"
            className="component__align__right_offer">
                <div className="component__align__right_content_table">
                    <h1>What we offer</h1>  
                    <div className="component__align__right_content_table_offer_list">
                        <div className="component__align__right_content_table_offer_list_content">
                            <ul>
                                <li>Unique public</li>
                                <li>Safe business deals</li>
                                <li>Community of experts</li>
                                <li>Unique public</li>
                                <li>Safe business deals</li>
                                <li>Community of experts</li>
                                <li>Unique public</li>
                                <li>Safe business deals</li>
                                <li>Community of experts</li>
                            </ul>
                        </div>
                        <div className="component__align__right_content_table_offer_list_content">
                        <ul>
                                <li>Unique public</li>
                                <li>Safe business deals</li>
                                <li>Community of experts</li>
                                <li>Unique public</li>
                                <li>Safe business deals</li>
                                <li>Community of experts</li>
                                <li>Unique public</li>
                                <li>Safe business deals</li>
                                <li>Community of experts</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        )
    }
}
