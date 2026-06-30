import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SteamCup from '../components/SteamCup'
import { menuSections } from '../data/menu'
import cafeDaManha from '../img/cafedamanha.jpg'
import graoCafe from '../img/graocafe.jpg'
import patisserie from '../img/patiserre.jpg'
import vistaProMar from '../img/vistapromar.jpg'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: 'easeOut' },
})

export default function Home() {
  const highlights = menuSections.flatMap(s => s.items.filter(i => i.tag)).slice(0, 4)

  return (
    <main className="bg-creme text-espresso">

      {/* ── HERO ── */}
      <section className="min-h-screen flex flex-col md:flex-row items-center max-w-6xl mx-auto px-6 pt-24 pb-16 gap-12">
        {/* Text side */}
        <div className="flex-1 order-2 md:order-1">
          <motion.p className="eyebrow mb-4" {...fade(0.1)}>
            Torres, RS — desde 2015
          </motion.p>
          <motion.h1
            className="font-display text-[clamp(3rem,7vw,5.5rem)] font-bold leading-[1.05] text-espresso mb-6"
            {...fade(0.2)}
          >
            O café que<br />
            <em className="text-caramel not-italic">aquece</em><br />
            antes do mar.
          </motion.h1>
          <motion.p
            className="font-body text-espresso/60 text-lg leading-relaxed max-w-md mb-10"
            {...fade(0.35)}
          >
            Bistrô artesanal no coração de Torres. Café especial, pâtisserie francesa
            e um cardápio que muda com as estações — tudo com vista para o litoral gaúcho.
          </motion.p>
          <motion.div className="flex flex-wrap gap-4" {...fade(0.45)}>
            <Link to="/cardapio" className="btn-dark">Ver Cardápio</Link>
            <Link to="/reservas" className="btn-outline-dark">Reservar Mesa</Link>
          </motion.div>

          {/* Quick info strip */}
          <motion.div
            className="mt-14 flex flex-wrap gap-8 pt-8 border-t border-espresso/10"
            {...fade(0.55)}
          >
            {[
              { label: 'Abre às', value: '7h da manhã' },
              { label: 'Endereço', value: 'R. das Andorinhas, 88' },
              { label: 'Reservas', value: '(51) 9 1234-5678' },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="eyebrow text-[9px] mb-0.5">{label}</p>
                <p className="font-body text-sm text-espresso font-bold">{value}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Cup side — signature element */}
        <motion.div
          className="order-1 md:order-2 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
        >
          <SteamCup size={220} />
        </motion.div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="hairline mx-6 max-w-6xl md:mx-auto" />

      {/* ── DESTAQUES DO CARDÁPIO ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="eyebrow mb-2">Destaques</p>
            <h2 className="font-display text-4xl font-bold text-espresso">
              O que todo mundo pede
            </h2>
          </div>
          <Link to="/cardapio" className="text-xs uppercase tracking-widest text-caramel font-bold hover:text-espresso transition-colors hidden md:block">
            Cardápio completo →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.id}
              className="group flex gap-5 p-5 bg-kraft/40 hover:bg-kraft transition-colors duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-display font-bold text-espresso">{item.name}</h3>
                  {item.tag && (
                    <span className="text-[9px] uppercase tracking-widest bg-caramel text-creme px-2 py-0.5 font-bold">
                      {item.tag}
                    </span>
                  )}
                </div>
                <p className="text-sm text-espresso/55 leading-relaxed">{item.desc}</p>
              </div>
              <p className="font-display text-xl font-bold text-caramel shrink-0 pt-0.5">
                R$ {item.price}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-mogno text-creme py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow mb-3">O espaço</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
              Feito para<br />
              <em className="text-caramel">demorar</em> um pouco.
            </h2>
            <p className="text-creme/60 leading-relaxed mb-8">
              Mesas de madeira maciça, luz natural e o som do vento. Um lugar onde o tempo
              passa diferente — entre uma xícara e outra, entre um capítulo e o próximo.
            </p>
            <Link to="/sobre" className="border border-creme/30 text-creme text-sm uppercase tracking-widest px-6 py-3 hover:bg-creme hover:text-espresso transition-all duration-200 font-bold">
              Nossa história
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 aspect-square">
            {[
              { img: cafeDaManha, label: 'Café da manhã' },
              { img: graoCafe, label: 'Grão de café' },
              { img: patisserie, label: 'Pâtisserie' },
              { img: vistaProMar, label: 'Vista para o mar' },
            ].map(({ img, label }) => (
              <div key={label} className="relative overflow-hidden group rounded-sm">
                <img
                  src={img}
                  alt={label}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mogno/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[10px] text-creme/90 uppercase tracking-widest font-medium">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA RESERVA ── */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <SteamCup size={60} className="mx-auto mb-6 opacity-40" />
        <h2 className="font-display text-4xl font-bold text-espresso mb-4">
          Reserve sua mesa
        </h2>
        <p className="text-espresso/50 mb-8 max-w-sm mx-auto">
          Para grupos, datas especiais ou só garantir aquele cantinho perto da janela.
        </p>
        <Link to="/reservas" className="btn-dark">Fazer Reserva</Link>
      </section>
    </main>
  )
}
