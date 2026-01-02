import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validazione
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tutti i campi sono obbligatori' },
        { status: 400 }
      );
    }

    // Configura trasporto SMTP Hostinger
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 587,
      secure: false, // TLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Invia email
    await transporter.sendMail({
      from: `"Sito Web" <${process.env.SMTP_USER}>`,
      to: 'michelangelo@atomoprogetti.it',
      replyTo: email,
      subject: `[Sito Web] ${subject}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2a2a2a; border-bottom: 2px solid #2a2a2a; padding-bottom: 10px;">
            Nuovo messaggio dal sito web
          </h2>

          <div style="margin: 20px 0;">
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Oggetto:</strong> ${subject}</p>
          </div>

          <div style="background: #f5f3ef; padding: 20px; border-left: 4px solid #2a2a2a;">
            <p><strong>Messaggio:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>

          <p style="color: #737373; font-size: 12px; margin-top: 30px;">
            Questo messaggio è stato inviato dal form di contatto di michelangelo-bartolotta.com
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Email inviata con successo!' },
      { status: 200 }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('SMTP error:', errorMessage, error);
    return NextResponse.json(
      { error: `Errore SMTP: ${errorMessage}` },
      { status: 500 }
    );
  }
}
