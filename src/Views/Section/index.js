import React, {useState} from 'react';
import style from "./index.module.scss"
import {Title, Image, Text, Button} from "@mantine/core";
import { useFullscreen } from '@mantine/hooks';
import cl from "classnames"
import {GoScreenFull} from "react-icons/go"

import ImagOne from "../../App/Images/image 10.svg"
import ImagTwo from "../../App/Images/image 11.svg"
import ImagThree from "../../App/Images/image 12.svg"
import ImagFour from "../../App/Images/image 13.svg"
import video from "../../App/Images/vide.mp4"

import ReactPlayer from 'react-player'
import Corusel from "../../Components/Corusel";
import CenterMode from "../../Components/Corusel";
import SectionTwo from "../SectionTwo";


const Section = () => {
    const [videoBar, setVideoBar] = useState(false)
    const {ref, toggle } = useFullscreen();
    return (
        <>
            <div className={style.sectionWrapper}>

                <Title className={style.sectionTitle} order={2}>
                    НАШИ ПРОЕКТЫ
                </Title>

                <div className={style.sectionContainer}>
                    <div className={style.box}>
                        <Image width={500} src={ImagOne} alt={"sectionContainer img"}/>

                        <div className={style.textBox}>
                            <Text component={"p"}>
                                FOOD FOR LIFE (ПИЩА ЖИЗНИ) - крупнейшая в мире гуманитарная миссия по раздаче горячей
                                пищи. Основана в 1974 году в Западной Бенгалии, с целью обеспечения вегетарианским
                                питанием социально незащищённых слоёв населения, а также людей, пострадавших от
                                стихийных бедствий и военных конфликтов вне зависимости от их расы, национальности,
                                политических или религиозных убеждений. В настоящее время FOOD FOR LIFE в более чем 60
                                странах мира.
                            </Text>
                        </div>
                    </div>
                    <div className={style.box}>
                        <div className={cl(style.textBox, style.right)}>
                            <Text component={"p"}>
                                FOOD FOR LIFE (ПИЩА ЖИЗНИ) - крупнейшая в мире гуманитарная миссия по раздаче горячей
                                пищи. Основана в 1974 году в Западной Бенгалии, с целью обеспечения вегетарианским
                                питанием социально незащищённых слоёв населения, а также людей, пострадавших от
                                стихийных бедствий и военных конфликтов вне зависимости от их расы, национальности,
                                политических или религиозных убеждений. В настоящее время FOOD FOR LIFE в более чем 60
                                странах мира.
                            </Text>
                        </div>
                        <Image width={500} src={ImagTwo} alt={"sectionContainer img"}/>
                    </div>
                    <div className={style.box}>
                        <Image width={500} src={ImagThree} alt={"sectionContainer img"}/>

                        <div className={style.textBox}>
                            <Text component={"p"}>
                                FOOD FOR LIFE (ПИЩА ЖИЗНИ) - крупнейшая в мире гуманитарная миссия по раздаче горячей
                                пищи. Основана в 1974 году в Западной Бенгалии, с целью обеспечения вегетарианским
                                питанием социально незащищённых слоёв населения, а также людей, пострадавших от
                                стихийных бедствий и военных конфликтов вне зависимости от их расы, национальности,
                                политических или религиозных убеждений. В настоящее время FOOD FOR LIFE в более чем 60
                                странах мира.
                            </Text>
                        </div>
                    </div>
                    <div className={style.box}>
                        <div className={cl(style.textBox, style.right)}>
                            <Text component={"p"}>
                                FOOD FOR LIFE (ПИЩА ЖИЗНИ) - крупнейшая в мире гуманитарная миссия по раздаче горячей
                                пищи. Основана в 1974 году в Западной Бенгалии, с целью обеспечения вегетарианским
                                питанием социально незащищённых слоёв населения, а также людей, пострадавших от
                                стихийных бедствий и военных конфликтов вне зависимости от их расы, национальности,
                                политических или религиозных убеждений. В настоящее время FOOD FOR LIFE в более чем 60
                                странах мира.
                            </Text>
                        </div>
                        <Image width={500} src={ImagFour} alt={"sectionContainer img"}/>
                    </div>
                </div>

                <Title className={style.sectionTitle} order={2}>
                    НАШИ видео
                </Title>

                <div className={style.videoContainer}>

                    <div ref={ref} onClick={() => setVideoBar(!videoBar)}>
                        <ReactPlayer width={"100%"} height={"auto"} onPlay={true} playing={videoBar && true}
                                     url={video}/>
                    </div>

                    <div className={style.fullScreen}>
                        <Button onClick={toggle}>
                            <GoScreenFull/>
                        </Button>
                    </div>

                </div>

                {/*<Corusel/>*/}
                <CenterMode/>
            </div>
        </>
    );
};

export default Section;