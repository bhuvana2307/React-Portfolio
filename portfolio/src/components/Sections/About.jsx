import React from 'react';
import { Row, Col, Card } from 'antd';
import { 
  PhoneOutlined, 
  MailOutlined, 
  LinkedinOutlined, 
  GithubOutlined, 
  TrophyOutlined, 
  SafetyCertificateOutlined 
} from '@ant-design/icons';
import './About.css';

// Import your award images
import award1 from '../../assets/Award1.jpeg';
import award2 from '../../assets/Award2.jpeg';

const About = () => {
  const certifications = [
    {
      name: "Associate Cloud Engineer",
      link: "https://drive.google.com/file/d/15q7Eq1grNvntd1UeL7hSEVN8icYVlaNk/view?usp=sharing",
      issuer: "Google Cloud"
    },
    {
      name: "DSA",
      link: "https://drive.google.com/file/d/1BUEqZSA9NBgX7Ztxhdbfiu0gfHWO6v3p/view?usp=sharing",
      issuer: "TechDose"
    },
    {
      name: "AWS Cloud Practitioner",
      link: "https://drive.google.com/file/d/1yue5SQp5pl9PULX1bUPhtygPDm6q91oQ/view?usp=sharing",
      issuer: "AWS"
    },
    {
      name: "Responsive Web Design",
      link: "https://drive.google.com/file/d/1EwO8NkeVgzoks7m0155xwQR0Hnlx4sfS/view?usp=sharing",
      issuer: "freeCodeCamp"
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h1 className="section-title">About Me</h1>
        
        <Row gutter={[48, 32]} className="about-content">
          <Col xs={24} lg={12}>
            {/* Personal Introduction */}
            <Card className="info-card" bordered={false}>
              <h2 className="card-title">Empowering Ideas, Creating Impact</h2>
              <p className="description">
                I am a passionate Full Stack Developer with expertise in MERN stack and cloud technologies. 
                Skilled in building scalable web applications and solving complex problems through innovative 
                solutions. Always eager to learn new technologies and contribute to meaningful projects.
              </p>
            </Card>

            {/* Contact Information */}
            <Card className="info-card" bordered={false}>
              <h3 className="card-subtitle">Personal Information</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-label">Name</span>
                  <span className="contact-value">Bhuvaneshwari R</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">
                    <PhoneOutlined /> Phone Number
                  </span>
                  <span className="contact-value">+91 8940270152</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">
                    <MailOutlined /> Email Address
                  </span>
                  <span className="contact-value">bhuvaneshwarir2307@gmail.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Social Network</span>
                  <div className="social-links">
                    <a href="https://www.linkedin.com/in/bhuvaneshwari-r-246998237/" target="_blank" rel="noopener noreferrer" className="social-link">
                      <LinkedinOutlined /> LinkedIn
                    </a>
                    <a href="https://github.com/bhuvana2307" target="_blank" rel="noopener noreferrer" className="social-link">
                      <GithubOutlined /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            {/* Work Experience */}
            <Card className="info-card" bordered={false}>
              <h3 className="card-subtitle">Work Experience</h3>
              <div className="experience-item">
                <h4 className="job-title">Software Engineer</h4>
                <div className="company-info">
                  <span className="company-name">Quantiphi</span>
                  <span className="work-duration">Mar 2025 – Sep 2025</span>
                  <span className="work-location">Kerala, India</span>
                </div>
                <ul className="responsibilities">
                  <li>Built and deployed production-ready web applications using MERN and Spring Boot, handling high volume of daily user requests with secure authentication</li>
                  <li>Reduced average response latency through optimized REST APIs and microservices architecture</li>
                  <li>Integrated GCP (BigQuery, Cloud Functions) and AWS (S3, EC2) to improve data pipeline reliability and automate deployments</li>
                  <li>Collaborated in Agile/Scrum environment using Jira, code reviews, and sprint planning, shortening release cycles</li>
                  <li>Implemented CI/CD pipelines and automated testing, reducing regression bugs by 40%</li>
                </ul>
              </div>
            </Card>
          </Col>

          {/* Right Column - Awards & Certifications */}
          <Col xs={24} lg={12}>
            {/* Awards */}
            <Card className="info-card" bordered={false}>
              <div className="section-header">
                {/* <TrophyOutlined className="section-icon" /> */}
                <h3 className="card-subtitle">Awards</h3>
              </div>
              <div className="awards-content">
                <div className="award-item">
                  <h4 className="award-title">Department Topper</h4>
                  <p className="award-description">
                    Awarded as Department Topper for outstanding academic performance and 
                    exceptional project work in Computer Science Engineering.
                  </p>
                  <div className="award-images">
                    <img src={award1} alt="Award 1" className="award-img" />
                    <img src={award2} alt="Award 2" className="award-img" />
                  </div>
                </div>
              </div>
            </Card>

            {/* Certifications */}
            <Card className="info-card" bordered={false}>
              <div className="section-header">
                {/* <SafetyCertificateOutlined className="section-icon" /> */}
                <h3 className="card-subtitle">Certifications</h3>
              </div>
              <div className="certifications-list">
                {certifications.map((cert, index) => (
                  <div key={index} className="certification-item">
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="certification-link"
                    >
                      <span className="cert-name">{cert.name}</span>
                      <span className="cert-issuer">{cert.issuer}</span>
                    </a>
                  </div>
                ))}
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default About;