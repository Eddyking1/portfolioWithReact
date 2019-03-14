import React from "react";
import "./App.css";
import { NavLink, Switch, Route } from "react-router-dom";
import GetApi from "./GetApi";
import SkillBar from "react-skillbars";
import styled from "styled-components";
import SimpleLoadingBar from "react-simple-loading-bar";

const skills = [
  { type: "css", level: 79 },
  { type: "Javascript", level: 75 },
  { type: "HTML", level: 80 }
];

const ContentWrap = styled.div`

    display: flex;
    flex-direction: column;
    align-content: center;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    min-height: calc(100vh - 60px);
    width: 100%;
    background: transparent;
    padding: 40px 0px;
    animation: fades 2.5s;
`;

const ProjectContentPic = styled.img`
    position: relative;
    min-width: 400px;
    min-height:400px;
    width: 40%;
    overflow: hidden;
    margin: 5px 6px;
    border-radius: 10px;


`;

const ProjectContent = styled.div`

    display: flex;
    -webkit-box-align: center;
    align-items: center;
    align-content: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 60%;
    overflow: hidden;
    padding: 30px 0px;

`;

const ProfilePicture = styled.img`
  height: 15rem;
  width: 15rem;
  margin: 0 auto;
  animation: fades 2.5s;
  transition: 1.5s;
  border-radius: 30% 30% 30%;
  z-index: 1;
`;

const Appskillbars = styled.div`
  padding-top: 6%;
  padding-bottom: 1%;
  margin: 0 auto;
  height: 10%;
  width: 100%;
  animation: fades 1.5s;
`;

const HomeText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  margin: 0 auto;
  animation: fades 1.5s;
  p {
    text-align:center;
    width:50%;
    font-weight:500;
    font-size:1.5rem;

  }
`;

const Ptag = styled.div`
  font-size: 20px;
  width: 80%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  line-height: 2rem;
  border: 1px black;
  animation: fades 1.5s;
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  animation: fades 1.5s;

  a {
    font-size: 4rem;
    color: black;
    padding: 1%;
  }
`;

const Oldportfolio = styled.div`
  position: absolute;
  border: 2px solid black;
  animation: fades 1.5s;

  @media (max-width: 768px) {
    width: 35%;
    position: relative;
    margin-top: 5%;
    margin-left: 33%;
  }

  a {
    color: black;
  }
`;

const App = props => (
  <div className="app">
    <Oldportfolio>
      {" "}
      <a href="www.edwardkumerius.com">Checkout my first portfolio! </a>
    </Oldportfolio>
    <GetApi height={20} />
    <SimpleLoadingBar height={20} />
    <Navigation {...props} />
    <Main {...props} />
  </div>
);

const Navigation = ({}) => (
  <nav>
    <ul>
      <li>
        <NavLink activeClassName="current" exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="current" to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="current" to="/contact">
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="current" to="/projects">
          My projects
        </NavLink>
      </li>
    </ul>
  </nav>
);

const Home = props => (
  <div className="home">
    <HomeText>
      <ProfilePicture
        src={require("./assets/cool.jpg")}
        alt="profile-picture"
      />
      <p> Mitt namn är Edward Kumerius och jag brinner för webbutveckling. 
      Jag studerar till frontend-utvecklare på KYH samtidigt som jag extra jobbar som IT/Webbansvarig på ett litet catering företag. 
      </p>


    </HomeText>

    <SocialMedia>
      <a href="https://www.facebook.com/edward.kumerius">
        <i class="fab fa-facebook p-i" />
      </a>
      <a href="https://www.instagram.com/">
        <i class="fab fa-instagram p-i" />
      </a>
      <a href="https://github.com/Eddyking1">
        <i class="fab fa-git-square p-i" />
      </a>
    </SocialMedia>
  </div>
);

const About = ({ nick }) => (
  <div className="about">
    <h1>About {nick ? nick : "nobody"}</h1>
    <Ptag>
      <p1>
        {" "}
        Hello, my name is {nick ? nick : "nobody"} and I'm a 21 year old
        frontend-developer and i love it!
      </p1>
      <p1>
        {" "}
        When I was younger I came to the conclusion that I love technology and I
        wanted to get involved with it.
      </p1>
      <p1>
        {" "}
        I have always loved to tinker with computers and exploring different
        functionalities on the largest operating systems as Mac OS, Windows OS
        and last but not least linux OS.
      </p1>
      <p1>
        {" "}
        By just tinkering and solving my own computer issues I learned
        everything I know today. I learnd how to solve the problems I
        encountered by searching for the solutions instead of just turn it in to
        a repair shop.{" "}
      </p1>
      <p1>
        {" "}
        So how did I get into programming? I always thought being a coder is
        something that I wanted to do as I grew up, along the way I met several
        people that had experience with programming in "c++" so i learned code
        by those people.
      </p1>
      <p1>
        {" "}
        A friend of mine could write code with me on my computer with a program
        called teamviewer, as he guided me through my first "hello world"
        projekt and thats how I fell for coding with the endless possibilities
        that you could do with code.{" "}
      </p1>
      <p1> I have a passion for webdesign and javascript functionality. </p1>
      <p1>
        {" "}
        I live in Stockholm with my family. During my freetime I enjoy playing
        video games, working out and spending time with my girlfriend.{" "}
      </p1>
    </Ptag>
    <Appskillbars>
      {" "}
      <SkillBar skills={skills} height={20} />{" "}
    </Appskillbars>

    <SocialMedia>
      <a href="https://www.facebook.com/edward.kumerius">
        <i class="fab fa-facebook p-i" />
      </a>
      <a href="https://www.instagram.com/">
        <i class="fab fa-instagram p-i" />
      </a>
      <a href="https://github.com/Eddyking1">
        <i class="fab fa-git-square p-i" />
      </a>
    </SocialMedia>
  </div>
);

const Contact = props => (
  <div className="contact">
    <h1>Services Me</h1>
    <h2>Name Edward Kumerius </h2>
    <h2>Telefone: 0763370509 </h2>
    <h2>
      Email: <strong>{props ? props.email : "edward.kumerius@kyh.se"}</strong>
    </h2>
    <SocialMedia>
      <a href="https://www.facebook.com/edward.kumerius">
        <i class="fab fa-facebook p-i" />
      </a>
      <a href="https://www.instagram.com/">
        <i class="fab fa-instagram p-i" />
      </a>
      <a href="https://github.com/Eddyking1">
        <i class="fab fa-git-square p-i" />
      </a>
    </SocialMedia>
  </div>
);

const Projects = props => (
  <ContentWrap>
    <ProjectContent>
      <ProjectContentPic
        src={require("./assets/tokyoC.png")}
        alt="profile-picture"
      />
      <ProjectContentPic
        src={require("./assets/originalPortfolio.png")}
        alt="profile-picture"
      />

      <ProjectContentPic
        src={require("./assets/Rpage.png")}
        alt="profile-picture"
      />

      <ProjectContentPic
        src={require("./assets/matbitenC.png")}
        alt="profile-picture"
      />
    </ProjectContent>
  </ContentWrap>
);

const Main = props => (
  <Switch>
    <Route
      exact
      path="/"
      render={routeProps => <Home {...routeProps} {...props} />}
    />
    <Route
      exact
      path="/about"
      render={routeProps => <About {...routeProps} {...props} />}
    />
    <Route
      exact
      path="/contact"
      render={routeProps => <Contact {...routeProps} {...props} />}
    />
    <Route
      exact
      path="/projects"
      render={routeProps => <Projects {...routeProps} {...props} />}
    />
  </Switch>
);

export default App;
