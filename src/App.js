import React from "react";
import Header from "./Views/Header";
import Navbar from "./Views/Navbar";
import "./App/Styles/styles.scss"
import Section from "./Views/Section";
import SectionTwo from "./Views/SectionTwo";

export default function App() {
  return (
    <>
        <div style={{

            margin:"0 auto"
        }}>
            <Navbar/>
            <Header/>
            <Section/>
            <SectionTwo/>
        </div>
    </>
  );
}
