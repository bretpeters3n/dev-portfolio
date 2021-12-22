import reset from "react-style-reset/string";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Tilt from 'react-parallax-tilt';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './styles.css';
import CatMemory from './assets/project-catMemory.png'


import StickyNav from "react-sticky-nav";

// import MyNav from './MyNav';


// import NavOverlay from './script.js';
import { ReactComponent as HamburgerIcon } from './assets/hamburger-thin.svg';
import { ReactComponent as CloseIcon } from './assets/close-thin.svg';
import { ReactComponent as GithubIcon } from './assets/github.svg';
import { ReactComponent as HerokuIcon } from './assets/heroku.svg';


const SizableLogo = styled.img((props) => ({
  height: props.large ? "64px" : "32px",
  width: props.large ? "64px" : "32px",
  margin: "4px"
}));

const Reset = createGlobalStyle`
  ${reset};

  body {
    // background-color: white;
  }

  h1 {
    font-family: 'Manrope', sans-serif;
    font-size: 60px;
    font-weight: 600;
    text-align: center;
    line-height: 1.2;
    padding-bottom: 8px;
  }
  
  h5 {
    font-family: 'Manrope', sans-serif;
    // font-weight: 400;
    // text-align: center;
  }

  h6 {
    font-family: 'Manrope', sans-serif;
    // font-size: 18px;
    // font-weight: 400;
  }

  * {
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  background-color: none;
  min-height: 100vh;
`;

const Padding = styled.div`
  background-color: none;
  height: 0vh;
`;

const Position = styled.p`
  left: 50%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Nav = styled(StickyNav)`
  background-color: none;
`;

const Button = styled.button`
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  border: 3px solid var(--main-text-dark);
  background-color: white;
  color: var(--main-text-dark);
  font-size: 20px;
  padding: 10px 60px;
  // border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

export function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
export function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

export default function App() {
  return (
    <Container >
      <TitleSlide />
      <Reset />
      <Padding />
      <div id="portfolio"></div>
      <Nav>
        {(position) => (
          <div className="container">
            <div className="navbar-container">
              <span className="align-middle"><h5 className="titleMenu"><a href="#">Bret Petersen</a></h5></span>
              {/* Use any element to open/show the overlay navigation menu */}
              <span onClick={ openNav }>
                <div className="menuGrouping">
                  <HamburgerIcon width="24px" height="24px" />
                  <h5 className="titleMenu">Menu</h5>
                </div>
              </span>
            </div>
            {/* <SizableLogo src="https://logo.clearbit.com/novvum.io" />
            <Position>Current position: {position}</Position> */}
          </div>
        )}
      </Nav>
      <MyNav></MyNav>
      <section className="flex-wrap container">
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className="projectCards projectTrueCrimeQuiz">
          <div>
            <div className="content">
            <div className="pill"><h6>Crime Quiz</h6></div>
                <div className="projIconsGroup">
                  <a href="https://github.com/bretpeters3n">
                    <div className="projIcons">
                      <GithubIcon className="iconRolloverToDarkBlue" width="40px" height="40px" />
                    </div>
                  </a>
                  {/* <a href="http://bretpetersen.com"> */}
                    <div className="projIcons">
                      <HerokuIcon className="iconRolloverToDarkBlue" width="40px" height="40px" />
                    </div>
                  {/* </a> */}
                </div>
              {/* <img src={CatMemory} style={{height:200}} /> */}
            </div>
          </div>
        </Tilt>
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className="projectCards projectNorthernHealthTracker">
          <div>
            <div className="content">
              <div className="pill"><h6>Health Tracker</h6></div>
                <div className="projIconsGroup">
                  {/* <a href="https://github.com/bretpeters3n"> */}
                    <div className="projIcons">
                      <GithubIcon className="iconRolloverToGreen" width="40px" height="40px" />
                    </div>
                  {/* </a> */}
                  {/* <a href="http://bretpetersen.com"> */}
                    <div className="projIcons">
                      <HerokuIcon className="iconRolloverToGreen" width="40px" height="40px" />
                    </div>
                  {/* </a> */}
                </div>
              {/* <img src={CatMemory} style={{height:200}} /> */}
            </div>
          </div>
        </Tilt>
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className="projectCards projectCatMemory">
        <div>
            <div className="content">
              <div className="pill"><h6>CatMemory</h6></div>
                <div className="projIconsGroup">
                  {/* <a href="https://github.com/bretpeters3n"> */}
                    <div className="projIcons">
                      <GithubIcon className="iconRolloverToLightBlue" width="40px" height="40px" />
                    </div>
                  {/* </a> */}
                  {/* <a href="http://bretpetersen.com"> */}
                    <div className="projIcons">
                      <HerokuIcon className="iconRolloverToLightBlue" width="40px" height="40px" />
                    </div>
                  {/* </a> */}
                </div>
              {/* <img src={CatMemory} style={{height:200}} /> */}
            </div>
          </div>
        </Tilt>
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className="projectCards projectGraphicDesign">
        <div>
            <div className="content">
              <div className="pill"><h6>UX/UI Portfolio</h6></div>
                <div className="projIconsGroup">
                  {/* <a href="https://github.com/bretpeters3n"> */}
                    <div className="projIcons">
                      <GithubIcon className="iconRolloverToYellow" width="40px" height="40px" />
                    </div>
                  {/* </a> */}
                  {/* <a href="http://bretpetersen.com"> */}
                    <div className="projIcons">
                      <HerokuIcon className="iconRolloverToYellow" width="40px" height="40px" />
                    </div>
                  {/* </a> */}
                </div>
              {/* <img src={CatMemory} style={{height:200}} /> */}
            </div>
          </div>
        </Tilt>     
      </section>
    </Container>
  );
}

export function MyNav() {
  return (
    <>
        {/* The overlay */}
        <div id="myNav" className="overlay">
            {/* Button to close the overlay navigation */}
            <a className="closebtn" onClick={ closeNav }>
              <CloseIcon className="iconRolloverToWhite" width="60px" height="60px" />
            </a>
            {/* Overlay content */}
            <div className="overlay-content">
                <a href="#home">Home</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#about">About</a>
                <a href="#resume">Resume</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
        
    </>
  );
}

export function TitleSlide() {
  return (
    <>
        {/* The overlay */}
        <div className="titleslide">
          <div>
            <h1><span style={{fontWeight:200}}>Hello, I'm </span><span style={{fontWeight:600}}>Bret Petersen</span><span style={{fontWeight:200}}>.</span><br />
            <span style={{fontWeight:200}}>I'm a full-stack web developer.</span></h1>
          </div>
          <AnchorLink href='#portfolio'>
            <Button style={{ backgroundColor: 'transparent' }}>View my work</Button>
          </AnchorLink>
        </div>
    </>
  );
}