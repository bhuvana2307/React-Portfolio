import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import { 
  HomeOutlined, 
  UserOutlined, 
  ToolOutlined, 
  ProjectOutlined, 
  ContactsOutlined,
  RocketOutlined 
} from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const { Header: AntHeader } = Layout;
const { Text } = Typography;

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      key: 'home',
      icon: <HomeOutlined />,
      label: 'Home',
    },
    {
      key: 'about',
      icon: <UserOutlined />,
      label: 'About',
    },
    {
      key: 'skills',
      icon: <ToolOutlined />,
      label: 'Skill Set',
    },
    {
      key: 'projects',
      icon: <ProjectOutlined />,
      label: 'Projects',
    },
    {
      key: 'contact',
      icon: <ContactsOutlined />,
      label: 'Contact',
    },
    {
      key: 'freelance',
      icon: <RocketOutlined />,
      label: 'Freelance',
    },
  ];

  const handleMenuClick = (e) => {
    if (e.key === 'freelance') {
      navigate('/freelance');
    } else if (e.key === 'home') {
      navigate('/');
      // Scroll to top when home is clicked
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // For other sections, scroll within the current page
      if (location.pathname === '/') {
        const sectionId = e.key === 'home' ? 'hero' : e.key;
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // If we're on freelance page, navigate to home and then scroll
        navigate('/');
        setTimeout(() => {
          const sectionId = e.key === 'home' ? 'hero' : e.key;
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === '/freelance') {
      navigate('/');
    } else {
      navigate('/');
      const element = document.getElementById('hero');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const getSelectedKeys = () => {
    if (location.pathname === '/freelance') {
      return ['freelance'];
    }
    // For home page, determine based on current scroll position
    return ['home']; // Default to home
  };

  return (
    <AntHeader className="portfolio-header">
      {/* Left Side - Bhuvi Logo */}
      <div className="header-logo" onClick={handleLogoClick}>
        <Text className="logo-text">Bhuvi</Text>
      </div>

      {/* Right Side - Navigation Menu */}
      <Menu
        mode="horizontal"
        selectedKeys={getSelectedKeys()}
        className="navigation-menu"
        items={menuItems}
        onClick={handleMenuClick}
      />
    </AntHeader>
  );
};

export default Header;