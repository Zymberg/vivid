import React, { useState } from 'react';
import './Contact.css'
import { send } from 'emailjs-com'
 
function Contact() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [subject, setSubject] = useState()
    const [message, setMessage] = useState()

    function sendMail(e) {
        e.preventDefault()
      
        send(
            'service_unjf3a7',
            'template_yzpeabp',
            {name, email, message},
            'vXS782Oi4T2OGkCph'
        )
        .then((response) => {
            console.log("Message sent successfully", response.status, response.text)
        })
        .catch((err) => {
            console.log("Failed", err)
        })
        setName("")
        setEmail("")
        setSubject("")
        setMessage("")
    }

    return (
        <div className='contact-box'>
            <div className='contact-form'>
            <form className='search-form' onSubmit={sendMail}>
                <input type="text" className="input-field" placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value) }></input>
                <input type="email" className="input-field" placeholder='Your Email' required value={email} onChange={(e) => setEmail(e.target.value) }></input>
                <input type="text" className="input-field" placeholder='Subject' value={subject} onChange={(e) => setSubject(e.target.value) }></input>
                <textarea type="text" className="input-field textarea-field" placeholder='How can we assist you today?' value={message} onChange={(e) => setMessage(e.target.value) }></textarea>
                <button type="button" className='btn-send' onClick={sendMail}>Send Message</button>
            </form>
            </div>
        </div>
    );
}

export default Contact;