import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-espresso text-creme">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="font-display text-2xl font-bold mb-1">
            Grão <span className="text-caramel">&</span> Mar
          </p>
          <p className="font-body text-[10px] text-creme/40 uppercase tracking-[0.3em] mb-4">
            café bistrô · torres, rs
          </p>
          <p className="text-creme/50 text-sm leading-relaxed">
            Um cantinho para desacelerar, tomar um bom café e olhar para o mar.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Horários</p>
          <ul className="text-sm text-creme/60 flex flex-col gap-1.5">
            <li className="flex justify-between"><span>Segunda – Sexta</span><span>7h – 19h</span></li>
            <li className="flex justify-between"><span>Sábado</span><span>7h – 21h</span></li>
            <li className="flex justify-between"><span>Domingo</span><span>8h – 15h</span></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Onde Estamos</p>
          <address className="not-italic text-sm text-creme/60 leading-relaxed">
            Rua das Andorinhas, 88<br />
            Torres — RS, 95520-000<br /><br />
            <a href="tel:+5551912345678" className="hover:text-caramel transition-colors">(51) 9 1234-5678</a><br />
            <a href="mailto:oi@graoamar.com.br" className="hover:text-caramel transition-colors">oi@graoamar.com.br</a>
          </address>
        </div>
      </div>

      <div className="hairline border-creme/10 mx-6" />
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <p className="text-[11px] text-creme/25 uppercase tracking-widest">
          © {new Date().getFullYear()} Grão & Mar
        </p>
        <p className="text-[11px] text-creme/15">Projeto de treino · React + Tailwind</p>
      </div>
    </footer>
  )
}
