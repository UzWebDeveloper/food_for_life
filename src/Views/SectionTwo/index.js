import React from 'react';
import style from "./index.module.scss"
import {Anchor, Button, Image, Text} from "@mantine/core";
import {FaFacebook, FaInstagram,} from "react-icons/fa";
import {BsTelegram} from "react-icons/bs";
import img from "../../App/Images/BgImage.png";
import cl from "classnames";

const SectionTwo = () => {
    return (
        <>
            <div className={style.SectionTwoWrapper}>
                <div className={style.sectionContiner}>
                    <Text component={"p"} className={style.title}>
                        НАШИ ЦЕЛИ
                    </Text>

                    <Text component={"p"} className={style.text}>
                        Своим примером мы пропагандируем здоровый образ жизни свободный от алкоголя ,
                        табака<br/> наркотиков
                        и сквернословия . <br/> Наши образовательные и социальные программы позволяют обрести видение и
                        сформулировать вдохновляющие цели , основанные на универсальных ценностях и принципах Вы всегда
                        можете стать частью нашего волонтерского движения и менять свое сознание вместе с нами - от
                        благоПОЛУЧИЯ к благоДАРНОСТИ !
                    </Text>

                    <div className={style.bottomBox}>
                        <Text className={cl(style.txt)}>
                            КАК ПОМОЧЬ НАШЕМУ БЛАГОТВОРИТЕЛЬНОМУ ПРОЕКТУ ?
                        </Text>

                        <div className={style.btns}>
                            <Button>CLICK</Button>
                            <Button>PayMe</Button>
                            <Button>Расч.с</Button>
                        </div>
                    </div>

                    <div className={style.messengers}>
                        <Text component={"p"} className={style.text}>
                            КАК С НАМИ СВЯЗАТЬСЯ?
                        </Text>
                        <div className={style.messengersContainer}>
                            <Anchor href="https://mantine.dev/" target="_blank">
                                <FaInstagram/>
                            </Anchor>
                            <Anchor href="https://mantine.dev/" target="_blank">
                                <FaFacebook/>
                            </Anchor>
                            <Anchor href="https://mantine.dev/" target="_blank">
                                <BsTelegram/>
                            </Anchor>
                        </div>
                    </div>

                    <div className={style.language}>
                       <div className={style.languageBtns}>
                           <Button>
                               ru
                           </Button>
                           <Button>
                               uz
                           </Button>
                           <Button>
                               en
                           </Button>
                       </div>
                        <Text component={"p"} className={style.txt}>
                            2022
                        </Text>
                    </div>

                    <div className={style.header}>
                        <div className={style.headerText}>
                            <Image radius={200} width={300} height={300} src={img} />
                            <div>
                                <div className={style.topTexts}>
                                    <Text component={"p"}>
                                        FOOD
                                    </Text>
                                    <Text component={"span"}>
                                        for
                                    </Text>
                                    <Text component={"p"}>
                                        LIFE
                                    </Text>
                                </div>
                                <div className={style.subText}>
                                    <Text component={"p"}>
                                        БЛАГОТВОРИТЕЛЬНЫЙ ВОЛОНТЕРСКИЙ ПРОЕКТ
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SectionTwo;