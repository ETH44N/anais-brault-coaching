'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, Loader2, Mail, Calendar, Inbox, CheckCircle2, Archive, Trash2, AlertCircle } from 'lucide-react'

type Submission = {
  id: string
  created_at: string
  name: string
  email: string
  ideal_life: string
  current_situation: string
  status: 'new' | 'contacted' | 'archived'
}

type Status = 'gate' | 'loading' | 'authed' | 'error'

export default function AdminContent() {
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState<Status>('gate')
  const [errorMsg, setErrorMsg] = useState('')
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [filter, setFilter] = useState<'all' | Submission['status']>('all')

  async function handleAuth(e: React.FormEvent) {
    e.preventDefault()
    if (status === 'loading') return
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/admin/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Erreur')
      setSubmissions(data.submissions || [])
      setStatus('authed')
    } catch (err) {
      const m = err instanceof Error ? err.message : 'Erreur'
      setErrorMsg(m)
      setStatus('error')
    }
  }

  async function refresh() {
    const res = await fetch('/api/admin/submissions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })
    const data = await res.json()
    if (res.ok) setSubmissions(data.submissions || [])
  }

  async function updateStatus(id: string, newStatus: Submission['status']) {
    const res = await fetch(`/api/admin/submissions/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password, status: newStatus }),
    })
    if (res.ok) {
      setSubmissions((prev) => prev.map((s) => (s.id === id ? { ...s, status: newStatus } : s)))
    }
  }

  async function deleteSubmission(id: string) {
    if (!confirm('Supprimer cette candidature ? Cette action est irréversible.')) return
    const res = await fetch(`/api/admin/submissions/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })
    if (res.ok) {
      setSubmissions((prev) => prev.filter((s) => s.id !== id))
    }
  }

  const counts = {
    all: submissions.length,
    new: submissions.filter((s) => s.status === 'new').length,
    contacted: submissions.filter((s) => s.status === 'contacted').length,
    archived: submissions.filter((s) => s.status === 'archived').length,
  }

  const filtered = filter === 'all' ? submissions : submissions.filter((s) => s.status === filter)

  if (status !== 'authed') {
    return (
      <main className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-brand-50 via-cream-100 to-sage-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md bg-white rounded-3xl p-10 shadow-xl border border-brand-100"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-navy-900 text-brand-400 mb-4">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="font-display text-2xl text-navy-900 mb-2">Espace admin</h1>
            <p className="text-navy-500 text-sm">Entre ton code d&apos;accès pour voir les candidatures.</p>
          </div>
          <form onSubmit={handleAuth} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Code d'accès"
              autoFocus
              className="w-full px-5 py-3 rounded-xl bg-brand-50 border border-brand-100 focus:outline-none focus:border-brand-400 text-navy-900"
            />
            {(status === 'error' || errorMsg) && (
              <div className="flex items-start gap-3 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <p>{errorMsg}</p>
              </div>
            )}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary w-full justify-center disabled:opacity-60"
            >
              {status === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Accéder'}
            </button>
          </form>
        </motion.div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-cream-100 to-white pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-10">
          <div>
            <h1 className="font-display text-3xl md:text-4xl text-navy-900">
              Candidatures reçues
            </h1>
            <p className="text-navy-500 mt-1">
              {counts.all} {counts.all > 1 ? 'candidatures' : 'candidature'} au total
            </p>
          </div>
          <button onClick={refresh} className="btn-secondary text-sm">
            Actualiser
          </button>
        </div>

        <div className="flex gap-2 flex-wrap mb-8">
          {(['all', 'new', 'contacted', 'archived'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                filter === f
                  ? 'bg-navy-900 text-white border-navy-900'
                  : 'bg-white text-navy-600 border-navy-200 hover:border-navy-400'
              }`}
            >
              {labelFor(f)} ({counts[f]})
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="bg-white rounded-3xl p-16 text-center border border-brand-100">
            <Inbox className="w-12 h-12 text-navy-300 mx-auto mb-4" />
            <p className="text-navy-500">Aucune candidature dans cette catégorie.</p>
          </div>
        ) : (
          <div className="space-y-4">
            <AnimatePresence>
              {filtered.map((s) => (
                <SubmissionCard
                  key={s.id}
                  submission={s}
                  onUpdateStatus={updateStatus}
                  onDelete={deleteSubmission}
                />
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </main>
  )
}

function labelFor(s: 'all' | Submission['status']) {
  if (s === 'all') return 'Toutes'
  if (s === 'new') return 'Nouvelles'
  if (s === 'contacted') return 'Contactées'
  return 'Archivées'
}

function SubmissionCard({
  submission: s,
  onUpdateStatus,
  onDelete,
}: {
  submission: Submission
  onUpdateStatus: (id: string, status: Submission['status']) => void
  onDelete: (id: string) => void
}) {
  const [expanded, setExpanded] = useState(false)
  const created = new Date(s.created_at)
  const dateStr = created.toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })

  const statusBadge = {
    new: { label: 'Nouvelle', cls: 'bg-brand-100 text-brand-700 border-brand-200' },
    contacted: { label: 'Contactée', cls: 'bg-sage-100 text-sage-700 border-sage-200' },
    archived: { label: 'Archivée', cls: 'bg-navy-100 text-navy-600 border-navy-200' },
  }[s.status]

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="bg-white rounded-2xl border border-brand-100/70 shadow-sm overflow-hidden"
    >
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full p-6 text-left hover:bg-brand-50/30 transition-colors"
      >
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-400 to-brand-500 text-white flex items-center justify-center font-display font-semibold">
              {s.name[0]?.toUpperCase()}
            </div>
            <div>
              <p className="font-display font-semibold text-navy-900">{s.name}</p>
              <p className="text-sm text-navy-500">{s.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs text-navy-400 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {dateStr}
            </span>
            <span className={`text-xs px-3 py-1 rounded-full border font-medium ${statusBadge.cls}`}>
              {statusBadge.label}
            </span>
          </div>
        </div>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-brand-100/70"
          >
            <div className="p-6 space-y-5">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-500 mb-2">
                  Q1 — Vie idéale
                </h4>
                <p className="text-navy-700 whitespace-pre-wrap leading-relaxed">
                  {s.ideal_life}
                </p>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-500 mb-2">
                  Q2 — Situation actuelle
                </h4>
                <p className="text-navy-700 whitespace-pre-wrap leading-relaxed">
                  {s.current_situation}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-brand-100/70">
                <a
                  href={`mailto:${s.email}?subject=${encodeURIComponent('Re: Ta candidature')}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-navy-900 text-white hover:bg-navy-800 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Répondre par email
                </a>
                {s.status !== 'contacted' && (
                  <button
                    onClick={() => onUpdateStatus(s.id, 'contacted')}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-sage-100 text-sage-700 hover:bg-sage-200 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    Marquer contactée
                  </button>
                )}
                {s.status !== 'archived' && (
                  <button
                    onClick={() => onUpdateStatus(s.id, 'archived')}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-navy-100 text-navy-600 hover:bg-navy-200 transition-colors"
                  >
                    <Archive className="w-4 h-4" />
                    Archiver
                  </button>
                )}
                <button
                  onClick={() => onDelete(s.id)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-red-50 text-red-600 hover:bg-red-100 transition-colors ml-auto"
                >
                  <Trash2 className="w-4 h-4" />
                  Supprimer
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
