import React, { useEffect } from 'react';
import './main.css'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Data = [
    {
        id: 1,
        imgSrc: "https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        destTitle: "Bora Bora",
        location: "New Zealand",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: "The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its lucurious stays and adventurous activities."
    },
    {
        id: 2,
        imgSrc: "https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        destTitle: "Machu Picchu",
        location: "Peru",
        grade: "CULTURAL RELAX",
        fees: "$600",
        description: "Huayana Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular."
    },
    {
        id: 3,
        imgSrc: "https://images.pexels.com/photos/1139040/pexels-photo-1139040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        destTitle: "Great Barrier Reef",
        location: "Australia",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: "One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is 'lavish' and 'beauty'. Always interesting to be in this place"
    },
    {
        id: 4,
        imgSrc: "https://images.pexels.com/photos/3889704/pexels-photo-3889704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        destTitle: "Cappadocia",
        location: "Turkey",
        grade: "CULTURAL RELAX",
        fees: "$800",
        description: "According to the World Tourism Ranking, 45 Million people visit Turkey each year, and from that about 2 Million come to visit Cappadocia. This place is known for its luxurious stays and adventurous activities"
    },
    {
        id: 5,
        imgSrc: "https://images.pexels.com/photos/5804347/pexels-photo-5804347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        destTitle: "Guanajuato",
        location: "Mexico",
        grade: "CULTURAL RELAX",
        fees: "$1100",
        description: "A city in central Mexico, Guanajuato is known for its history of silver mining and colonial architecture. The houses in the city are very attractively painted with the most bright colors available. Always welcome."
    },
    {
        id: 6,
        imgSrc: "https://images.pexels.com/photos/1797121/pexels-photo-1797121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        destTitle: "Cinque Terre",
        location: "Italy",
        grade: "CULTURAL RELAX",
        fees: "$840",
        description: "The vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and Love seafood, you will be exhilarated with the choice you are about to get here. Happy exploring great food!"
    },
    {
        id: 7,
        imgSrc: "https://images.pexels.com/photos/1089302/pexels-photo-1089302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        destTitle: "Angkor Wat",
        location: "Cambodia",
        grade: "CULTURAL RELAX",
        fees: "$790",
        description: "Angkot wat represents the entire range of Khmer art from the 9th to the 15th century. This temple is considered the heart and soul of Cambodia. This place is known for its luxurious stays and adventurous activities"
    },
    {
        id: 8,
        imgSrc: "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=600",
        destTitle: "Taj Mahal",
        location: "India",
        grade: "CULTURAL RELAX",
        fees: "$900",
        description: "An immense mausoleum of white marble, built-in Agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz, the  monument is breathtakingly beautiful. This place is known for its luxurious stays and adventurous activities"
    },
    {
        id: 9,
        imgSrc: "https://images.pexels.com/photos/8332573/pexels-photo-8332573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        destTitle: "Bali Island",
        location: "Indonesia",
        grade: "CULTURAL RELAX",
        fees: "$500",
        description: "Bali is an Indonesian Island and one of the best holiday destinations in the Indonesian archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches."
    },

]

const Main = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])


    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
                        return (
                            <div data-aos="fade-up" key={id} className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon" />
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className="btn flex">
                                        DETAILS <HiOutlineClipboardCheck className="icon" />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Main;
