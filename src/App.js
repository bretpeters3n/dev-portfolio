import reset from "react-style-reset/string";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Tilt from 'react-parallax-tilt';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './styles.css';
import Pdf from './assets/2022_bretpetersen_resume.pdf';

import StickyNav from "react-sticky-nav";

import Footer from './components/Footer';

// import MyNav from './MyNav';


// import NavOverlay from './script.js';
import { ReactComponent as HamburgerIcon } from './assets/hamburger-thin.svg';
import { ReactComponent as CloseIcon } from './assets/close-thin.svg';
import { ReactComponent as GithubIcon } from './assets/github.svg';
import { ReactComponent as HerokuIcon } from './assets/heroku.svg';
import { ReactComponent as LinkedInIcon } from './assets/linkedin.svg';
import { ReactComponent as PhoneIcon } from './assets/phone.svg';
import { ReactComponent as EmailIcon } from './assets/email.svg';
import { ReactComponent as HTMLIcon } from './assets/html.svg';


// const SizableLogo = styled.img((props) => ({
//   height: props.large ? "64px" : "32px",
//   width: props.large ? "64px" : "32px",
//   margin: "4px"
// }));

const Reset = createGlobalStyle`
  ${reset};

  h1 {
    font-family: 'Asset', sans-serif;
    font-size: 72px;
    text-align: center;
    // color: #fff;
  }

  h2 {
    font-family: 'Manrope', sans-serif;
    font-size: 44px;
    font-weight: 600;
    text-align: center;
    line-height: 1.2;
    padding-bottom: 8px;
  }
  
  h5 {
    font-family: 'Manrope', sans-serif;
  }

  h6 {
    font-family: 'Manrope', sans-serif;
  }

  .about-text {
    font-family: 'Manrope', sans-serif;
    font-weight: 200;
    font-size: 18px;
    max-width: 700px;
    // line-height: 1.4;
    text-align: center;
  }

  p {
    line-height: 28px;   /* within paragraph */
    margin-bottom: 30px; /* between paragraphs */
  }

`;

const ContainerTitle = styled.div`
  background-color: none;
  min-height: 100vh;
`;
const Container = styled.div`
margin: auto;
  background-color: none;
  min-height: 100vh;
  max-width: 1200px;
`;

const Padding = styled.div`
  background-color: none;
  height: 0vh;
`;

// const Position = styled.p`
//   left: 50%;
//   position: fixed;
//   top: 50%;
//   transform: translate(-50%, -50%);
// `;

const Nav = styled(StickyNav)`
  background-color: none;
`;

const Button = styled.button`
  font-family: 'Manrope', sans-serif;
  font-weight: 200;
  border: 2px solid var(--main-text-light);
  background-color: white;
  color: var(--main-text-light);
  font-size: 20px;
  padding: 10px 60px;
  // border-radius: 5px;
  // margin: 10px 0px;
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
    <>
      <ContainerTitle>
        <TitleSlide />
        <Reset />
        <Padding />
        <div id="portfolio"></div>
        <Nav>
          {(position) => (
            <div className="container">
              <div className="navbar-container">
                <h5 className="titleMenu"><AnchorLink href='#home'>Bret Petersen</AnchorLink></h5>
                {/* <button className="closebtn" onClick={closeNav}>
                <CloseIcon className="iconRolloverToWhite" width="60px" height="60px" />
              </button> */}
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
        </ContainerTitle>
        <Container>
        <div className="sections-gap">
          <section className="flex-wrap container">
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className="projectCards projectTrueCrimeQuiz">
              <div>
                <div className="content">
                <div className="pill"><h6>True Crime Quiz</h6></div>
                    <div className="projIconsGroup">
                      <a href="https://github.com/bretpeters3n/true-crime-quiz">
                        <div className="projIcons">
                          <GithubIcon className="iconRolloverToDarkBlue" width="40px" height="40px" />
                        </div>
                      </a>
                      <a href="https://true-crime-quiz.herokuapp.com/">
                        <div className="projIcons">
                          <HerokuIcon className="iconRolloverToDarkBlue" width="40px" height="40px" />
                        </div>
                      </a>
                    </div>
                  {/* <img src={CatMemory} style={{height:200}} /> */}
                </div>
              </div>
            </Tilt>
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className="projectCards projectNorthernHealthTracker">
              <div>
                <div className="content">
                  <div className="pill"><h6>Northern Health Tracker</h6></div>
                    <div className="projIconsGroup">
                      <a href="https://github.com/bretpeters3n/northern-health-tracker">
                        <div className="projIcons">
                          <GithubIcon className="iconRolloverToGreen" width="40px" height="40px" />
                        </div>
                      </a>
                      <a href="https://northern-health-tracker2.herokuapp.com/">
                        <div className="projIcons">
                          <HerokuIcon className="iconRolloverToGreen" width="40px" height="40px" />
                        </div>
                      </a>
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
                      <a href="https://github.com/bretpeters3n/cat-memory">
                        <div className="projIcons">
                          <GithubIcon className="iconRolloverToLightBlue" width="40px" height="40px" />
                        </div>
                      </a>
                      <a href="https://bretpeters3n.github.io/cat-memory/">
                        <div className="projIcons">
                          <HerokuIcon className="iconRolloverToLightBlue" width="40px" height="40px" />
                        </div>
                      </a>
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
                      <a href="https://github.com/bretpeters3n/ux-ui-portfolio_previous-portfolio">
                        <div className="projIcons">
                        <GithubIcon className="iconRolloverToYellow" width="40px" height="40px" />
                        </div>
                      </a>
                      <a href="https://bretpeters3n.github.io/ux-ui-portfolio_previous-portfolio/">
                        <div className="projIcons">
                          <HTMLIcon className="iconRolloverToYellow" width="40px" height="40px" />
                        </div>
                      </a>
                    </div>
                  {/* <img src={CatMemory} style={{height:200}} /> */}
                </div>
              </div>
            </Tilt>     
          </section>
          <section id="about" className="other-slides bg-grey" >
            <div className="asset-underlined">
              <h1>about</h1>
              <hr/>
            </div>
            <div className="about-text">
              <p>I’m a Full Stack Web Developer with extensive experience in visual design who enjoys the 
                fast-paced environment of the tech industry and being part of pioneering teams. 
                I’m a React-fluent developer who enjoys creating interaction and animation filled mobile 
                and desktop experiences.</p>

              <p><span style={{ fontWeight: '600', textDecoration: 'underline' }}>Core Competencies and Skills</span><br/>
              Full Stack Web Developer with a passion for React.js.</p>

              <p>When I’m not coding I enjoy street biking, live comedy and live music. I enjoy meeting new people, solving problems, and learning new things :)</p>
            </div>
          </section>
          <section id="resume" className="other-slides bg-yellow" >
            <div className="asset-underlined">
              <h1>resume</h1>
              <hr/>
            </div>
            <a href = {Pdf} rel = "noopener noreferrer"><Button style={{ backgroundColor: 'transparent', color: 'black', border: '2px solid #212529'}}>View resume (pdf)</Button></a>
          </section>
          <section id="contact" className="other-slides bg-grey" >
            <div className="asset-underlined">
              <h1>contact</h1>
              <hr/>
            </div>
            <div className="contactIconsGroup">
              <a href="mailto:bretpetersen@gmail.com">
                <div className="contactIcons">
                  <EmailIcon className="iconRolloverToDarkBlue" width="40px" height="40px" />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/bret-petersen/" target="_blank" rel="noopener noreferrer">
                <div className="contactIcons">
                  <LinkedInIcon className="iconRolloverToDarkBlue" width="40px" height="40px" />
                </div>
              </a>
              <a href="https://github.com/bretpeters3n" target="_blank" rel="noopener noreferrer">
                <div className="contactIcons">
                  <GithubIcon className="iconRolloverToDarkBlue" width="40px" height="40px" />
                </div>
              </a>
              <a href="tel:4152941459">
                <div className="contactIcons">
                  <PhoneIcon className="iconRolloverToDarkBlue" width="40px" height="40px" />
                </div>
              </a>
            </div>
          </section>
        </div>
        <Footer />
      </Container>
    </>
  );
}

export function MyNav() {
  return (
    <>
        {/* The overlay */}
        <div id="myNav" className="overlay">
            {/* Button to close the overlay navigation */}
            {/* <a className="closebtn" onClick={ closeNav }>
              <CloseIcon className="iconRolloverToWhite" width="60px" height="60px" />
            </a> */}
            <button className="closebtn" onClick={closeNav}>
              <CloseIcon className="iconRolloverToWhite" width="60px" height="60px" />
            </button>
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
    <div id="home">
        {/* The overlay */}
        <div className="titleslide">
          <div className="asset-underlined">
            <h1 style={{color:'white'}}>hello!</h1>
            <div className="hr white-line"></div>
          </div>
          <div>
            <h2><span style={{fontWeight:200}}>I'm </span><span style={{fontWeight:600}}>Bret Petersen</span><span style={{fontWeight:200}}>.</span><br />
            <span style={{fontWeight:200}}>I'm a full-stack web developer.</span></h2>
          </div>
          <AnchorLink href='#portfolio'>
            <Button style={{ backgroundColor: 'transparent' }}>View my work</Button>
          </AnchorLink>
        </div>
    </div>
  );
}