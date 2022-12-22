import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiReact, DiSass } from "react-icons/di";
import { GrNode } from "react-icons/gr";
import {
  SiChakraui,
  SiJavascript,
  SiMaterialui,
  SiMongodb,
  SiPostman,
  SiReactrouter,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import { LineBreak } from "../../index";

import classes from "./styles/Skills.module.scss";

const technologies = [
  {
    icon: <AiFillHtml5 />,
    name: "Html5",
    className: classes.html5,
  },
  {
    icon: <DiCss3 />,
    name: "CSS3",
    className: classes.css3,
  },
  {
    icon: <SiJavascript />,
    name: "JavaScript",
    className: classes.javascript,
  },
  {
    icon: <SiTypescript />,
    name: "Typescript",
    className: classes.typescript,
  },
];

const libraries = [
  {
    icon: <DiReact />,
    name: "ReactJs",
    className: classes.reactjs,
  },
  {
    icon: <SiRedux />,
    name: "Redux-toolkit",
    className: classes.redux,
  },
  {
    icon: <SiReactrouter />,
    name: "React-router-dom",
    className: classes.reactrouter,
  },
  {
    icon: <SiMaterialui />,
    name: "MaterialUI",
    className: classes.materialui,
  },
  {
    icon: <SiChakraui />,
    name: "Chakraui",
    className: classes.chakraui,
  },
  {
    icon: <TbBrandNextjs />,
    name: "Next.js",
    className: classes.github,
  },
  {
    icon: <GrNode />,
    name: "NodeJs (ExpressJs)",
    className: classes.nodejs,
  },
  {
    icon: <SiMongodb />,
    name: "MongoDB",
    className: classes.mongodb,
  },
];

const tools = [
  {
    icon: <AiFillGithub />,
    name: "Github",
    className: classes.github,
  },
  {
    icon: <DiSass />,
    name: "Sass",
    className: classes.sass,
  },
  {
    icon: <SiPostman />,
    name: "Postman",
    className: classes.postman,
  },
];

const Skills = () => {
  return (
    <section id='skills' className={classes.Skills}>
      <div className={classes.header}>
        <h2>Kỹ năng</h2>
        <LineBreak />
      </div>
      <div className={classes.content}>
        <div className={classes.skill}>
          <h3 className={classes.name}>Công nghệ và ngôn ngữ</h3>
          <ul className={classes.list}>
            {technologies.map((tech) => (
              <li key={tech.name} className={tech.className}>
                {tech.icon}
                <span>{tech.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={classes.skill}>
          <h3 className={classes.name}>Thư viện</h3>
          <ul className={classes.list}>
            {libraries.map(({ name, className, icon }) => (
              <li key={name} className={className}>
                {icon}
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={classes.skill}>
          <h3 className={classes.name}>Công cụ</h3>
          <ul className={classes.list}>
            {tools.map(({ name, className, icon }) => (
              <li key={name} className={className}>
                {icon}
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
