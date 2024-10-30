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
  description: string;
}

export const PROJECTS: { [key: string]: Project } = {
  project1: {
    link: "https://restdali.com",
    date: "2024",
    image: restdali,
    title: "projects-1-title",
    description: "projects-1-description",
  },
  project2: {
    link: "https://github.com/manel-castro/react-microservices",
    image: mock10,
    title: "projects-2-title",
    date: "2023",
    description: "projects-2-description",
  },
  project3: {
    link: "https://github.com/manel-castro/sockets-vue",
    image: mock09,
    title: "projects-3-title",
    date: "2023",
    description: "projects-3-description",
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
    title: "projects-4-title",
    date: "2023",
    description: "projects-4-description",
  },
  project6: {
    link: "https://github.com/manel-castro/puppeteer",
    image: mock06,
    title: "projects-5-title",
    date: "2022",
    description: "projects-5-description",
  },
  project7: {
    link: "https://github.com/manel-castro/js-ddbb",
    image: mock05,
    title: "projects-6-title",
    date: "2021",
    description: "projects-6-description",
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
    title: "projects-7-title",
    date: "2021",
    description: "projects-7-description",
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
    title: "projects-8-title",
    date: "2020",
    description: "projects-8-description",
  },
  project12: {
    link: "https://github.com/manel-castro/Todos-App",
    image: mock00,
    title: "projects-9-title",
    date: "2019",
    description: "projects-9-description",
  },
};
