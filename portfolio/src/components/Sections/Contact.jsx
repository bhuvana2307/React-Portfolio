import React, { useState } from 'react';
import { Card, Button, Form, Input, message, Row, Col } from 'antd';
import { MailOutlined, UserOutlined, MessageOutlined, RocketOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './Contact.css';
import emailjs from '@emailjs/browser';

const { TextArea } = Input; // Add this line to define TextArea

const Contact = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    console.log('Environment variables:', {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    allEnv: import.meta.env
  });
    
    try {
      // Replace these with your actual EmailJS keys
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,     // From EmailJS → Email Templates
        {
          from_name: values.name,
          from_email: values.email,
          company: values.company || 'Not specified',
          position: values.position,
          message: values.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY       // From EmailJS → API Keys
      );

      if (result.text === 'OK') {
        message.success('Job invite sent successfully! I will get back to you soon.');
        form.resetFields();
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      message.error('Failed to send job invite. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const openFreelancePage = () => {
    navigate('/freelance');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h1 className="section-title">Get In Touch</h1>
        
        <Row gutter={[48, 32]} className="contact-content">
          {/* Left Side - Contact Info & Freelance */}
          <Col xs={24} lg={12}>
            {/* Contact Information */}
            <Card className="contact-info-card" bordered={false}>
              <h2 className="contact-subtitle">Let's Work Together</h2>
              <p className="contact-description">
                I'm always interested in new opportunities and challenging projects. 
                Whether you have a job opportunity or need help with your project, 
                I'd love to hear from you.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <MailOutlined className="contact-icon" />
                  <div>
                    <p>bhuvaneshwarir2307@gmail.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <PhoneOutlined className="contact-icon" />
                  <div>
                    <p>+91 8940270152</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <EnvironmentOutlined className="contact-icon" />
                  <div>
                    <p>Tamil Nadu,India</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Freelance Services */}
            <Card className="freelance-card" bordered={false}>
              <div className="freelance-content">
                <RocketOutlined className="freelance-icon" />
                <h3>Freelance Services</h3>
                <p>
                  Need a custom web application, website, or technical solution? 
                  I'm available for freelance projects and can help bring your ideas to life.
                </p>
                <Button 
                  type="primary" 
                  size="large"
                  onClick={openFreelancePage}
                  className="freelance-btn"
                >
                  View Freelance Services
                </Button>
              </div>
            </Card>
          </Col>

          {/* Right Side - Job Invite Form */}
          <Col xs={24} lg={12}>
            <Card className="job-invite-card" bordered={false}>
              <h2 className="form-title">Send Job Invite</h2>
              <p className="form-description">
                Fill out the form below and I'll receive your job invite directly. 
                Your information will only be used to respond to your inquiry.
              </p>
              
              <Form
                form={form}
                name="jobInvite"
                onFinish={onFinish}
                layout="vertical"
                className="job-invite-form"
                disabled={loading}
              >
                <Form.Item
                  name="name"
                  label="Your Name"
                  rules={[{ required: true, message: 'Please enter your name' }]}
                >
                  <Input 
                    prefix={<UserOutlined />} 
                    placeholder="Enter your full name"
                    size="large"
                    disabled={loading}
                  />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="Email Address"
                  rules={[
                    { required: true, message: 'Please enter your email' },
                    { type: 'email', message: 'Please enter a valid email' }
                  ]}
                >
                  <Input 
                    prefix={<MailOutlined />} 
                    placeholder="Enter your email address"
                    size="large"
                    disabled={loading}
                  />
                </Form.Item>

                <Form.Item
                  name="company"
                  label="Company (Optional)"
                >
                  <Input 
                    placeholder="Your company name"
                    size="large"
                    disabled={loading}
                  />
                </Form.Item>

                <Form.Item
                  name="position"
                  label="Position"
                  rules={[{ required: true, message: 'Please enter the position' }]}
                >
                  <Input 
                    placeholder="e.g., Full Stack Developer, Frontend Engineer"
                    size="large"
                    disabled={loading}
                  />
                </Form.Item>

                <Form.Item
                  name="message"
                  label="Message"
                  rules={[{ required: true, message: 'Please enter your message' }]}
                >
                  <TextArea
                    placeholder="Tell me about the opportunity, project details, timeline, etc."
                    rows={5}
                    size="large"
                    disabled={loading}
                  />
                </Form.Item>

                <Form.Item>
                  <Button 
                    type="primary" 
                    htmlType="submit" 
                    size="large"
                    loading={loading}
                    className="submit-btn"
                    icon={<MessageOutlined />}
                  >
                    {loading ? 'Sending...' : 'Send Job Invite'}
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Contact;