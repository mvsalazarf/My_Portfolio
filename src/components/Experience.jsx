import React from 'react';
import '../App.css';

const ExperienceCard = ({ title, description }) => {
  const descriptionList = description
    .split('\n')
    .map((item, index) => {
      if (item.trim().startsWith('●')) {
        return (
          <li key={index}>{item.trim().slice(1).trim()}</li>
        );
      } else {
        return (
          <p key={index}>{item.trim()}</p>
        );
      }
    });

  return (
    <div className="experience-card">
      <h3>{title}</h3>
      {descriptionList}
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      description: `
      Freelance. Remote
      September 13/2023 - Present
      ● Designing and developing attractive and functional user interfaces using HTML5, CSS3, and JavaScript.
      ● Implementing responsive and user-friendly designs for mobile devices.
      ● Using version control systems like Git for collaborative projects and maintaining clean, organized code.
      ● Team collaboration with other developers, designers, and team members to carry out projects and achieve specific goals.
      ● Utilizing frameworks and libraries like React.js and Redux to create interactive and high-performance web applications.
      `,
    },
    {
      title: 'Front End Developer',
      description: `
      Academic Experience - Henry Bootcamp
      June 23/2023 - July 13/2023
      ● Integrated payment gateway with Mercado Pago.
      ● Developed interactive forms and filters in the frontend.
      ● Designed and styled the frontend interface.
      ● Conflict resolution.
      `,
    },
    // Agrega más experiencias según sea necesario
  ];
  return (
    <div className='experience-card' id='Experience'>
      <h2>Experience</h2>
      <div className="experience-container">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </div>
  );

};

export default Experience;
