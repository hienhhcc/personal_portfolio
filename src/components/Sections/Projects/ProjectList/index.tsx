import React from "react";
import { Links } from "src/shared/types";

import Project from "./Project";

import classes from "./styles/ProjectList.module.scss";

interface ProjectType {
  imageSrc: string;
  imageAlt: string;
  name: string;
  type: "personal" | "collaboration";
  description: string;
  functionalities: string[];
  libraries: string[];
  isLive: boolean;
  deploy: Links;
  github?: Links;
}

const ProjectList = () => {
  const PROJECTS: ProjectType[] = [
    {
      imageSrc: "nextjs-singlekey.png",
      imageAlt: "SingleKey image example",
      name: "SingleKey: Rent guarantee and tenant background checks",
      type: "collaboration",
      description: "Website quản lý cho thuê nhà cửa",
      functionalities: [
        "Login",
        "Register",
        "Logout",
        "Responsive design",
        "View landlord application",
        "View landlord application details",
        "Customize tenant prescreen form",
        "Tenant apply property",
        "Tenant prescreen",
        "More...",
      ],
      libraries: [
        "Next.js",
        "Typescript",
        "Storybook",
        "Tanstack-query",
        "React-table",
        "Redux",
        "Redux-toolkit",
        "MaterialUI",
      ],
      isLive: true,
      deploy: {
        frontend: "https://staging-app.singlekey.com",
      },
    },
    {
      imageSrc: "nextjs-generous-port.png",
      imageAlt: "Generous port",
      name: "Boho hyperspace",
      type: "collaboration",
      description:
        "Website quản lý việc donation của retailers cho các đơn vị từ thiện dựa trên những product bán trên hệ thống của vend pos",
      functionalities: [
        "Login, register",
        "Edit Home, About, Contact page. (WYSIWYG)",
        "Load customers, products",
        "Connect vend",
        "Change, update giveback",
        "More...",
      ],
      libraries: [
        "Lerna",
        "Next.js",
        "Typescript",
        "Apollo-graphql-client",
        "Apollo-codegen",
        "Chakraui",
        "React-table",
        "tinyMCE (WYSIWYG)",
      ],
      isLive: true,
      deploy: {
        frontend: "https://boho.hyperspaceportal.com/",
      },
    },
    {
      imageSrc: "react-memory-game.png",
      imageAlt: "React Memory Game",
      name: "React Memory Game",
      type: "personal",
      description: "Website chơi game rèn luyện trí nhớ",
      functionalities: ["New game", "Customize game", "Multiple player", "Restart game"],
      libraries: ["ReactJs", "Typescript", "TailwindCSS"],
      isLive: true,
      deploy: {
        frontend: "https://memory-game-weld.vercel.app/",
      },
      github: {
        frontend: "https://github.com/hienhhcc/Memory-game",
      },
    },
    {
      imageSrc: "react-personal-portfolio-app.png",
      imageAlt: "Personal Portfolio Image",
      name: "Personal Portfolio",
      type: "personal",
      description: "Website giới thiệu bản thân",
      functionalities: ["View portfolio", "Responsive design"],
      libraries: ["ReactJs", "React-transition-group", "Sass"],
      isLive: true,
      deploy: {
        frontend: "https://personalportfolio-9d5e6.web.app",
      },
      github: {
        frontend: "https://github.com/hienhhcc/personal_portfolio",
      },
    },
    {
      imageSrc: "react-todo-app.png",
      imageAlt: "React Todo Image",
      name: "React Todo App",
      type: "personal",
      description: "Website cho phép người dùng tạo và lưu todo (công việc cần làm)",
      functionalities: ["Đăng ký, đăng nhập", "CRUD todo"],
      libraries: [
        "ReactJs",
        "Redux-toolkit",
        "React-hook-form",
        "ExpressJs",
        "mongoose",
        "passport",
        "passport-jwt",
      ],
      isLive: true,
      deploy: {
        frontend: "https://react-todo-ef29e.web.app/",
        backend: "https://still-tundra-87661.herokuapp.com/",
      },
      github: {
        frontend: "https://github.com/hienhhcc/todo_app_fe",
        backend: "https://github.com/hienhhcc/todo_app_be",
      },
    },
    {
      imageSrc: "react-calculator-app1.png",
      imageAlt: "React calculator image",
      name: "React Calculator",
      type: "personal",
      description: "Website cho phép người dùng tính toán các phép toán cơ bản.",
      functionalities: ["Calculate simple math", "Can use both keyboard and mouse", "Responsive"],
      libraries: ["ReactJs", "React Context", "styled-component"],
      isLive: true,
      deploy: {
        frontend: "https://hienhhcc-calculator.web.app/",
      },
      github: {
        frontend: "https://github.com/hienhhcc/HIENHHCC_CALCULATOR",
      },
    },
  ];

  return (
    <ul className={classes.ProjectList}>
      {PROJECTS.map((project) => (
        <Project
          key={project.name}
          imageAlt={project.imageAlt}
          imageSrc={project.imageSrc}
          name={project.name}
          description={project.description}
          functionalities={project.functionalities}
          libraries={project.libraries}
          deployLink={project.deploy}
          githubLink={project.github}
          type={project.type}
        />
      ))}
    </ul>
  );
};

export default ProjectList;
