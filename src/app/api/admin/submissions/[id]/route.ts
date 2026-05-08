import { NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase-admin'

const VALID_STATUSES = ['new', 'contacted', 'archived'] as const

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } },
) {
  const adminPassword = process.env.ADMIN_PASSWORD
  if (!adminPassword) {
    return NextResponse.json(
      { error: 'ADMIN_PASSWORD non configuré.' },
      { status: 500 },
    )
  }

  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 })
  }

  const password = String(body.password ?? '')
  if (password !== adminPassword) {
    return NextResponse.json({ error: 'Code invalide.' }, { status: 401 })
  }

  const status = String(body.status ?? '')
  if (!VALID_STATUSES.includes(status as typeof VALID_STATUSES[number])) {
    return NextResponse.json({ error: 'Statut invalide.' }, { status: 400 })
  }

  const { error } = await getSupabaseAdmin()
    .from('anais_form_submissions')
    .update({ status })
    .eq('id', params.id)

  if (error) {
    console.error('Supabase update failed:', error)
    return NextResponse.json({ error: 'Erreur de mise à jour.' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  const adminPassword = process.env.ADMIN_PASSWORD
  if (!adminPassword) {
    return NextResponse.json(
      { error: 'ADMIN_PASSWORD non configuré.' },
      { status: 500 },
    )
  }

  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 })
  }

  const password = String(body.password ?? '')
  if (password !== adminPassword) {
    return NextResponse.json({ error: 'Code invalide.' }, { status: 401 })
  }

  const { error } = await getSupabaseAdmin()
    .from('anais_form_submissions')
    .delete()
    .eq('id', params.id)

  if (error) {
    console.error('Supabase delete failed:', error)
    return NextResponse.json({ error: 'Erreur de suppression.' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
