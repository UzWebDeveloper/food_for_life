import React, {useState} from 'react';
import style from "./index.module.scss"
import Slider from "react-slick";
import {Text} from "@mantine/core";
import "./index.css"
import ImagOne from "../../App/Images/Farrux.jpg"
import ImagTwo from "../../App/Images/GulyaZahidova.jpg"
import ImagThree from "../../App/Images/Maxich.jpg"
import ImagFour from "../../App/Images/Natalya.jpg"
import ImagFive from "../../App/Images/ShuhratUsmanov.jpg"
import cl from "classnames";
import {BsCaretRightFill, BsCaretLeftFill} from 'react-icons/bs';

const data = [
    {
        img: ImagOne
    },
    {
        img: ImagTwo
    },
    {
        img: ImagThree
    },
    {
        img: ImagFour
    },
    {
        img: ImagFive
    },
]

const Corusel = () => {
    const [volunteerIndex, setVolunteerIndex] = useState(0);

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        beforeChange: (current, next) => setVolunteerIndex(next),
    };
    return (
        <div className={style.coruselWrapper}>
            <Text component={"p"} className={style.title}>
                НАШИ ВОЛОНТЕРЫ
            </Text>
            <div className={style.continer}>
                <Slider className={style.slider} {...settings} >
                    {data.map((item, idx) =>
                        <div className={cl(idx === volunteerIndex ? style.box : style.boxActive)}>
                            <img className={style.img} src={item.img} alt={"sds"}/>
                        </div>
                    )}
                </Slider>
            </div>
        </div>
    );
};

export default Corusel;


const NextArrow = ({onClick}) => {
    return (
        <div className='arrow next' onClick={onClick}>
            <BsCaretRightFill/>
        </div>
    );
};

const PrevArrow = ({onClick}) => {
    return (
        <div className='arrow prev' onClick={onClick}>
            <BsCaretLeftFill/>
        </div>
    );
};