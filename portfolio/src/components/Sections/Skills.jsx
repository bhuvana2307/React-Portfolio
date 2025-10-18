import React from 'react';
import { Row, Col, Card, Tag } from 'antd';
import { 
  CodeOutlined, 
  LayoutOutlined, 
  DatabaseOutlined, 
  CloudOutlined, 
  ToolOutlined,
  ApiOutlined
} from '@ant-design/icons';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <CodeOutlined />,
      skills: ["Python", "Java", "JavaScript"],
      color: "blue"
    },
    {
      title: "Frontend Development",
      icon: <LayoutOutlined />,
      skills: ["React.js", "HTML", "CSS", "JavaScript"],
      color: "green"
    },
    {
      title: "Backend Development",
      icon: <ApiOutlined />,
      skills: ["Node.js", "Express.js", "Spring Boot"],
      color: "purple"
    },
    {
      title: "Database",
      icon: <DatabaseOutlined />,
      skills: ["MySQL", "MongoDB"],
      color: "orange"
    },
    {
      title: "Cloud Platform",
      icon: <CloudOutlined />,
      skills: ["Google Cloud Platform"],
      color: "red"
    },
    {
      title: "Other Platforms & Tools",
      icon: <ToolOutlined />,
      skills: ["VS Code", "IntelliJ IDEA", "Git", "Postman", "Jira"],
      color: "cyan"
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h1 className="section-title">Skillset</h1>
        
        <Row gutter={[32, 32]} className="skills-grid">
          {skillCategories.map((category, index) => (
            <Col xs={24} sm={12} lg={8} key={index}>
              <Card 
                className="skill-card" 
                bordered={false}
                hoverable
              >
                <div className="skill-category">
                  <div className="category-header">
                    <span className="category-icon" style={{ color: `var(--ant-${category.color}-6)` }}>
                      {category.icon}
                    </span>
                    <h3 className="category-title">{category.title}</h3>
                  </div>
                  
                  <div className="skills-list">
                    {category.skills.map((skill, skillIndex) => (
                      <Tag 
                        key={skillIndex} 
                        className="skill-tag"
                        color={category.color}
                      >
                        {skill}
                      </Tag>
                    ))}
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Skills;