import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle OPTIONS request for CORS
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { name, email, company, position, message } = req.body;

  // Validation
  if (!name || !email || !position || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please fill all required fields'
    });
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: {
      name: `Portfolio Contact - ${name}`,
      address: process.env.EMAIL_USER
    },
    replyTo: email,
    to: process.env.EMAIL_USER,
    subject: `Job Invite: ${position} - ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1>🎯 New Job Invite Received!</h1>
          <p>From your portfolio website</p>
        </div>
        <div style="padding: 30px; background: #f8f9fa; border-radius: 0 0 10px 10px;">
          <div style="margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px; border-left: 4px solid #1890ff;">
            <strong style="color: #1890ff;">👤 Name:</strong> ${name}
          </div>
          <div style="margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px; border-left: 4px solid #1890ff;">
            <strong style="color: #1890ff;">📧 Email:</strong> ${email}
          </div>
          <div style="margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px; border-left: 4px solid #1890ff;">
            <strong style="color: #1890ff;">🏢 Company:</strong> ${company || 'Not specified'}
          </div>
          <div style="margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px; border-left: 4px solid #1890ff;">
            <strong style="color: #1890ff;">💼 Position:</strong> ${position}
          </div>
          <div style="margin-top: 20px; padding: 15px; background: white; border-radius: 5px; border: 1px solid #e8e8e8;">
            <strong style="color: #1890ff;">💬 Message:</strong><br>
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    
    console.log('✅ Email sent successfully');
    
    return res.status(200).json({
      success: true,
      message: 'Job invite sent successfully! I will get back to you soon.'
    });
    
  } catch (error) {
    console.error('❌ Email error:', error);
    
    return res.status(500).json({
      success: false,
      message: 'Failed to send job invite. Please try again later.'
    });
  }
}