import React, {useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import SignIn from '../singIn/SignIn'
import SignOut from '../singIn/SignOut'
import './Navbar.css'
import Logo from "./2.jpg"
import { useAuth0 } from "@auth0/auth0-react";



function Navbar () {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    
    return (
        <div className='navbar'>
            <div className='container'>
                <Link to="/">
                    <img src={Logo} className="logo"/>
                </Link>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li><a href='/' >Home</a></li>
                    <li><a href='/about' >About</a></li>
                    <li><a href='/contact' >Contact</a></li>
                    <li><a href='advertise' >Advertise</a></li>
                    {isAuthenticated ? (
                    <li><a href='favorites' >Favorites</a></li>
                    ) : ( 
                    <></>
                    )}
                </ul>
                <SignIn />
                <SignOut />
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar