import React, {useState} from 'react';
import style from "./index.module.scss"

import logo from "../../App/Images/image 4.svg"
import {Image, Burger} from "@mantine/core";

import {AiFillInstagram, AiFillFacebook} from "react-icons/ai"
import {BsTelegram} from "react-icons/bs"
import russiaFlag from "../../App/Images/russia.png";

const Navbar = () => {
    const [opened, setOpened] = useState(false);
    return (
        <>
            <div className={style.navbarWrapper}>
                <div className={style.navbar}>
                    <div className={style.logo}>
                        <Image  width={300} src={logo} alt={"logo"}/>
                    </div>
                    <div className={style.navLeft}>

                        <div className={style.messengers}>
                            <AiFillInstagram size={30} color={"#fff"}/>
                            <AiFillFacebook size={30} color={"#fff"}/>
                            <BsTelegram size={27} color={"#fff"}/>
                            <Image width={30} src={russiaFlag} alt={"russia icon"}/>

                        </div>

                        <Burger
                            size={"lg"}
                            color={"white"}
                            opened={opened}
                            onClick={() => setOpened((o) => !o)}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;