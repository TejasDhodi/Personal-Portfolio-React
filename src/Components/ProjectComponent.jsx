import React from 'react'
import { projectDetails } from '../Services/Api.jsx'
import '../Styles/ProjectComponent.css'

const ProjectComponent = () => {
    return (
        <>
            <section id="project" className="main">
                <div className="projectTitle ">
                    <h1 className="titles">Projects</h1>
                </div>

                <div className="cardContainer">
                    {
                        projectDetails.map((elem, index) => {
                            const { img, title, frontend, backend, database, Api, githhub, library, live } = elem;
                            return (
                                <div className="card" key={index}>
                                    <div className="cardImg">
                                        <img src={img}
                                            alt={title} />
                                    </div>
                                    <div className="cardDescription ">
                                        <h3>{title}</h3>
                                        <p>{frontend ? frontend : ""}</p>
                                        <p>{library ? library : ""} </p>
                                        <p>{backend ? backend : ""} </p>
                                        <p>{Api ? Api : ""} </p>
                                        <p>{database ? database : ""} </p>

                                        <div className="links">
                                            {githhub ? <a href={githhub ? githhub : ""} className="buttons"><i className="fa-solid fa-share"></i> Github</a> : ""}
                                            {live ? <a href={live ? live : ""} className="buttons"><i className="fa-solid fa-share"></i>Live</a> : ""}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </section>
        </>
    )
}

export default ProjectComponent
