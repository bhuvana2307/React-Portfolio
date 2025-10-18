// import React from 'react';
// import { Card, Button, Row, Col, Tag, Timeline } from 'antd';
// import { 
//   RocketOutlined, 
//   CodeOutlined, 
//   CloudOutlined, 
//   DatabaseOutlined,
//   CheckCircleOutlined,
//   DollarOutlined,
//   ClockCircleOutlined,
//   MessageOutlined,
//   ArrowLeftOutlined
// } from '@ant-design/icons';
// import { useNavigate } from 'react-router-dom';
// import './Freelance.css';

// const Freelance = () => {
//   const navigate = useNavigate();

//   const services = [
//     {
//       title: "Web Application Development",
//       icon: <CodeOutlined />,
//       description: "Custom web applications built with modern technologies like React, Node.js, and cloud services.",
//       features: ["Full-stack Development", "Responsive Design", "API Integration", "Performance Optimization"]
//     },
//     {
//       title: "Cloud Solutions",
//       icon: <CloudOutlined />,
//       description: "Cloud-native applications and migration services using GCP, AWS, and Azure.",
//       features: ["Cloud Architecture", "Serverless Functions", "Database Setup", "DevOps & CI/CD"]
//     },
    
//   ];

//   const processSteps = [
//     {
//       color: 'green',
//       children: (
//         <div>
//           <h4>Discovery & Planning</h4>
//           <p>We discuss your requirements, timeline, and budget</p>
//         </div>
//       ),
//     },
//     {
//       color: 'blue',
//       children: (
//         <div>
//           <h4>Proposal & Agreement</h4>
//           <p>I provide a detailed proposal and we sign the agreement</p>
//         </div>
//       ),
//     },
//     {
//       color: 'purple',
//       children: (
//         <div>
//           <h4>Development & Updates</h4>
//           <p>Regular development updates and progress reports</p>
//         </div>
//       ),
//     },
//     {
//       color: 'orange',
//       children: (
//         <div>
//           <h4>Testing & Delivery</h4>
//           <p>Thorough testing and final project delivery</p>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="freelance-page">
//       {/* Back Button */}
//       <div className="back-button-container">
//         <Button 
//           type="text" 
//           icon={<ArrowLeftOutlined />} 
//           onClick={() => navigate('/')}
//           className="back-button"
//         >
//           Back to Portfolio
//         </Button>
//       </div>

//       <div className="freelance-container">
//         {/* Hero Section */}
//         <section className="freelance-hero">
//           <div className="hero-content">
//             <RocketOutlined className="hero-icon" />
//             <h1>Freelance Services</h1>
//             <p className="hero-description">
//               Ready to bring your ideas to life? I offer professional web development 
//               services with a focus on quality, performance, and timely delivery.
//             </p>
//             <div className="hero-stats">
//               {/* <div className="stat">
//                 <CheckCircleOutlined />
//                 <span>10+ Projects Completed</span>
//               </div> */}
//               <div className="stat">
//                 <ClockCircleOutlined />
//                 <span>On-time Delivery</span>
//               </div>
//               <div className="stat">
//                 <DollarOutlined />
//                 <span>Competitive Pricing</span>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Services Section */}
//         <section className="services-section">
//           <h2 className="section-title">My Services</h2>
//           <Row gutter={[32, 32]} justify="center">
//             {services.map((service, index) => (
//               <Col xs={24} md={8} key={index}>
//                 <Card className="service-card" bordered={false}>
//                   <div className="service-icon">{service.icon}</div>
//                   <h3>{service.title}</h3>
//                   <p>{service.description}</p>
//                   <div className="service-features">
//                     {service.features.map((feature, idx) => (
//                       <Tag key={idx} className="feature-tag">
//                         {feature}
//                       </Tag>
//                     ))}
//                   </div>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </section>

//         {/* Process Section */}
//         <section className="process-section">
//           <h2 className="section-title">Working Process</h2>
//           <div className="process-content">
//             <Timeline items={processSteps} />
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="cta-section">
//           <Card className="cta-card" bordered={false}>
//             <h2>Ready to Start Your Project?</h2>
//             <p>Let's discuss your requirements and bring your vision to life</p>
//             <div className="cta-buttons">
//               <Button 
//                 type="primary" 
//                 size="large"
//                 href="mailto:bhuvaneshwarir2307@gmail.com"
//                 icon={<MessageOutlined />}
//                 className="cta-btn"
//               >
//                 Send Message
//               </Button>
//               <Button 
//                 size="large"
//                 onClick={() => navigate('/')}
//                 className="secondary-btn"
//               >
//                 Back to Portfolio
//               </Button>
//             </div>
//           </Card>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Freelance;
import React from 'react';
import { Card, Button, Row, Col, Tag, Timeline } from 'antd';
import { 
  RocketOutlined, 
  CodeOutlined, 
  CloudOutlined, 
  DatabaseOutlined,
  CheckCircleOutlined,
  DollarOutlined,
  ClockCircleOutlined,
  MessageOutlined,
  ArrowLeftOutlined,
  WhatsAppOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './Freelance.css';

const Freelance = () => {
  const navigate = useNavigate();

  // Your phone number (international format without +)
  const phoneNumber = '918940270152'; // +91 8940270152
  
  // Pre-filled WhatsApp message
  const whatsappMessage = `Hi Bhuvaneshwari! I'm interested in your freelance services. I'd like to discuss:`;
  
  // WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const services = [
    {
      title: "Web Application Development",
      icon: <CodeOutlined />,
      description: "Custom web applications built with modern technologies like React, Node.js, and cloud services.",
      features: ["Full-stack Development", "Responsive Design", "API Integration", "Performance Optimization"]
    },
    {
      title: "Cloud Solutions",
      icon: <CloudOutlined />,
      description: "Cloud-native applications and migration services using GCP, AWS, and Azure.",
      features: ["Cloud Architecture", "Serverless Functions", "Database Setup", "DevOps & CI/CD"]
    },
    
  ];

  const processSteps = [
    {
      color: 'green',
      children: (
        <div>
          <h4>Discovery & Planning</h4>
          <p>We discuss your requirements, timeline, and budget</p>
        </div>
      ),
    },
    {
      color: 'blue',
      children: (
        <div>
          <h4>Proposal & Agreement</h4>
          <p>I provide a detailed proposal and we sign the agreement</p>
        </div>
      ),
    },
    {
      color: 'purple',
      children: (
        <div>
          <h4>Development & Updates</h4>
          <p>Regular development updates and progress reports</p>
        </div>
      ),
    },
    {
      color: 'orange',
      children: (
        <div>
          <h4>Testing & Delivery</h4>
          <p>Thorough testing and final project delivery</p>
        </div>
      ),
    },
  ];

  return (
    <div className="freelance-page">
      {/* Back Button */}
      <div className="back-button-container">
        <Button 
          type="text" 
          icon={<ArrowLeftOutlined />} 
          onClick={() => navigate('/')}
          className="back-button"
        >
          Back to Portfolio
        </Button>
      </div>

      <div className="freelance-container">
        {/* Hero Section */}
        <section className="freelance-hero">
          <div className="hero-content">
            <RocketOutlined className="hero-icon" />
            <h1>Freelance Services</h1>
            <p className="hero-description">
              Ready to bring your ideas to life? I offer professional web development 
              services with a focus on quality, performance, and timely delivery.
            </p>
            
            {/* WhatsApp Quick Action */}
            {/* <div className="whatsapp-quick-action">
              <Button 
                type="primary" 
                size="large"
                href={whatsappUrl}
                target="_blank"
                icon={<WhatsAppOutlined />}
                className="whatsapp-btn"
              >
                Message me on WhatsApp
              </Button>
              <p className="quick-action-note">
                Quickest way to get in touch! Usually respond within 1-2 hours.
              </p>
            </div> */}
            
            <div className="hero-stats">
              {/* <div className="stat">
                <CheckCircleOutlined />
                <span>10+ Projects Completed</span>
              </div> */}
              <div className="stat">
                <ClockCircleOutlined />
                <span>On-time Delivery</span>
              </div>
              <div className="stat">
                <DollarOutlined />
                <span>Competitive Pricing</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section">
          <h2 className="section-title">My Services</h2>
          <Row gutter={[32, 32]} justify="center">
            {services.map((service, index) => (
              <Col xs={24} md={8} key={index}>
                <Card className="service-card" bordered={false}>
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-features">
                    {service.features.map((feature, idx) => (
                      <Tag key={idx} className="feature-tag">
                        {feature}
                      </Tag>
                    ))}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* Process Section */}
        <section className="process-section">
          <h2 className="section-title">Working Process</h2>
          <div className="process-content">
            <Timeline items={processSteps} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <Card className="cta-card" bordered={false}>
            <h2>Ready to Start Your Project?</h2>
            <p>Choose your preferred way to get in touch</p>
            <div className="cta-buttons">
              <Button 
                type="primary" 
                size="large"
                href={whatsappUrl}
                target="_blank"
                icon={<WhatsAppOutlined />}
                className="cta-btn email-cta"
              >
                WhatsApp Message
              </Button>
              {/* <Button 
                type="default"
                size="large"
                href="mailto:bhuvaneshwarir2307@gmail.com?subject=Freelance Project&body=Hi Bhuvaneshwari, I'd like to discuss a freelance project."
                icon={<MessageOutlined />}
                className="cta-btn email-cta"
              >
                Send Email
              </Button> */}
              <Button 
                size="large"
                onClick={() => navigate('/')}
                className="secondary-btn"
              >
                Back to Portfolio
              </Button>
            </div>
            
            {/* Contact Info */}
            <div className="contact-info-footer">
              <div className="contact-method">
                <WhatsAppOutlined />
                <span>+91 8940270152</span>
              </div>
              <div className="contact-method">
                <MessageOutlined />
                <span>bhuvaneshwarir2307@gmail.com</span>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Freelance;