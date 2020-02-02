import React, { Component } from 'react';
import { render } from 'react-dom';
import ScrollAnimation from 'react-animate-on-scroll';


function ValidationMessage(props) {
  if (!props.valid) {
    return(
      <div className='error-msg'>{props.message}</div>
    )
  }
  return null;
}

export default class ContactForm extends React.Component {
  state = {
    message: '', messageValid: false,
    email: '', emailValid: false,
    formValid: false,
    errorMsg: {}
  }

  validateForm = () => {
    const {messageValid, emailValid} = this.state;
    this.setState({
      formValid: messageValid && emailValid
    })
  }

  updateMessage = (message) => {
    this.setState({message}, this.validateMessage)
  }

  validateMessage = () => {
    const {message} = this.state;
    let messageValid = true;
    let errorMsg = {...this.state.errorMsg}

    if (message.length < 3) {
      messageValid = false;
      errorMsg.message = 'Must be at least 3 characters long'
    }

    this.setState({messageValid, errorMsg}, this.validateForm)
  }

  updateEmail = (email) => {
    this.setState({email}, this.validateEmail)
  }

  validateEmail = () => {
    const {email} = this.state;
    let emailValid = true;
    let errorMsg = {...this.state.errorMsg}

    // checks for format _@_._
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      emailValid = false;
      errorMsg.email = 'Invalid email format'
    }

    this.setState({emailValid, errorMsg}, this.validateForm)
  }

  render() {
    return (
    <div className="contact__form__container">
        
        <ScrollAnimation
        animateIn="fadeInDown" 
        delay="2" 
        duration="3">
          <h1>Contact us</h1>
        </ScrollAnimation>
        
                <div className="ContactForm">
                    <main role='main'>
                    <form action='#' id='js-form'>
                        <ScrollAnimation 
                        animateIn="fadeInLeftBig" 
                        delay="2" 
                        duration="3"
                        className='form-group'>
                        <ValidationMessage valid={this.state.emailValid} message={this.state.errorMsg.email} />
                        <input placeholder="Enter your email in here..."  autoComplete="off" type='email' id='email' name='email' className='form-field'
                        value={this.state.email} onChange={(e) => this.updateEmail(e.target.value)}/>
                        </ScrollAnimation>

                        <ScrollAnimation 
                        animateIn="fadeInLeftBig" 
                        delay="3" 
                        duration="3"
                        className='form-group'>
                        < ValidationMessage valid={this.state.messageValid} message={this.state.errorMsg.message} />
                        <input placeholder="Enter your title in here..." type='text' id='message' name='message' className='form-field'
                        value={this.state.message} onChange={(e) => this.updateMessage(e.target.value)}/>
                        </ScrollAnimation>
                        <ScrollAnimation 
                        animateIn="fadeInLeftBig" 
                        delay="4" 
                        duration="3"
                        className='form-controls'>
                        <textarea placeholder="Enter your message in here..." id="textMessage"></textarea>
                        </ScrollAnimation>
                        <ScrollAnimation 
                        animateIn="fadeInRight" 
                        delay="2" 
                        duration="3"
                        className='form-controls'>
                        <button className='button' id="formSubmit" type='submit' disabled={!this.state.formValid}>Send the email</button>
                        </ScrollAnimation>
                    </form>
                    </main>
                </div>
      </div>
    );
  }
}
render(<ContactForm />, document.getElementById('root'));
