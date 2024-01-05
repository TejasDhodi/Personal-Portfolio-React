import React from 'react'
import '../Styles/FooterComponent.css'
import { socialIcons } from '../Services/Api'
const FooterComponent = () => {
    return (
        <div>
            <section id="mainFooter">
                <h4>Stay Connected</h4>
                <p>Maharashtra, Dahanu 401602</p>
                <h3>tejasdhodi77@gmail.com</h3>
                <p>+91 7559428838</p>
                <div class="socialIcons">
                    {
                        socialIcons.map((elem, index) => (
                            elem.icon
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default FooterComponent
