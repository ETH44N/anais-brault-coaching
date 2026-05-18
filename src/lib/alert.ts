import { Resend } from 'resend'

const ALERT_TO = 'crapo2025@gmail.com'
const ALERT_FROM = 'Alertes Anaïs Brault <team@etnbusiness.com>'

export async function sendErrorAlert(
  context: string,
  error: unknown,
  extra?: Record<string, unknown>,
): Promise<void> {
  const resendKey = process.env.RESEND_API_KEY
  if (!resendKey) {
    console.error(`[alert skipped — no RESEND_API_KEY] ${context}`, error)
    return
  }

  const detail =
    error instanceof Error
      ? `${error.name}: ${error.message}\n\n${error.stack ?? ''}`
      : typeof error === 'object'
        ? JSON.stringify(error, null, 2)
        : String(error)

  const extraBlock = extra
    ? `\n\nContexte:\n${JSON.stringify(extra, null, 2)}`
    : ''

  try {
    const resend = new Resend(resendKey)
    await resend.emails.send({
      from: ALERT_FROM,
      to: ALERT_TO,
      subject: `URGENT — Erreur ${context} sur anaisbrault.fr`,
      text: `Une erreur serveur est survenue.

Endpoint: ${context}
Date: ${new Date().toISOString()}

Détail:
${detail}${extraBlock}
`,
    })
  } catch (e) {
    // Alerting itself failed — log and move on so we don't mask the original error.
    console.error('Failed to send error alert email:', e)
  }
}
