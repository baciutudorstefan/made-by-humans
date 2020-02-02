import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

export default class Promote extends Component {
    render() {
        return (
           <div className="component__align__right">
             
               <ScrollAnimation 
               animateIn="fadeInLeft" 
               duration="2"
               className="component__align__right_content_left">
                   We check and promote products made entirely by humans, with love and passion.
                </ScrollAnimation>
               
               <ScrollAnimation 
               animateIn="fadeInRight" 
               duration="2"
               className="component__align__right_content_right" > </ScrollAnimation>
            </div>
        )
    }
}