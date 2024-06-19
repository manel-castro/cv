import React from "react";
import mock00 from "../assets/images/mock00.png";
import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";
import mock03 from "../assets/images/mock03.png";
import mock04 from "../assets/images/mock04.png";
import mock05 from "../assets/images/mock05.png";
import mock06 from "../assets/images/mock06.png";
import mock07 from "../assets/images/mock07.png";
import mock08 from "../assets/images/mock08.png";
import mock09 from "../assets/images/mock09.png";
import mock10 from "../assets/images/mock10.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://github.com/manel-castro/react-microservices"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock10} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/manel-castro/react-microservices"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Microservices: Kubernettes, Docker and React (2023)</h2>
          </a>
          <p>
            I completed this certification as of May 2023. It's a fully pledged
            microservices backend. It covers all from message brokers to
            automated deployment.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/manel-castro/sockets-vue"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock09} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/manel-castro/sockets-vue"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Socket.io and Vue.JS (2023)</h2>
          </a>
          <p>
            I developed this chat room following{" "}
            <a
              href="https://socket.io/get-started/private-messaging-part-1/"
              target="_blank"
              rel="noreferrer"
            >
              this tutorial
            </a>
            . It not only allows for bidirectional messages but also for
            persistent store of users.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/manel-castro/angular-todos/tree/master"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock08} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/manel-castro/angular-todos/tree/master"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Angular Todos App (2023)</h2>
          </a>
          <p>
            I developed this Todos App using Angular JS and a small API Crud.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/manel-castro/react-router"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock07} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/manel-castro/react-router"
            target="_blank"
            rel="noreferrer"
          >
            <h2>React Router (2023)</h2>
          </a>
          <p>
            This is an implementation of a contacts agenda using React Router.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/manel-castro/puppeteer"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock06} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/manel-castro/puppeteer"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Web scrapping with Puppeteer (2022)</h2>
          </a>
          <p>
            I implemented Puppeteer (Automated Testing tool) to update registers
            from an online questionnaire using Excel files.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/manel-castro/js-ddbb"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock05} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/manel-castro/js-ddbb"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Node JS DDBB (2021)</h2>
          </a>
          <p>
            I built a boilerplate database using Node JS and Express JS. It
            allows for CRUD operations and has an users system.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/manel-castro/vue-todos-app"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock04} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/manel-castro/vue-todos-app"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Vue Todos App (2021) </h2>
          </a>
          <p>A small todos app conected to an API using Vue JS.</p>
        </div>
        <div className="project">
          <a
            href="https://github.com/manel-castro/threejs-tests/tree/master"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock03} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/manel-castro/threejs-tests/tree/master"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Three JS Test (2021)</h2>
          </a>
          <p>
            I implemented the npm package Three JS for modeling 3D components
            using Vanilla JS.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/manel-castro/robots-app"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock02} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/manel-castro/robots-app"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Robots App (2021)</h2>
          </a>
          <p>A phone/web application developed using React Native and Expo.</p>
        </div>
        <div className="project">
          <a
            href="https://github.com/manel-castro/react-web-styled-components/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock01} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/manel-castro/react-web-styled-components/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>ULTRA (2020)</h2>
          </a>
          <p>
            A landing page developed using React with Styled Components npm
            package.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/manel-castro/Todos-App"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock00} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/manel-castro/Todos-App"
            target="_blank"
            rel="noreferrer"
          >
            <h2>React Todos App (2019)</h2>
          </a>
          <p>
            A Todos App developed using React, Redux and Router, and deployed
            using Node JS and Express.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
