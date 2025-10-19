import React from 'react';
import { Button, Row, Col } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import myPic from '../../assets/myPic.png';
import './Hero.css';

const Hero = () => {
  const handleDownloadResume = () => {
    const resumeUrl = '/Bhuvaneshwari_R(Resume).pdf'; 
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Bhuvi_Resume.pdf';
    link.click();
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <Row gutter={[48, 48]} align="middle" justify="center">
          
          {/* Image FIRST on mobile, SECOND on desktop */}
          <Col xs={24} md={12} className="hero-image-col" order={{ xs: 1, md: 2 }}>
            <div className="profile-image-container">
              <div className="profile-image-wrapper">
                <img 
                  src={myPic}
                  alt="Bhuvi - Full Stack Developer"
                  className="profile-image"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x400/1890ff/ffffff?text=Bhuvi';
                  }}
                />
                <div className="image-border"></div>
              </div>
            </div>
          </Col>

          {/* Text SECOND on mobile, FIRST on desktop */}
          <Col xs={24} md={12} className="hero-text-col" order={{ xs: 2, md: 1 }}>
            <div className="hero-text">
              <h1 className="hero-title">
                I am a
                <span className="gradient-text"> Full Stack </span>
                Developer
              </h1>
              
              <p className="hero-subtitle">
                Crafting digital experiences with modern technologies
                and innovative solutions.
              </p>

              <Button
                type="primary"
                size="large"
                icon={<DownloadOutlined />}
                onClick={handleDownloadResume}
                className="resume-btn"
              >
                Download Resume
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Hero;