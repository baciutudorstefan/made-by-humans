import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

export default class GridImg extends Component {
    render() {
        return (
            
            <div className="grid__img">
                <ScrollAnimation 
                animateIn="fadeInDown" 
                delay="2" 
                duration="3" 
                className="grid__img-img1 grid__img_style">
                </ScrollAnimation>

                <ScrollAnimation 
                animateIn="fadeInRight" 
                delay="1" 
                duration="2" 
                className="grid__img-img2 grid__img_style">
                </ScrollAnimation>

                <ScrollAnimation 
                animateIn="fadeInLeftBig" 
                delay="1" 
                duration="2" 
                className="grid__img-img3 grid__img_style">
                </ScrollAnimation>
            </div>
        )
    }
}
