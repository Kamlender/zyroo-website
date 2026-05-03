import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { serviceName, servicePrice, deliveryDays, name, phone, email, details } = body;

    // Validate required fields
    if (!name || !phone || !details || !serviceName) {
      return NextResponse.json(
        { error: 'Required fields are missing.' },
        { status: 400 }
      );
    }

    // Create transporter using SMTP credentials from env
    const smtpPort = Number(process.env.SMTP_PORT) || 587;
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const recipientEmail = process.env.ORDER_RECIPIENT_EMAIL || 'jha@tinytoono.in';

    // Build a clean HTML email
    const htmlContent = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a1a; color: #e0e0e0; border-radius: 12px; overflow: hidden;">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #8b5cf6, #06b6d4); padding: 28px 32px;">
          <h1 style="margin: 0; font-size: 22px; color: #fff;">🛒 New Order — ZYROO Web Design</h1>
        </div>
        
        <!-- Body -->
        <div style="padding: 28px 32px;">
          
          <!-- Service Info -->
          <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
            <h2 style="margin: 0 0 12px 0; font-size: 18px; color: #a78bfa;">📦 Service Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 6px 0; color: #9ca3af;">Service:</td>
                <td style="padding: 6px 0; font-weight: 600; color: #fff;">${serviceName}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #9ca3af;">Price:</td>
                <td style="padding: 6px 0; font-weight: 600; color: #10b981;">${servicePrice}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #9ca3af;">Delivery:</td>
                <td style="padding: 6px 0; font-weight: 600; color: #fff;">${deliveryDays} days</td>
              </tr>
            </table>
          </div>
          
          <!-- Customer Info -->
          <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
            <h2 style="margin: 0 0 12px 0; font-size: 18px; color: #a78bfa;">👤 Customer Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 6px 0; color: #9ca3af;">Name:</td>
                <td style="padding: 6px 0; font-weight: 600; color: #fff;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #9ca3af;">Phone:</td>
                <td style="padding: 6px 0; font-weight: 600; color: #fff;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #9ca3af;">Email:</td>
                <td style="padding: 6px 0; font-weight: 600; color: #fff;">${email || 'Not provided'}</td>
              </tr>
            </table>
          </div>
          
          <!-- Project Details -->
          <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 20px;">
            <h2 style="margin: 0 0 12px 0; font-size: 18px; color: #a78bfa;">📝 Project Details</h2>
            <p style="margin: 0; line-height: 1.7; color: #d1d5db;">${details.replace(/\n/g, '<br/>')}</p>
          </div>
          
        </div>
        
        <!-- Footer -->
        <div style="padding: 16px 32px; border-top: 1px solid rgba(255,255,255,0.1); text-align: center;">
          <p style="margin: 0; font-size: 12px; color: #6b7280;">Sent from ZYROO Website • ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
        </div>
      </div>
    `;

    // Send email
    await transporter.sendMail({
      from: `"ZYROO Website" <${process.env.SMTP_USER}>`,
      to: recipientEmail,
      subject: `🛒 New Order: ${serviceName} — from ${name}`,
      html: htmlContent,
      replyTo: email || undefined,
    });

    return NextResponse.json({ success: true, message: 'Order sent successfully!' });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: 'Failed to send order. Please try again.' },
      { status: 500 }
    );
  }
}
