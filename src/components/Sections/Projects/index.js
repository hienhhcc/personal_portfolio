import { LineBreak } from '../../index';
import ProjectList from './ProjectList';
import classes from './styles/Projects.module.scss';

const Projects = () => {
  return (
    <section id="projects" className={classes.Projects}>
      <div className={classes.header}>
        <h2>Dự án đã làm</h2>
        <LineBreak />
      </div>
      <div className={classes.content}>
        <ProjectList />
      </div>
    </section>
  );
};

export default Projects;
