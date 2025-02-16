import React from 'react'
import './Contactform.css'
import imgfaq from '../../../assets/shape.svg'
import imgformbg from '../../../assets/contact_bg_1.png'
import Wrapper from '../../layout/Wrapper'

const Contactform = () => {
  return (
    <section className='contactform-section'
style={{backgroundImage:`url(${imgformbg})`,


}}
  >


<Wrapper>

<div className="contact-form-main">

 <div className="formimg"><img src={imgfaq}alt="" />
        <span className='form-span'>CONTACT WITH US</span>
        
        </div>
        <h1 className="Formtitle">Have any Questions?</h1>
        <h2 className="formdescription">
        Email, call, or complete the form we'll get back to you as soon as possible
        </h2>
        {/* form section */}


        <form      action="https://getform.io/f/bzyyxnma"
                method="post"  className="contact-form">
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" name="name" required />
            
            <label htmlFor="email">Email Address *</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" />
            
            <label htmlFor="message"></label>
            <textarea id="message" name="message" className='textarea-contact' placeholder="Message" maxLength="180"></textarea>
            <span className="char-limit">0 / 180</span>
            
            <div className="recaptcha-container">
              <input type="checkbox" id="recaptcha" name="recaptcha" required />
              <label className='notrobot' htmlFor="recaptcha">I'm not a robot</label>
            </div>
            
            <button type="submit" className="submit-btn">Send Message</button>
          </form>

</div>


</Wrapper>


    </section>
  )
}

export default Contactform
