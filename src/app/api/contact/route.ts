import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, email, subject, message } = await request.json();

    // Validazione
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tutti i campi sono obbligatori' },
        { status: 400 }
      );
    }

    // Invia email
    const { data, error } = await resend.emails.send({
      from: 'Sito Web <onboarding@resend.dev>',
      to: ['michelangelo@atomoprogetti.it'],
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

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Errore durante l\'invio dell\'email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Email inviata con successo!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Errore del server' },
      { status: 500 }
    );
  }
}
