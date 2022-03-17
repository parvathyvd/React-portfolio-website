import React, {useRef} from 'react';
import './Contact.css';
import { MdOutlineEmail} from 'react-icons/md'
import { RiMessengerLine} from 'react-icons/ri'
import { BsWhatsapp} from 'react-icons/bs'

import emailjs from 'emailjs-com';



const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_3l64gao', 'template_1dxohf7', form.current, 'Y4sfjHiFFrnqCzQV2')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
    
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__icon'/>
                        <h4>Email</h4>
                        <h5>mynmae@yahoo.com</h5>
                        <a href="mailto:mynmae@yahoo.om" target='_blank'>Send an Email</a>
                    </article>
                    <article className='contact__option'>
                        <RiMessengerLine className='contact__icon'/>
                        <h4>Messenger</h4>
                        <h5>mynmae@yahoo.com</h5>
                        <a href="https://facebook.com/" target='_blank'>Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <BsWhatsapp className='contact__icon'/>
                        <h4>WhatsApp</h4>
                        <h5>+19835793493</h5>
                        <a href="https://api.whatapp.com/send?phone+23335577333888" target='_blank'>Send a message</a>
                    </article>
                </div>
                <form ref={form} className='contact__form' onSubmit={sendEmail}>
                    <input type="text" placeholder='Full Name' name='name' required />
                    <input type="email" placeholder='your email' name='email' required />
                    <textarea name='message' placeholder='Your Message' rows='7' required></textarea>
                    <button className='btn btn-primary' type='submit'>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;