import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { 
      name, 
      email, 
      country, 
      phone, 
      adults, 
      kids, 
      infants, 
      arrivalDate, 
      departureDate, 
      message 
    } = data;

    // Create a transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER || 'latourstaxi@gmail.com',
      to: 'latourstaxi@gmail.com',
      replyTo: email,
      subject: `New Tour Inquiry from ${name} - LA Tours`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0a1628; border-bottom: 2px solid #adab3f; padding-bottom: 10px;">New Inquiry Received</h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <h3 style="color: #0a1628; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${country} ${phone}</p>
            <p><strong>Country:</strong> ${country}</p>
          </div>

          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <h3 style="color: #0a1628; margin-top: 0;">Tour Details</h3>
            <p><strong>Guests:</strong> ${adults} Adults, ${kids} Kids, ${infants} Infants</p>
            <p><strong>Arrival:</strong> ${arrivalDate || 'Not specified'}</p>
            <p><strong>Departure:</strong> ${departureDate || 'Not specified'}</p>
          </div>

          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <h3 style="color: #0a1628; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 30px; text-align: center;">
            Sent from LA Tours Website Contact Form
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
