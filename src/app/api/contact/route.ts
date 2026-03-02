import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  console.log('=== CONTACT FORM SUBMISSION ===')
  console.log('API Key present:', !!apiKey)
  console.log('API Key starts with:', apiKey?.substring(0, 6))

  if (!apiKey) {
    console.error('RESEND_API_KEY is missing from environment')
    return NextResponse.json(
      { error: 'Configuration serveur manquante.' },
      { status: 500 }
    )
  }

  const resend = new Resend(apiKey)

  try {
    const body = await request.json()
    console.log('Received body:', JSON.stringify(body, null, 2))

    const { name, email, idealLife, currentSituation } = body

    if (!name || !email || !idealLife || !currentSituation) {
      console.error('Missing fields:', { name: !!name, email: !!email, idealLife: !!idealLife, currentSituation: !!currentSituation })
      return NextResponse.json(
        { error: 'Tous les champs sont requis.' },
        { status: 400 }
      )
    }

    console.log('Sending email via Resend...')
    console.log('From: team@etnbusiness.com')
    console.log('To: contact@anaisbrault.fr')
    console.log('ReplyTo:', email)

    const { data, error } = await resend.emails.send({
      from: 'Formulaire Anaïs Brault <team@etnbusiness.com>',
      to: 'anaisbrault86@gmail.com',
      replyTo: email,
      subject: `Nouveau formulaire de ${name}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e2340;">
          <div style="padding: 32px; background: #faf9f6; border-radius: 12px;">
            <h1 style="font-size: 24px; margin-bottom: 4px;">Nouveau formulaire reçu</h1>
            <p style="color: #6b749e; margin-top: 0;">Via anaisbrault.fr</p>

            <hr style="border: none; border-top: 1px solid #e8dfd0; margin: 24px 0;" />

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b749e; width: 100px; vertical-align: top;">Prénom</td>
                <td style="padding: 8px 0; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b749e; vertical-align: top;">Email</td>
                <td style="padding: 8px 0;">
                  <a href="mailto:${email}" style="color: #b8944f; text-decoration: none;">${email}</a>
                </td>
              </tr>
            </table>

            <hr style="border: none; border-top: 1px solid #e8dfd0; margin: 24px 0;" />

            <h2 style="font-size: 16px; color: #b8944f; margin-bottom: 8px;">
              Question 1 — Vie idéale
            </h2>
            <p style="font-size: 14px; color: #6b749e; margin-top: 0; margin-bottom: 4px;">
              Décris-moi ta vie idéale. Si tu avais une baguette magique, qu'est-ce que tu changerais dans ta vie ?
            </p>
            <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid #e8dfd0; white-space: pre-wrap; line-height: 1.6;">
${idealLife}
            </div>

            <h2 style="font-size: 16px; color: #b8944f; margin-top: 24px; margin-bottom: 8px;">
              Question 2 — Situation actuelle
            </h2>
            <p style="font-size: 14px; color: #6b749e; margin-top: 0; margin-bottom: 4px;">
              Où est-ce que tu en es maintenant dans ta vie par rapport à ces objectifs ?
            </p>
            <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid #e8dfd0; white-space: pre-wrap; line-height: 1.6;">
${currentSituation}
            </div>

            <hr style="border: none; border-top: 1px solid #e8dfd0; margin: 24px 0;" />

            <p style="font-size: 12px; color: #8d96b4;">
              Tu peux répondre directement à cet email pour contacter ${name} à ${email}.
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend API error:', JSON.stringify(error, null, 2))
      return NextResponse.json(
        { error: `Erreur Resend: ${error.message}` },
        { status: 500 }
      )
    }

    console.log('Email sent successfully! ID:', data?.id)
    return NextResponse.json({ success: true, id: data?.id })
  } catch (err: any) {
    console.error('Unexpected error:', err.message, err.stack)
    return NextResponse.json(
      { error: `Erreur serveur: ${err.message}` },
      { status: 500 }
    )
  }
}
