import React, { useEffect, useState } from 'react'
import { certificateDetails } from '../Services/Api';
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Styles/CertificateComponent.css'

const CertificateComponent = () => {

    const [slidesToShow, setSlidesToShow] = useState(3);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        speed: 700,
        autoplaySpeed: 3000,
        cssEase: "linear"

    };

    useEffect(() => {

        const handleResize = () => {
            if (window.innerWidth < 481) {
                setSlidesToShow(1);
            } else if (window.innerWidth < 881) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(3);
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    return (
        <>
            <section id="certificatesSection">
                <div className="certificateTitle">
                    <h1 className="titles">Cetrificate And Achievements</h1>
                </div>

                <Slider {...settings}>
                    {
                        certificateDetails.map((elem, index) => {
                            const { img, title, description } = elem;
                            return (
                                <div className="certificateCard" key={index}>
                                    <div className="certificateImage">
                                        <img src={img} alt={title} className="certificateImg" />
                                    </div>
                                    <div className="certificateInfo">
                                        <h2>{title}</h2>
                                        <p>{description}</p>
                                    </div>
                                </div>

                            )
                        })
                    }
                </Slider>

            </section>

        </>
    )
}

export default CertificateComponent
