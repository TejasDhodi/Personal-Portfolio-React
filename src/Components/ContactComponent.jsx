import React from 'react'
import { contactDetails } from '../Services/Api'
import '../Styles/ContactComponent.css'
const ContactComponent = () => {
    return (
        <>
            <section id="connect">
                <div className="connectTitle">
                    <h1 className="titles">Connect With Me</h1>
                    <p>Feel Free To Contact</p>
                </div>

                <div className="contactContainer">
                    <div className="contactDetailsContainer">
                        {
                            contactDetails.map((elem, index) => {
                                const { icon, title, description } = elem;
                                return (
                                    <div className="contactDetails" key={index}>
                                        <div className="contactDetailsIcon">
                                            {icon}
                                        </div>
                                        <div className="contactInfo">
                                            <h3>{title}</h3>
                                            <p>{description}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <form action="https://formsubmit.co/ca42f91993c2b45ad52ac18a876cdded" method="POST" className="contactForm">
                        <div className="inputContainer">
                            <div className="input">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="Name" id="name" placeholder="Enter Your Name" />
                            </div>
                            <div className="input">
                                <label htmlFor="contactNumber">Contact Number</label>
                                <input type="text" name="Number" id="contactNumber" placeholder="Enter Your Contact Number" />
                            </div>
                            <div className="input">
                                <label htmlFor="description">Description</label>
                                <textarea name="Description" id="description" cols="30" rows="10"
                                    placeholder="Describe Your Statement"></textarea>
                            </div>
                            <div className="submitBtn">
                                <button type="submit" className="buttons">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

        </>
    )
}

export default ContactComponent
