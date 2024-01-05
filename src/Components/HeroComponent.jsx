import React from 'react'
import { socialIcons } from '../Services/Api'
import '../Styles/HeroComponent.css'
import { FaPen, FaAddressBook } from 'react-icons/fa'
const HeroComponent = () => {
    return (
        <>
            <section id="Intro" className="heroComponent">
                <div className="personalDetails">
                    <div className="title">
                        <h4>This <span>is</span></h4>
                        <h2><span>Tejas</span> Dhodi!</h2>
                        <h1>I am a <span>Web Developer</span></h1>
                    </div>

                    <div className="introActions">
                        <a href='' className="introBtn buttons"> <FaAddressBook /> Connect</a>
                        <a href='https://levelupcoding.in' className="introBtn buttons"> <FaPen /> Blogs</a>
                    </div>

                    <div className="socialIcons">
                        <h4>Do Follow On</h4>
                        {
                            socialIcons.map((elem, index) => (
                                <a href={elem.link} className={elem.class} key={index}>{elem.icon}</a>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroComponent
