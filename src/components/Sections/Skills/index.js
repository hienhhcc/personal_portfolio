import { LineBreak } from '../../index';
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { DiCss3, DiReact, DiSass } from 'react-icons/di';
import {
  SiJavascript,
  SiRedux,
  SiMongodb,
  SiMaterialui,
  SiReactrouter,
  SiPostman,
} from 'react-icons/si';
import { GrNode } from 'react-icons/gr';
import classes from './styles/Skills.module.scss';

const Skills = () => {
  return (
    <section id="skills" className={classes.Skills}>
      <div className={classes.header}>
        <h2>Kỹ năng</h2>
        <LineBreak />
      </div>
      <div className={classes.content}>
        <div className={classes.skill}>
          <h3 className={classes.name}>Công nghệ và ngôn ngữ</h3>
          <ul className={classes.list}>
            <li className={classes.html5}>
              <AiFillHtml5 />
              <span>Html5</span>
            </li>
            <li className={classes.css3}>
              <DiCss3 />
              <span>CSS3</span>
            </li>
            <li className={classes.javascript}>
              <SiJavascript />
              <span>JavaScript</span>
            </li>
          </ul>
        </div>

        <div className={classes.skill}>
          <h3 className={classes.name}>Thư viện</h3>
          <ul className={classes.list}>
            <li className={classes.reactjs}>
              <DiReact />
              <span>ReactJs</span>
            </li>
            <li className={classes.redux}>
              <SiRedux />
              <span>Redux-toolkit</span>
            </li>
            <li className={classes.reactrouter}>
              <SiReactrouter />
              <span>React-router-dom</span>
            </li>
            <li className={classes.nodejs}>
              <GrNode />
              <span>NodeJs(ExpressJs)</span>
            </li>
            <li className={classes.mongodb}>
              <SiMongodb />
              <span>MongoDB</span>
            </li>
            <li className={classes.materialui}>
              <SiMaterialui />
              <span>MaterialUI</span>
            </li>
          </ul>
        </div>

        <div className={classes.skill}>
          <h3 className={classes.name}>Công cụ</h3>
          <ul className={classes.list}>
            <li className={classes.github}>
              <AiFillGithub />
              <span>Github</span>
            </li>
            <li className={classes.sass}>
              <DiSass />
              <span>Sass</span>
            </li>
            <li className={classes.postman}>
              <SiPostman />
              <span>Postman</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
