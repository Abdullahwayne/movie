import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Logo from '../Assets/nature-logo.png'

const Navbar = ({show,navRef}) => {
    return(
        <div className={show ? 'sidenav active' : 'sidenav'} ref={navRef}>
            <img src={Logo} alt="Logo"
            className="logo"
            />

            <ul>
                <li><a href="/"> Home</a></li>
            </ul>
            
            <ul>
                <li><a href="/"> About us</a></li>
            </ul>
            
            <ul>
                <li><a href="/"> Contact us</a></li>
            </ul>
        </div>
    )
}

export default Navbar;