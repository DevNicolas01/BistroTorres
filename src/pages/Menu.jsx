import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { menuSections } from '../data/menu'
import SteamCup from '../components/SteamCup'

export default function Menu() {
  const [active, setActive] = useState(menuSections[0].id)
  const section = menuSections.find(s => s.id === active)

  return (
    <main className="bg-creme text-espresso min-h-screen pt-20">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-8 flex flex-col md:flex-row md:items-end gap-6 justify-between">
        <div>
          <p className="eyebrow mb-2">O que servimos</p>
          <h1 className="font-display text-6xl font-bold text-espresso leading-none">Cardápio</h1>
        </div>
        <p className="text-espresso/50 text-sm max-w-xs leading-relaxed">
          Ingredientes frescos, receitas pensadas com cuidado. 
          O cardápio muda com as estações — o que tem sempre é qualidade.
        </p>
      </div>

      <div className="hairline mx-6 max-w-6xl md:mx-auto mb-0" />

      {/* Section tabs */}
      <div className="sticky top-16 bg-creme/95 backdrop-blur-sm z-30 border-b border-espresso/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-0 overflow-x-auto">
            {menuSections.map(s => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`relative shrink-0 font-body text-sm px-5 py-4 transition-colors duration-150 ${
                  active === s.id
                    ? 'text-espresso font-bold'
                    : 'text-espresso/40 hover:text-espresso/70'
                }`}
              >
                {s.label}
                {active === s.id && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-caramel"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Items */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col"
          >
            {section.items.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-6 py-6 border-b border-espresso/8 last:border-0 group hover:bg-kraft/20 -mx-4 px-4 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center flex-wrap gap-2 mb-1.5">
                    <h3 className="font-display font-bold text-lg text-espresso">{item.name}</h3>
                    {item.tag && (
                      <span className="text-[9px] uppercase tracking-widest bg-caramel text-creme px-2 py-0.5 font-body font-bold">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-espresso/55 text-sm leading-relaxed">{item.desc}</p>
                </div>
                <p className="font-display text-2xl font-bold text-caramel shrink-0 mt-0.5">
                  R$ {item.price}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Note */}
      <div className="max-w-6xl mx-auto px-6 pb-16 flex items-center gap-4">
        <SteamCup size={36} className="opacity-30 shrink-0" />
        <p className="text-espresso/35 text-xs leading-relaxed italic">
          Cardápio sujeito a alterações conforme sazonalidade dos ingredientes. 
          Informe alergias e restrições alimentares ao seu garçom.
        </p>
      </div>
    </main>
  )
}
