import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { getSupabase } from '@/lib/supabase'
import { sendErrorAlert } from '@/lib/alert'

const MAX_NAME = 200
const MAX_WHATSAPP = 320
const MAX_TEXT = 5000
const MAX_LINK = 500

export async function POST(request: Request) {
  try {
    return await handlePost(request)
  } catch (e) {
    console.error('Unexpected /api/contact failure:', e)
    await sendErrorAlert('/api/contact (uncaught)', e)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}

async function handlePost(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 })
  }

  const name = String(body.name ?? '').trim()
  const whatsapp = String(body.whatsapp ?? '').trim()
  const socialLink = String(body.socialLink ?? '').trim()
  const idealLife = String(body.idealLife ?? '').trim()
  const currentSituation = String(body.currentSituation ?? '').trim()
  const obstacle = String(body.obstacle ?? '').trim()
  const revenue = String(body.revenue ?? '').trim()
  const meditationScale = String(body.meditationScale ?? '').trim()

  if (!name || !whatsapp || !idealLife || !currentSituation || !obstacle || !revenue || !meditationScale) {
    return NextResponse.json({ error: 'Tous les champs sont requis.' }, { status: 400 })
  }
  if (name.length > MAX_NAME || whatsapp.length > MAX_WHATSAPP) {
    return NextResponse.json({ error: 'Nom ou WhatsApp trop long.' }, { status: 400 })
  }
  if (socialLink.length > MAX_LINK) {
    return NextResponse.json({ error: 'Lien trop long.' }, { status: 400 })
  }
  if (
    idealLife.length > MAX_TEXT ||
    currentSituation.length > MAX_TEXT ||
    obstacle.length > MAX_TEXT ||
    revenue.length > MAX_TEXT
  ) {
    return NextResponse.json({ error: 'Réponses trop longues.' }, { status: 400 })
  }

  const { error: dbError } = await getSupabase()
    .from('anais_form_submissions')
    .insert({
      name,
      whatsapp,
      social_link: socialLink || null,
      ideal_life: idealLife,
      current_situation: currentSituation,
      obstacle,
      revenue,
      meditation_scale: meditationScale,
    })

  if (dbError) {
    console.error('Supabase insert failed:', dbError)
    await sendErrorAlert('/api/contact (insert)', dbError, {
      name,
      whatsapp,
      hasSocialLink: Boolean(socialLink),
    })
    return NextResponse.json({ error: 'Erreur d’enregistrement.' }, { status: 500 })
  }

  const resendKey = process.env.RESEND_API_KEY
  if (resendKey) {
    try {
      const resend = new Resend(resendKey)
      await resend.emails.send({
        from: 'Formulaire Anaïs Brault <team@etnbusiness.com>',
        to: 'anaisbrault86@gmail.com',
        subject: `Nouveau formulaire de ${name}`,
        html: `
          <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e2340;">
            <div style="padding: 32px; background: #faf9f6; border-radius: 12px;">
              <h1 style="font-size: 24px; margin-bottom: 4px;">Nouveau formulaire reçu</h1>
              <p style="color: #6b749e; margin-top: 0;">Via anaisbrault.fr</p>
              <hr style="border: none; border-top: 1px solid #e8dfd0; margin: 24px 0;" />
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #6b749e; width: 140px; vertical-align: top;">Prénom</td>
                  <td style="padding: 8px 0; font-weight: 600;">${escapeHtml(name)}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b749e; vertical-align: top;">WhatsApp</td>
                  <td style="padding: 8px 0;">
                    <a href="https://wa.me/${encodeURIComponent(whatsappDigits(whatsapp))}" style="color: #b8944f; text-decoration: none;">${escapeHtml(whatsapp)}</a>
                  </td>
                </tr>
                ${socialLink ? `
                <tr>
                  <td style="padding: 8px 0; color: #6b749e; vertical-align: top;">Réseau social</td>
                  <td style="padding: 8px 0;">
                    <a href="${escapeAttr(socialLink)}" style="color: #b8944f; text-decoration: none;">${escapeHtml(socialLink)}</a>
                  </td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 8px 0; color: #6b749e; vertical-align: top;">Chiffre d'affaires</td>
                  <td style="padding: 8px 0;">${escapeHtml(revenue)}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b749e; vertical-align: top;">Méditation (1-10)</td>
                  <td style="padding: 8px 0;">${escapeHtml(meditationScale)}</td>
                </tr>
              </table>
              <hr style="border: none; border-top: 1px solid #e8dfd0; margin: 24px 0;" />
              <h2 style="font-size: 16px; color: #b8944f; margin-bottom: 8px;">Vie idéale</h2>
              <p style="font-size: 14px; color: #6b749e; margin-top: 0; margin-bottom: 4px;">Décris-moi ta vie idéale et l'objectif que tu aimerais atteindre.</p>
              <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid #e8dfd0; white-space: pre-wrap; line-height: 1.6;">${escapeHtml(idealLife)}</div>
              <h2 style="font-size: 16px; color: #b8944f; margin-top: 24px; margin-bottom: 8px;">Situation actuelle</h2>
              <p style="font-size: 14px; color: #6b749e; margin-top: 0; margin-bottom: 4px;">Où en es-tu maintenant ?</p>
              <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid #e8dfd0; white-space: pre-wrap; line-height: 1.6;">${escapeHtml(currentSituation)}</div>
              <h2 style="font-size: 16px; color: #b8944f; margin-top: 24px; margin-bottom: 8px;">Obstacles</h2>
              <p style="font-size: 14px; color: #6b749e; margin-top: 0; margin-bottom: 4px;">Qu'est-ce qui pourrait t'en empêcher ?</p>
              <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid #e8dfd0; white-space: pre-wrap; line-height: 1.6;">${escapeHtml(obstacle)}</div>
              <hr style="border: none; border-top: 1px solid #e8dfd0; margin: 24px 0;" />
              <p style="font-size: 12px; color: #8d96b4;">Réponds à ${escapeHtml(name)} sur WhatsApp : <a href="https://wa.me/${encodeURIComponent(whatsappDigits(whatsapp))}" style="color: #b8944f;">${escapeHtml(whatsapp)}</a></p>
            </div>
          </div>
        `,
      })
    } catch (e) {
      // Submission is already in Supabase — email is best-effort.
      console.error('Resend email failed (non-fatal):', e)
      await sendErrorAlert('/api/contact (resend notification)', e, { name, whatsapp })
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

function escapeAttr(s: string): string {
  return escapeHtml(s)
}

function whatsappDigits(s: string): string {
  return s.replace(/\D/g, '')
}
