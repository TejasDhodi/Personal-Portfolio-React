import React from 'react'
import { FaCheck, FaFile } from 'react-icons/fa'
import '../Styles/AboutComponent.css'
const AboutComponent = () => {
    return (
        <>
            <section id="about" className="main">
                <div className="aboutContainer scalePopup">
                    <div className="aboutMe">
                        <div className="aboutTitle">
                            <h1 className="titles">About Me</h1>
                        </div>
                        <div className="aboutDescriptionContainer">
                            <div className="aboutDescription">
                                <p>Experienced web developer with a passion for creating visually stunning and user-friendly
                                    websites.</p>
                                <p>Dedicated to delivering high-quality and innovative solutions that exceed client
                                    expectations.</p>
                            </div>
                            <ul className="skills">
                                <h2>Technical Skils</h2>
                                <li> <FaCheck /> HTML5</li>
                                <li> <FaCheck /> CSS3</li>
                                <li> <FaCheck /> JavaScript</li>
                                <li> <FaCheck /> React Js</li>
                                <li> <FaCheck /> Node Js</li>
                                <li> <FaCheck /> Express Js</li>
                                <li> <FaCheck /> MongoDB</li>
                            </ul>

                            <div className="resumeBtn">
                                <a className="buttons" href="images/Resume/Resume.pdf"
                                    download="images/Resume/Resume.pdf"><FaFile /> Download
                                    CV</a>
                            </div>
                            
                        </div>
                    </div>

                    <div className="aboutImg">
                        <img src="images/Self.jpg" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutComponent
