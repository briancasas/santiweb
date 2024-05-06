import React from 'react';
import Carousel from './components/carousel.component';
import  './Galeria.css';


    const slides = [
        "https://www.crsf.com.ec/wp-content/uploads/2016/06/IMG_0246-min.jpg",
        "https://titulae.es/wp-content/uploads/2021/11/grado-superior-peluqueria.jpg",
        
        ]
        export default function Galeria(){
        return (
            <main className="Galeria">
                <div className="max-w-lg m-auto">
                    <Carousel autoSlide={true} autoSlideInterval={5000}>
                        {slides.map((s)=>(
                            <img src={s} alt="img" key={s}/>
                        ))}
                    </Carousel>
                </div>
            </main>
        )
        };
   
        



