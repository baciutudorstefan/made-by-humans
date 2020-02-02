import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

export default class About extends Component {
    render() {
        return (
            <div className="component__align__center">
                <ScrollAnimation 
                animateIn="fadeInDown"
                delay="2" 
                duration="faster"
                className="component__align__center_title" >
                    About
                </ScrollAnimation>  
                <div className="component__align__center_paragraphs">
                <ScrollAnimation 
                 animateIn="fadeInLeftBig"
                 duration="faster">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </ScrollAnimation>
                <ScrollAnimation 
                animateIn="fadeInLeftBig"
                duration="faster">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </ScrollAnimation>
                <ScrollAnimation 
                animateIn="fadeInLeftBig"
                duration="faster">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </ScrollAnimation>
                </div>
            </div>
        )
    }
}
