import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaHome, FaAddressCard, FaFolderOpen, FaTrophy, FaPen, FaAddressBook } from 'react-icons/fa'
import '../Styles/Navbar.css'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [showNav, setShowNav] = useState(false);

    const handleNav = () => {
        if (window.scrollY >= 100) {
            setNav(true)
        } else {
            setNav(false)
        }
    }

    const handleShowNav = () => {
        setShowNav(!showNav)
    }

    window.addEventListener('scroll', handleNav)
    return (
        <>
            <nav className={nav ? "navbar showNav " : "navbar"}>
                <div className="navBrand">
                    <h3><i className="fa-solid fa-laptop"></i> Tejas Dhodi</h3>
                </div>

                <ul className={showNav ? "navItems toggleNav" : "navItems"}>
                    <li className="navList"> <Link spy={true} smooth={true} offset={50} duration={500} to='Intro' onClick={() => setShowNav(false)} className='navLink'> <FaHome /> Home </Link></li>
                    <li className="navList"> <Link spy={true} smooth={true} offset={-120} duration={500} to='about' onClick={() => setShowNav(false)} className='navLink'> <FaAddressCard />About </Link></li>
                    <li className="navList"> <Link spy={true} smooth={true} offset={-120} duration={500} to='project' onClick={() => setShowNav(false)} className='navLink'> <FaFolderOpen /> Projects </Link></li>
                    <li className="navList"> <Link spy={true} smooth={true} offset={-120} duration={500} to='certificatesSection' onClick={() => setShowNav(false)} className='navLink'> <FaTrophy /> Certificates </Link></li>
                    <li className="navList"> <a href='' onClick={() => setShowNav(false)} className='navLink'> <FaPen /> Blogs</a> </li>
                    <li className="navList"> <Link spy={true} smooth={true} offset={-120} duration={500} to='connect' onClick={() => setShowNav(false)} className='navLink'> <FaAddressBook /> Connect</Link> </li>
                </ul>


                <div className={showNav ? "hamburgerMenu toggle" : "hamburgerMenu"} onClick={handleShowNav}>
                    <div id="bar1" className="bar"></div>
                    <div id="bar2" className="bar"></div>
                    <div id="bar3" className="bar"></div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
