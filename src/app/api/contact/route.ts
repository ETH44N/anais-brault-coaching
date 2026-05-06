import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { supabase } from '@/lib/supabase'

const MAX_NAME = 200
const MAX_EMAIL = 320
const MAX_TEXT = 5000
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 })
  }

  const name = String(body.name ?? '').trim()
  const email = String(body.email ?? '').trim()
  const idealLife = String(body.idealLife ?? '').trim()
  const currentSituation = String(body.currentSituation ?? '').trim()

  if (!name || !email || !idealLife || !currentSituation) {
    return NextResponse.json({ error: 'Tous les champs sont requis.' }, { status: 400 })
  }
  if (name.length > MAX_NAME || email.length > MAX_EMAIL) {
    return NextResponse.json({ error: 'Nom ou email trop long.' }, { status: 400 })
  }
  if (idealLife.length > MAX_TEXT || currentSituation.length > MAX_TEXT) {
    return NextResponse.json({ error: 'Réponses trop longues.' }, { status: 400 })
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Email invalide.' }, { status: 400 })
  }

  const { error: dbError } = await supabase
    .from('anais_form_submissions')
    .insert({
      name,
      email,
      ideal_life: idealLife,
      current_situation: currentSituation,
    })

  if (dbError) {
    console.error('Supabase insert failed:', dbError)
    return NextResponse.json({ error: 'Erreur d’enregistrement.' }, { status: 500 })
  }

  const resendKey = process.env.RESEND_API_KEY
  if (resendKey) {
    try {
      const resend = new Resend(resendKey)
      await resend.emails.send({
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
                  <td style="padding: 8px 0; font-weight: 600;">${escapeHtml(name)}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b749e; vertical-align: top;">Email</td>
                  <td style="padding: 8px 0;">
                    <a href="mailto:${escapeHtml(email)}" style="color: #b8944f; text-decoration: none;">${escapeHtml(email)}</a>
                  </td>
                </tr>
              </table>
              <hr style="border: none; border-top: 1px solid #e8dfd0; margin: 24px 0;" />
              <h2 style="font-size: 16px; color: #b8944f; margin-bottom: 8px;">Question 1 — Vie idéale</h2>
              <p style="font-size: 14px; color: #6b749e; margin-top: 0; margin-bottom: 4px;">Décris-moi ta vie idéale. Si tu avais une baguette magique, qu'est-ce que tu changerais dans ta vie ?</p>
              <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid #e8dfd0; white-space: pre-wrap; line-height: 1.6;">${escapeHtml(idealLife)}</div>
              <h2 style="font-size: 16px; color: #b8944f; margin-top: 24px; margin-bottom: 8px;">Question 2 — Situation actuelle</h2>
              <p style="font-size: 14px; color: #6b749e; margin-top: 0; margin-bottom: 4px;">Où est-ce que tu en es maintenant dans ta vie par rapport à ces objectifs ?</p>
              <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid #e8dfd0; white-space: pre-wrap; line-height: 1.6;">${escapeHtml(currentSituation)}</div>
              <hr style="border: none; border-top: 1px solid #e8dfd0; margin: 24px 0;" />
              <p style="font-size: 12px; color: #8d96b4;">Tu peux répondre directement à cet email pour contacter ${escapeHtml(name)} à ${escapeHtml(email)}.</p>
            </div>
          </div>
        `,
      })
    } catch (e) {
      // Submission is already in Supabase — email is best-effort.
      console.error('Resend email failed (non-fatal):', e)
    }
  }

  return NextResponse.json({ success: true })
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
