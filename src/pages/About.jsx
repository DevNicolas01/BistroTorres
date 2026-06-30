import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <main className="bg-creme text-espresso min-h-screen pt-20">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-16">
        <motion.p className="eyebrow mb-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Nossa história
        </motion.p>
        <motion.h1
          className="font-display text-[clamp(3rem,7vw,5rem)] font-bold leading-[1.05] mb-8"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        >
          Nascemos de uma<br /> 
          <em className="text-caramel">manhã fria</em> em Torres.
        </motion.h1>
        <motion.p
          className="text-espresso/60 text-lg leading-relaxed max-w-xl"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        >
          Em junho de 2015, Ana e Pedro Fontana abriram o Grão & Mar num sobrado antigo
          da Rua das Andorinhas. A ideia era simples: fazer o café que eles queriam tomar
          toda manhã antes de ir à praia.
        </motion.p>
      </section>

      <div className="hairline mx-6 max-w-6xl md:mx-auto" />

      {/* Story sections */}
      <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col gap-16">
        {[
          {
            title: 'O café em primeiro lugar',
            body: 'Trabalhamos com grãos de origem única de torrefações artesanais do sul do país. Nosso barista, Rodrigo, passou dois meses em Santa Catarina aprendendo com produtores locais antes de criar o blend da casa — encorpado, com notas de chocolate amargo e uma acidez suave de frutas vermelhas.',
          },
          {
            title: 'A cozinha que aquece',
            body: 'Chef Marta Salave formou-se em Le Cordon Bleu e escolheu Torres para criar uma cozinha que mistura técnica francesa com ingredientes gaúchos. O croissant assado às 7h da manhã é o nosso orgulho — 27 camadas de massa folhada, manteiga francesa, forno de lastro de pedra.',
          },
          {
            title: 'O espaço como convite',
            body: 'O sobrado foi reformado preservando as vigas de madeira original. Cada mesa foi escolhida à mão em marcenarias do litoral gaúcho. A janela grande do segundo andar, com vista para as pedras do Guarita, é o lugar mais disputado da casa.',
          },
        ].map(({ title, body }, i) => (
          <motion.div
            key={title}
            className="grid md:grid-cols-[1fr_2fr] gap-8 items-start"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
          >
            <h2 className="font-display text-2xl font-bold text-espresso leading-snug">{title}</h2>
            <p className="text-espresso/60 leading-relaxed">{body}</p>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-mogno text-creme py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-bold mb-4">Venha nos visitar</h2>
          <p className="text-creme/50 mb-8">Rua das Andorinhas, 88 · Torres, RS · Abre às 7h</p>
          <Link to="/reservas" className="border border-creme/30 text-creme text-sm uppercase tracking-widest px-7 py-3 hover:bg-creme hover:text-espresso transition-all duration-200 font-bold">
            Reservar Mesa
          </Link>
        </div>
      </section>
    </main>
  )
}
