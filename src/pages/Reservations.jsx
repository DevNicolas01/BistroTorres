import { useState } from 'react'
import { motion } from 'framer-motion'
import SteamCup from '../components/SteamCup'

const TIMES = ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '18:00', '19:00', '20:00']
const SIZES = ['1–2 pessoas', '3–4 pessoas', '5–6 pessoas', '7+ pessoas']

function Field({ label, error, children }) {
  return (
    <div>
      <label className="eyebrow text-[10px] block mb-2">{label}</label>
      {children}
      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  )
}

const inputClass =
  'w-full bg-transparent border border-espresso/20 text-espresso px-4 py-3 text-sm focus:outline-none focus:border-caramel transition-colors placeholder:text-espresso/25 font-body'

export default function Reservations() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', date: '', time: '', size: '', notes: '',
  })
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(false)

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Informe seu nome.'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'E-mail inválido.'
    if (!form.date) e.date = 'Escolha uma data.'
    if (!form.time) e.time = 'Escolha um horário.'
    if (!form.size) e.size = 'Informe o número de pessoas.'
    return e
  }

  function handle(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setDone(true)
  }

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  return (
    <main className="bg-creme text-espresso min-h-screen pt-20">
      <div className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-[1fr_1.6fr] gap-16">
        {/* Left info */}
        <div className="flex flex-col gap-8">
          <div>
            <p className="eyebrow mb-2">Reserve sua mesa</p>
            <h1 className="font-display text-5xl font-bold leading-none text-espresso mb-4">
              Reservas
            </h1>
            <p className="text-espresso/55 text-sm leading-relaxed">
              Para um café especial, brunch de domingo ou jantar íntimo. 
              Confirmamos por e-mail em até 2 horas.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-sm text-espresso/60">
            {[
              { label: 'Horário', value: 'Seg–Sex 7h–19h · Sáb 7h–21h · Dom 8h–15h' },
              { label: 'Telefone', value: '(51) 9 1234-5678' },
              { label: 'E-mail', value: 'oi@graoamar.com.br' },
              { label: 'Endereço', value: 'R. das Andorinhas, 88 · Torres, RS' },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="eyebrow text-[9px] mb-0.5">{label}</p>
                <p>{value}</p>
              </div>
            ))}
          </div>

          <SteamCup size={80} className="opacity-20 mt-auto hidden md:block" />
        </div>

        {/* Form */}
        <div>
          {done ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center h-full gap-5 text-center py-20"
            >
              <SteamCup size={90} />
              <h2 className="font-display text-4xl font-bold text-espresso">Reserva confirmada!</h2>
              <p className="text-espresso/50 text-sm max-w-xs leading-relaxed">
                Enviamos uma confirmação para <strong>{form.email}</strong>. 
                Esperamos você em breve!
              </p>
              <button
                onClick={() => { setDone(false); setForm({ name:'',email:'',phone:'',date:'',time:'',size:'',notes:'' }) }}
                className="btn-outline-dark text-xs mt-2"
              >
                Nova reserva
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handle} noValidate className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Nome completo" error={errors.name}>
                  <input className={inputClass} placeholder="Seu nome" value={form.name} onChange={e => set('name', e.target.value)} />
                </Field>
                <Field label="E-mail" error={errors.email}>
                  <input type="email" className={inputClass} placeholder="seu@email.com" value={form.email} onChange={e => set('email', e.target.value)} />
                </Field>
              </div>

              <Field label="Telefone (opcional)">
                <input className={inputClass} placeholder="(51) 9 ..." value={form.phone} onChange={e => set('phone', e.target.value)} />
              </Field>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Data" error={errors.date}>
                  <input type="date" className={inputClass} value={form.date} onChange={e => set('date', e.target.value)} min={new Date().toISOString().split('T')[0]} />
                </Field>

                <Field label="Horário" error={errors.time}>
                  <select className={inputClass} value={form.time} onChange={e => set('time', e.target.value)}>
                    <option value="">Selecionar</option>
                    {TIMES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </Field>
              </div>

              <Field label="Número de pessoas" error={errors.size}>
                <div className="flex flex-wrap gap-2">
                  {SIZES.map(s => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => set('size', s)}
                      className={`text-xs px-4 py-2 border transition-all duration-150 ${
                        form.size === s
                          ? 'bg-espresso text-creme border-espresso'
                          : 'border-espresso/20 text-espresso/60 hover:border-espresso/40'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                {errors.size && <p className="text-red-600 text-xs mt-1">{errors.size}</p>}
              </Field>

              <Field label="Observações (alergias, ocasião especial...)">
                <textarea
                  rows={3}
                  className={inputClass + ' resize-none'}
                  placeholder="Aniversário, alergia a amendoim, cadeira para bebê..."
                  value={form.notes}
                  onChange={e => set('notes', e.target.value)}
                />
              </Field>

              <button type="submit" className="btn-dark self-start">
                Confirmar Reserva
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}
