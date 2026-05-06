import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export async function POST(request: Request) {
  const adminPassword = process.env.ADMIN_PASSWORD
  if (!adminPassword) {
    return NextResponse.json(
      { error: 'ADMIN_PASSWORD non configuré sur le serveur.' },
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

  const { data, error } = await supabaseAdmin
    .from('anais_form_submissions')
    .select('id, created_at, name, email, ideal_life, current_situation, status')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Supabase select failed:', error)
    return NextResponse.json({ error: 'Erreur de récupération.' }, { status: 500 })
  }

  return NextResponse.json({ submissions: data })
}
