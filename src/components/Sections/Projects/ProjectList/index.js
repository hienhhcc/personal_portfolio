import Project from './Project';
import classes from './styles/ProjectList.module.scss';

const ProjectList = () => {
  const PROJECTS = [
    {
      imageSrc: 'react-todo-app.png',
      imageAlt: 'React Todo Image',
      name: 'React Todo App',
      description:
        'Website cho phép người dùng tạo và lưu todo (công việc cần làm)',
      functionalities: ['Đăng ký, đăng nhập', 'CRUD todo'],
      libraries: [
        'ReactJs',
        'Redux-toolkit',
        'React-hook-form',
        'ExpressJs',
        'mongoose',
        'passport',
        'passport-jwt',
      ],
      isLive: true,
      deploy: {
        frontend: 'https://react-todo-ef29e.web.app/',
        backend: 'https://still-tundra-87661.herokuapp.com/',
      },
      github: {
        frontend: 'https://github.com/hienhhcc/todo_app_fe',
        backend: 'https://github.com/hienhhcc/todo_app_be',
      },
    },
    {
      imageSrc: 'react-personal-portfolio-app.png',
      imageAlt: 'Personal Portfolio Image',
      name: 'Personal Portfolio',
      description: 'Website giới thiệu bản thân',
      functionalities: ['View portfolio', 'Ci-cd pipeline'],
      libraries: ['ReactJs', 'React-transition-group', 'Sass', 'Docker'],
      isLive: true,
      deploy: {
        frontend: 'https://abc.com',
        backend: 'https://abc.com',
      },
      github: {
        frontend: 'https://github.com/hienhhcc/personal_portfolio',
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
        />
      ))}
    </ul>
  );
};

export default ProjectList;
