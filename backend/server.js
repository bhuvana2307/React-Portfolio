// const express = require('express');
// const nodemailer = require('nodemailer');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors({
//   origin: process.env.CLIENT_URL || 'http://localhost:3000',
//   credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Create transporter for Gmail
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS
//   }
// });

// // Verify transporter configuration
// transporter.verify((error, success) => {
//   if (error) {
//     console.log('❌ Error with email configuration:', error);
//   } else {
//     console.log('✅ Email server is ready to send messages');
//   }
// });

// // Job Invite Email Route
// app.post('/api/send-job-invite', async (req, res) => {
//   const { name, email, company, position, message } = req.body;

//   // Validation
//   if (!name || !email || !position || !message) {
//     return res.status(400).json({
//       success: false,
//       message: 'Please fill all required fields'
//     });
//   }

//   const mailOptions = {
//     from: {
//       name: `${name} (Portfolio Contact)`,
//       address: process.env.EMAIL_USER
//     },
//     replyTo: email, // This makes replies go to the visitor
//     to: process.env.EMAIL_USER,
//     subject: `Job Invite: ${position} - ${name}`,
//     html: `
//       <!DOCTYPE html>
//       <html>
//       <head>
//         <style>
//           body { 
//             font-family: 'Arial', sans-serif; 
//             line-height: 1.6; 
//             color: #333; 
//             max-width: 600px; 
//             margin: 0 auto; 
//             padding: 20px;
//           }
//           .header { 
//             background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//             color: white; 
//             padding: 30px; 
//             text-align: center; 
//             border-radius: 10px 10px 0 0;
//           }
//           .content { 
//             padding: 30px; 
//             background: #f8f9fa; 
//             border-radius: 0 0 10px 10px;
//           }
//           .field { 
//             margin-bottom: 15px; 
//             padding: 10px;
//             background: white;
//             border-radius: 5px;
//             border-left: 4px solid #1890ff;
//           }
//           .label { 
//             font-weight: bold; 
//             color: #1890ff; 
//             display: block;
//             margin-bottom: 5px;
//           }
//           .message-box {
//             background: white;
//             padding: 15px;
//             border-radius: 5px;
//             border: 1px solid #e8e8e8;
//             margin-top: 10px;
//           }
//           .footer {
//             text-align: center;
//             margin-top: 20px;
//             padding: 20px;
//             color: #666;
//             border-top: 1px solid #e8e8e8;
//           }
//         </style>
//       </head>
//       <body>
//         <div class="header">
//           <h1>🎯 New Job Invite Received!</h1>
//           <p>From your portfolio website</p>
//         </div>
        
//         <div class="content">
//           <div class="field">
//             <span class="label">👤 Name:</span>
//             <span>${name}</span>
//           </div>
          
//           <div class="field">
//             <span class="label">📧 Email:</span>
//             <span>${email}</span>
//           </div>
          
//           <div class="field">
//             <span class="label">🏢 Company:</span>
//             <span>${company || 'Not specified'}</span>
//           </div>
          
//           <div class="field">
//             <span class="label">💼 Position:</span>
//             <span>${position}</span>
//           </div>
          
//           <div style="margin-top: 20px;">
//             <span class="label">💬 Message:</span>
//             <div class="message-box">
//               ${message.replace(/\n/g, '<br>')}
//             </div>
//           </div>
//         </div>
        
//         <div class="footer">
//           <p><em>This message was sent from your portfolio contact form.</em></p>
//           <p>💡 <strong>Tip:</strong> Click "Reply" to respond directly to ${name}</p>
//         </div>
//       </body>
//       </html>
//     `,
//     text: `
// New Job Invite Received!

// Name: ${name}
// Email: ${email}
// Company: ${company || 'Not specified'}
// Position: ${position}

// Message:
// ${message}

// ---
// This message was sent from your portfolio website.
// Tip: Reply to this email to respond directly to ${name}
//     `.trim()
//   };

//   try {
//     await transporter.sendMail(mailOptions);
    
//     console.log('✅ Job invite email sent successfully:', { name, email, position });
    
//     res.status(200).json({
//       success: true,
//       message: 'Job invite sent successfully! I will get back to you soon.'
//     });
    
//   } catch (error) {
//     console.error('❌ Error sending email:', error);
    
//     res.status(500).json({
//       success: false,
//       message: 'Failed to send job invite. Please try again later or email me directly at bhuvaneshwarir2307@gmail.com'
//     });
//   }
// });

// // Test route
// app.get('/api/health', (req, res) => {
//   res.json({ 
//     success: true, 
//     message: 'Portfolio backend is running!',
//     timestamp: new Date().toISOString()
//   });
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`🚀 Portfolio backend server running on port ${PORT}`);
//   console.log(`📧 Email configured for: ${process.env.EMAIL_USER}`);
//   console.log(`🌐 CORS enabled for: ${process.env.CLIENT_URL}`);
// });










// // Freelance Inquiry Email Route
// app.post('/api/send-freelance-inquiry', async (req, res) => {
//   const { name, email, projectType, budget, timeline, message } = req.body;

//   // Validation
//   if (!name || !email || !projectType || !message) {
//     return res.status(400).json({
//       success: false,
//       message: 'Please fill all required fields'
//     });
//   }

//   const mailOptions = {
//     from: {
//       name: `Freelance Inquiry - ${name}`,
//       address: process.env.EMAIL_USER
//     },
//     replyTo: email,
//     to: process.env.EMAIL_USER,
//     subject: `Freelance Inquiry: ${projectType} - ${name}`,
//     html: `
//       <!DOCTYPE html>
//       <html>
//       <head>
//         <style>
//           body { 
//             font-family: 'Arial', sans-serif; 
//             line-height: 1.6; 
//             color: #333; 
//             max-width: 600px; 
//             margin: 0 auto; 
//             padding: 20px;
//           }
//           .header { 
//             background: linear-gradient(135deg, #52c41a 0%, #73d13d 100%);
//             color: white; 
//             padding: 30px; 
//             text-align: center; 
//             border-radius: 10px 10px 0 0;
//           }
//           .content { 
//             padding: 30px; 
//             background: #f8f9fa; 
//             border-radius: 0 0 10px 10px;
//           }
//           .field { 
//             margin-bottom: 15px; 
//             padding: 10px;
//             background: white;
//             border-radius: 5px;
//             border-left: 4px solid #52c41a;
//           }
//           .label { 
//             font-weight: bold; 
//             color: #52c41a; 
//             display: block;
//             margin-bottom: 5px;
//           }
//           .message-box {
//             background: white;
//             padding: 15px;
//             border-radius: 5px;
//             border: 1px solid #e8e8e8;
//             margin-top: 10px;
//           }
//           .footer {
//             text-align: center;
//             margin-top: 20px;
//             padding: 20px;
//             color: #666;
//             border-top: 1px solid #e8e8e8;
//           }
//           .highlight {
//             background: #f6ffed;
//             padding: 15px;
//             border-radius: 5px;
//             border-left: 4px solid #52c41a;
//             margin: 15px 0;
//           }
//         </style>
//       </head>
//       <body>
//         <div class="header">
//           <h1>🚀 New Freelance Project Inquiry!</h1>
//           <p>From your freelance services page</p>
//         </div>
        
//         <div class="content">
//           <div class="highlight">
//             <strong>💡 IMPORTANT:</strong> Click "Reply" to respond directly to <strong>${name}</strong> at <strong>${email}</strong>
//           </div>
          
//           <div class="field">
//             <span class="label">👤 Name:</span>
//             <span>${name}</span>
//           </div>
          
//           <div class="field">
//             <span class="label">📧 Email:</span>
//             <span><a href="mailto:${email}">${email}</a></span>
//           </div>
          
//           <div class="field">
//             <span class="label">🛠️ Project Type:</span>
//             <span>${projectType}</span>
//           </div>
          
//           <div class="field">
//             <span class="label">💰 Budget:</span>
//             <span>${budget || 'Not specified'}</span>
//           </div>
          
//           <div class="field">
//             <span class="label">⏰ Timeline:</span>
//             <span>${timeline || 'Not specified'}</span>
//           </div>
          
//           <div style="margin-top: 20px;">
//             <span class="label">💬 Project Details:</span>
//             <div class="message-box">
//               ${message.replace(/\n/g, '<br>')}
//             </div>
//           </div>
//         </div>
        
//         <div class="footer">
//           <p><em>This message was sent from your freelance services page.</em></p>
//           <p><strong>Reply to:</strong> ${name} &lt;${email}&gt;</p>
//         </div>
//       </body>
//       </html>
//     `,
//     text: `
// NEW FREELANCE PROJECT INQUIRY!

// IMPORTANT: Click "Reply" to respond directly to ${name} at ${email}

// Name: ${name}
// Email: ${email}
// Project Type: ${projectType}
// Budget: ${budget || 'Not specified'}
// Timeline: ${timeline || 'Not specified'}

// Project Details:
// ${message}

// ---
// This message was sent from your freelance services page.
// REPLY TO: ${name} <${email}>
//     `.trim()
//   };

//   try {
//     await transporter.sendMail(mailOptions);
    
//     console.log('✅ Freelance inquiry email sent successfully:', { name, email, projectType });
    
//     res.status(200).json({
//       success: true,
//       message: 'Your project inquiry has been sent successfully! I will get back to you soon to discuss your project.'
//     });
    
//   } catch (error) {
//     console.error('❌ Error sending freelance inquiry email:', error);
    
//     res.status(500).json({
//       success: false,
//       message: 'Failed to send your inquiry. Please try again later or email me directly at bhuvaneshwarir2307@gmail.com'
//     });
//   }
// });

// ---------------------------------------------------------
// const express = require('express');
// const nodemailer = require('nodemailer');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors({
//   origin: process.env.CLIENT_URL || 'http://localhost:3000',
//   credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // ✅ FIXED: Updated transporter configuration for Render
// const transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com', // Explicit host
//   port: 587, // Use port 587 (not 465)
//   secure: false, // true for 465, false for other ports
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS
//   },
//   tls: {
//     rejectUnauthorized: false // Important for Render
//   },
//   connectionTimeout: 60000, // 60 seconds timeout
//   greetingTimeout: 30000,
//   socketTimeout: 60000
// });

// // Verify transporter configuration
// transporter.verify((error, success) => {
//   if (error) {
//     console.log('❌ Error with email configuration:', error);
//   } else {
//     console.log('✅ Email server is ready to send messages');
//     console.log('📧 Using Gmail SMTP on port 587');
//   }
// });

// // Job Invite Email Route
// app.post('/api/send-job-invite', async (req, res) => {
//   const { name, email, company, position, message } = req.body;

//   // Validation
//   if (!name || !email || !position || !message) {
//     return res.status(400).json({
//       success: false,
//       message: 'Please fill all required fields'
//     });
//   }

//   const mailOptions = {
//     from: {
//       name: `Portfolio Contact - ${name}`,
//       address: process.env.EMAIL_USER
//     },
//     replyTo: email,
//     to: process.env.EMAIL_USER,
//     subject: `Job Invite: ${position} - ${name}`,
//     html: `
//       <!DOCTYPE html>
//       <html>
//       <head>
//         <style>
//           body { 
//             font-family: 'Arial', sans-serif; 
//             line-height: 1.6; 
//             color: #333; 
//             max-width: 600px; 
//             margin: 0 auto; 
//             padding: 20px;
//           }
//           .header { 
//             background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//             color: white; 
//             padding: 30px; 
//             text-align: center; 
//             border-radius: 10px 10px 0 0;
//           }
//           .content { 
//             padding: 30px; 
//             background: #f8f9fa; 
//             border-radius: 0 0 10px 10px;
//           }
//           .field { 
//             margin-bottom: 15px; 
//             padding: 10px;
//             background: white;
//             border-radius: 5px;
//             border-left: 4px solid #1890ff;
//           }
//           .label { 
//             font-weight: bold; 
//             color: #1890ff; 
//             display: block;
//             margin-bottom: 5px;
//           }
//           .message-box {
//             background: white;
//             padding: 15px;
//             border-radius: 5px;
//             border: 1px solid #e8e8e8;
//             margin-top: 10px;
//           }
//         </style>
//       </head>
//       <body>
//         <div class="header">
//           <h1>🎯 New Job Invite Received!</h1>
//           <p>From your portfolio website</p>
//         </div>
        
//         <div class="content">
//           <div class="field">
//             <span class="label">👤 Name:</span>
//             <span>${name}</span>
//           </div>
          
//           <div class="field">
//             <span class="label">📧 Email:</span>
//             <span>${email}</span>
//           </div>
          
//           <div class="field">
//             <span class="label">🏢 Company:</span>
//             <span>${company || 'Not specified'}</span>
//           </div>
          
//           <div class="field">
//             <span class="label">💼 Position:</span>
//             <span>${position}</span>
//           </div>
          
//           <div style="margin-top: 20px;">
//             <span class="label">💬 Message:</span>
//             <div class="message-box">
//               ${message.replace(/\n/g, '<br>')}
//             </div>
//           </div>
//         </div>
//       </body>
//       </html>
//     `
//   };

//   try {
//     await transporter.sendMail(mailOptions);
    
//     console.log('✅ Job invite email sent successfully');
    
//     res.status(200).json({
//       success: true,
//       message: 'Job invite sent successfully! I will get back to you soon.'
//     });
    
//   } catch (error) {
//     console.error('❌ Error sending email:', error);
    
//     res.status(500).json({
//       success: false,
//       message: 'Failed to send job invite. Please try again later or email me directly at bhuvaneshwarir2307@gmail.com'
//     });
//   }
// });

// // Health check route
// app.get('/api/health', (req, res) => {
//   res.json({ 
//     success: true, 
//     message: 'Portfolio backend is running!',
//     timestamp: new Date().toISOString()
//   });
// });

// app.listen(PORT, () => {
//   console.log(`🚀 Portfolio backend server running on port ${PORT}`);
// });


//-----------------------------------------
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Log all requests
app.use((req, res, next) => {
  console.log(`📨 ${req.method} ${req.path}`, {
    headers: req.headers,
    body: req.body
  });
  next();
});

// ✅ IMPROVED: Better transporter configuration with debugging
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  },
  debug: true, // Enable debugging
  logger: true // Enable logging
});

// Test email configuration on startup
console.log('🔧 Testing email configuration...');
console.log('📧 Email User:', process.env.EMAIL_USER ? '✅ Set' : '❌ Missing');
console.log('🔑 Email Pass:', process.env.EMAIL_PASS ? '✅ Set' : '❌ Missing');

transporter.verify((error, success) => {
  if (error) {
    console.log('❌ Email configuration ERROR:', error);
  } else {
    console.log('✅ Email server is ready to send messages');
  }
});

// Job Invite Email Route
app.post('/api/send-email', async (req, res) => {
  console.log('🎯 Job invite request received:', req.body);
  
  const { name, email, company, position, message } = req.body;

  // Validation
  if (!name || !email || !position || !message) {
    console.log('❌ Validation failed - missing fields');
    return res.status(400).json({
      success: false,
      message: 'Please fill all required fields'
    });
  }

  const mailOptions = {
    from: {
      name: `Portfolio Contact - ${name}`,
      address: process.env.EMAIL_USER
    },
    replyTo: email,
    to: process.env.EMAIL_USER,
    subject: `Job Invite: ${position} - ${name}`,
    html: `
      <div>
        <h2>🎯 New Job Invite Received!</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not specified'}</p>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Message:</strong> ${message}</p>
      </div>
    `
  };

  try {
    console.log('📧 Attempting to send email with options:', {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject
    });

    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', result);
    
    res.status(200).json({
      success: true,
      message: 'Job invite sent successfully! I will get back to you soon.'
    });
    
  } catch (error) {
    console.error('❌ EMAIL SEND ERROR DETAILS:');
    console.error('Error name:', error.name);
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    console.error('Full error:', error);
    
    res.status(500).json({
      success: false,
      message: 'Failed to send job invite. Please try again later.'
    });
  }
});

// Health check route
app.get('/api/health', (req, res) => {
  console.log('🏥 Health check received');
  res.json({ 
    success: true, 
    message: 'Portfolio backend is running!',
    emailConfigured: !!process.env.EMAIL_USER
  });
});

// Root route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Portfolio Backend API is running!',
    endpoints: {
      health: '/api/health',
      sendEmail: '/api/send-job-invite (POST)'
    }
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('🚨 Unhandled error:', error);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Portfolio backend server running on port ${PORT}`);
  console.log(`🌐 Backend URL: https://react-portfolio-backend-54qu.onrender.com`);
  console.log(`📧 Email user configured: ${!!process.env.EMAIL_USER}`);
});