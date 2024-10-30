import { ReactNode } from "react";
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
import restdali from "../assets/images/restdali.png";

interface Project {
  link: string;
  image: any;
  title: string;
  date: string;
  description: ReactNode | string;
}

export const PROJECTS: { [key: string]: Project } = {
  project1: {
    link: "https://restdali.com",
    date: "2024",
    image: restdali,
    title: "Restdali",
    description: `A web application for creating Restaurant Menus online. It's
        developed using React, NodeJS, Kubernetes and Postgres.`,
  },
  project2: {
    link: "https://github.com/manel-castro/react-microservices",
    image: mock10,
    title: "Microservices: Kubernettes, Docker and React",
    date: "2023",
    description: `I completed this certification as of May 2023. It's a fully pledged
        microservices backend. It covers all from message brokers to
        automated deployment.`,
  },
  project3: {
    link: "https://github.com/manel-castro/sockets-vue",
    image: mock09,
    title: "Socket.io and Vue.JS",
    date: "2023",
    description: (
      <>
        I developed this chat room following{" "}
        <a
          href="https://socket.io/get-started/private-messaging-part-1/"
          target="_blank"
          rel="noreferrer"
        >
          this tutorial
        </a>
        . It not only allows for bidirectional messages but also for persistent
        store of users.
      </>
    ),
  },
  //   project4: {
  //     link: "https://github.com/manel-castro/angular-todos/tree/master",
  //     image: mock08,

  //     title: "Angular Todos App",
  //     date: "2023",
  //     description:
  //       "I developed this Todos App using Angular JS and a small API Crud.",
  //   },
  project5: {
    link: "https://github.com/manel-castro/react-router",
    image: mock07,
    title: "React Contacts Agenda",
    date: "2023",
    description:
      "This is an implementation of a contacts agenda using React Router.",
  },
  project6: {
    link: "https://github.com/manel-castro/puppeteer",
    image: mock06,
    title: "Web scrapping with Puppeteer",
    date: "2022",
    description: `I implemented Puppeteer (Automated Testing tool) to update registers
        from an online questionnaire using Excel files.`,
  },
  project7: {
    link: "https://github.com/manel-castro/js-ddbb",
    image: mock05,
    title: "Node JS DDBB",
    date: "2021",
    description: `I built a boilerplate database using Node JS and Express JS. It
        allows for CRUD operations and has an users system.`,
  },
  //   project8: {
  //     link: "https://github.com/manel-castro/vue-todos-app",
  //     image: mock04,
  //     title: "Vue Todos App",
  //     date: "2021",
  //     description: `A small todos app conected to an API using Vue JS.`,
  //   },
  project9: {
    link: "https://github.com/manel-castro/threejs-tests/tree/master",
    image: mock03,
    title: "Three JS: 3D figures",
    date: "2021",
    description: `I implemented the npm package Three JS for modeling 3D components
        using Vanilla JS.`,
  },
  //   project10: {
  //     link: "https://github.com/manel-castro/robots-app",
  //     image: mock02,
  //     title: "Robots App",
  //     date: "2021",
  //     description: `A phone/web application developed using React Native and Expo.`,
  //   },
  project11: {
    link: "https://github.com/manel-castro/react-web-styled-components/",
    image: mock01,
    title: "Styled Components: ULTRA",
    date: "2020",
    description: `A landing page developed using React with Styled Components npm
        package.`,
  },
  project12: {
    link: "https://github.com/manel-castro/Todos-App",
    image: mock00,
    title: "React Todos App",
    date: "2019",
    description: `A Todos App developed using React, Redux and Router, and deployed
        using Node JS and Express.`,
  },
};
