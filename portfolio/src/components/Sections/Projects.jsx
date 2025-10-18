import React, { useState } from 'react';
import { Card, Button, Row, Col } from 'antd';
import { LeftOutlined, RightOutlined, EyeOutlined, GithubOutlined } from '@ant-design/icons';
import './Projects.css';
import Blogproject from '../../assets/Blog-project.png';
import RecipeProject from '../../assets/Recipe-project.png';
import InterviewAssistant from '../../assets/Interview-Assistant-project.png';

import ChatApp from '../../assets/Chat-App.webp';



const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      name: "AI enabled blog Application",
      image: Blogproject,
      description: "An AI-powered blog platform built with the MERN stack, featuring post publishing, commenting, AI-based draft generation, image optimization, and an admin dashboard for content management",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveLink: "https://blog-web-fawn-nu.vercel.app/",
      githubLink: "https://github.com/bhuvana2307/Blog_Web"
    },
    {
      name: "TasteSync App",
      image: RecipeProject,
      description: "A recipe-sharing platform built with React, Node.js, and MongoDB, featuring a cosine similarity-based recommendation engine, Cloudinary-powered image optimization, and Elasticsearch-enabled full-text search.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveLink: "https://gleeful-fairy-dc2466.netlify.app/",
      githubLink: "https://github.com/bhuvana2307/RecipeApp_Frontend"
    },
    {
      name: "AI-powered interview assistant",
      image: InterviewAssistant,
      description: "An AI-powered interview assistant built with React, featuring automated technical interviews, real-time chat, timed questions, AI scoring with feedback, and an interviewer dashboard for analytics and candidate management.",
      technologies: ["React","Tailwind"],
      liveLink: "https://interview-assistant-project.vercel.app/",
      githubLink: "https://github.com/bhuvana2307/interview-assistant-Project"
    },
    {
      name: "Real-Time Chat Application",
      image: ChatApp,
      description: "A real-time chat application built with Spring Boot and WebSocket, featuring instant messaging, responsive Thymeleaf UI, and optimized low-latency performance for concurrent users.",
      technologies: [ "Spring Boot","WebSocket", "Thymeleaf"],
      githubLink: "https://github.com/bhuvana2307/app"
    }
    
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentProject];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h1 className="section-title">Projects</h1>
        
        <div className="projects-content">
          
          <Button 
            className="nav-arrow left-arrow" 
            type="text" 
            icon={<LeftOutlined />} 
            onClick={prevProject}
          />
          
          <Card className="project-card" bordered={false}>
            <Row gutter={[48, 0]} align="middle">
              
              <Col xs={24} md={12}>
                <div className="project-image-container">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="project-image"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/600x400/1890ff/ffffff?text=Project+Image';
                    }}
                  />
                </div>
              </Col>

              {/* Project Details - Right Side */}
              <Col xs={24} md={12}>
                <div className="project-details">
                  <h2 className="project-name">{project.name}</h2>
                  
                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="technologies">
                    <h4>Technologies Used:</h4>
                    <div className="tech-tags">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="project-links">
                    <Button 
                      type="primary" 
                      icon={<EyeOutlined />}
                      href={project.liveLink}
                      target="_blank"
                      className="live-demo-btn"
                    >
                      Live Demo
                    </Button>
                    <Button 
                      icon={<GithubOutlined />}
                      href={project.githubLink}
                      target="_blank"
                      className="github-btn"
                    >
                      GitHub
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>

          {/* Navigation Arrow - Right */}
          <Button 
            className="nav-arrow right-arrow" 
            type="text" 
            icon={<RightOutlined />} 
            onClick={nextProject}
          />
        </div>

        {/* Project Indicators */}
        <div className="project-indicators">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentProject ? 'active' : ''}`}
              onClick={() => setCurrentProject(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;