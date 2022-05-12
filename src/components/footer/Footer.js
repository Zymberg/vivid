import React from 'react'

import {FaFacebook, FaInstagram, FaTwitter, FaPinterest} from 'react-icons/fa'

import './Footer.css'

function Footer () {
    return (
        <div className='footer'>
            <div className='social'>
                <FaFacebook className='icon' />
                <FaInstagram className='icon' />
                <FaTwitter className='icon' />
                <FaPinterest className='icon' />
            </div>
            <div className='container'>
                <div className='col'>
                    <h3>Advertise</h3>
                        <p>Advertise</p>
                        <p>Add a Property</p>
                </div>
                <div className='col'>
                    <h3>Company</h3>
                    <p>About Us</p>
                        <p>Contact Us</p>
                </div>
                <div className='col'>
                    <h3>About Us</h3>
                    <p>About</p>
                        <p>Contact Us</p>
                </div>
                {/* <div className='col'>
                    <h3>Information</h3>
                    <p>Advertise</p>
                        <p>Add a Property</p>
                </div> */}
            </div>
        </div>
    )
}

export default Footer