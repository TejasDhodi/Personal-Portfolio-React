import React from 'react'
import { certificateDetails } from '../Services/Api';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import '../Styles/CertificateComponent.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CertificateComponent = () => {
    return (
        <>
            <section id="certificatesSection">
                <div className="certificateTitle">
                    <h1 className="titles">Cetrificate And Achievements</h1>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={220}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        550: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50
                        }
                    }}
                >
                    {
                        certificateDetails.map((elem, index) => {
                            const { img, title, description } = elem;
                            return (
                                <SwiperSlide key={index}>
                                    <div className="certificateCard">
                                        <div className="certificateImage">
                                            <img src={img} alt={title} className="certificateImg" />
                                        </div>
                                        <div className="certificateInfo">
                                            <h2>{title}</h2>
                                            <p>{description}</p>
                                        </div>
                                    </div>

                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            </section>

        </>
    )
}

export default CertificateComponent
