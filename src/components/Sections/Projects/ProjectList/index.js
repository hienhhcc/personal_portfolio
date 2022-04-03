import Project from './Project';
import classes from './styles/ProjectList.module.scss';

const ProjectList = () => {
  const PROJECTS = [
    {
      imageSrc: 'react-todo-app.png',
      imageAlt: 'React Todo Image',
      name: 'React Todo App',
      type: 'personal',
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
      type: 'personal',
      description: 'Website giới thiệu bản thân',
      functionalities: ['View portfolio', 'Responsive design'],
      libraries: ['ReactJs', 'React-transition-group', 'Sass'],
      isLive: true,
      deploy: {
        frontend: 'https://personalportfolio-9d5e6.web.app',
      },
      github: {
        frontend: 'https://github.com/hienhhcc/personal_portfolio',
      },
    },
    {
      imageSrc: 'react-calculator-app1.png',
      imageAlt: 'React calculator image',
      name: 'React Calculator',
      type: 'personal',
      description:
        'Website cho phép người dùng tính toán các phép toán cơ bản.',
      functionalities: [
        'Calculate simple math',
        'Can use both keyboard and mouse',
        'Responsive',
      ],
      libraries: ['ReactJs', 'React Context', 'styled-component'],
      isLive: true,
      deploy: {
        frontend: 'https://hienhhcc-calculator.web.app/',
      },
      github: {
        frontend: 'https://github.com/hienhhcc/HIENHHCC_CALCULATOR',
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
