import React from 'react';
import style from "./index.module.scss"
import {Anchor, Button, Image, Text} from "@mantine/core";
import img from "../../App/Images/BgImage.png"

const Header = () => {
    return (
        <>
            <div className={style.headerWrapper}>

                <div className={style.header}>
                    <div className={style.headerText}>
                        <Image radius={200} width={300} height={300} src={img} className={style.logo}/>
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

                    <div className={style.headerCenter}>
                        <Text className={style.txt}>
                            КАК ПОМОЧЬ НАШЕМУ БЛАГОТВОРИТЕЛЬНОМУ ПРОЕКТУ ?
                        </Text>

                        <div className={style.btns}>
                            <Anchor href="https://my.click.uz/services/pay?service_id=22224&merchant_id=13810" target="_blank">
                                <Button>CLICK</Button>
                            </Anchor>

                            <Button>PayMe</Button>
                            <Button>Расч.с</Button>
                        </div>

                        <div className={style.centerContent}>
                            <div className={style.contentBox}>
                                <div className={style.boxContainer}>
                                    <div className={style.boxLeft}>
                                        <Text className={style.boxTitle} component={"b"}>
                                            Единица
                                        </Text>
                                        <Text component={"p"}>
                                            <b>1</b> Акций кормления в приюте для бездомных <br/> = <b>2 000 000 cym</b>
                                        </Text>
                                        <Text component={"p"}>
                                            <b>1</b>  Комплектов продуктов для малоимущих  <br/> = <b>250 000 cym</b>
                                        </Text>
                                        <Text component={"p"}>
                                            <b>1</b> Мастер - класе в детском доме <br/> = <b>2 000 000 cym</b>
                                        </Text>
                                    </div>
                                    <div className={style.centerLine}/>
                                    <div className={style.boxRight}>
                                        <Text className={style.boxTitle} component={"b"}>
                                            Месяц
                                        </Text>
                                        <Text component={"p"}>
                                            <b>4</b> Акция кормления в приюте для бездомных <br/> = <b>8 000 000 cym</b>
                                        </Text>
                                        <Text component={"p"}>
                                            <b>40</b>  Комплект продуктов для малоимущих <br/> = <b>10 000 000 cym</b>
                                        </Text>
                                        <Text component={"p"}>
                                            <b>3</b> Мастер - класе в детском доме <br/> = <b>6 000 000 cym</b>
                                        </Text>
                                    </div>
                                </div>
                                <Text component={"p"} className={style.bottomText}>
                                    Общая сумма , необходимая для сбора В МЕСЯЦ НАШИ ПРОЕКТЫ <b>= 24 000 000 cym</b>
                                </Text>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;