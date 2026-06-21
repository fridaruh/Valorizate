import Image from "next/image";
import FAQ from "@/components/FAQ";
import ScrollAnimator from "@/components/ScrollAnimator";

const TICKET_URL = "#comprar";

const geoShapeBase: React.CSSProperties = {
  position: "absolute",
  zIndex: 0,
  pointerEvents: "none",
};

function GeoShape({
  color,
  clipPath,
  className,
}: {
  color: string;
  clipPath: string;
  className: string;
}) {
  return (
    <div
      className={className}
      style={{ ...geoShapeBase, backgroundColor: color, clipPath }}
    />
  );
}

export default function Home() {
  return (
    <>
      <ScrollAnimator />

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-[960px] mx-auto flex items-center justify-between px-5 md:px-10 py-4">
          <Image
            src="/logo-64.png"
            alt="Valorizate"
            width={40}
            height={40}
            priority
          />
          <a
            href={TICKET_URL}
            className="font-[family-name:var(--font-display)] font-bold uppercase text-sm tracking-wider bg-[#0052E0] px-5 py-2.5 text-white rounded-lg hover:brightness-110 transition-all"
          >
            Comprar entrada
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-5 pt-20 overflow-hidden bg-white">
        <GeoShape
          color="#7B61FF"
          clipPath="polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)"
          className="w-32 h-32 md:w-44 md:h-44 -left-4 top-28 md:left-0"
        />
        <GeoShape
          color="#00BF88"
          clipPath="polygon(0% 10%, 80% 0%, 100% 70%, 30% 100%, 0% 80%)"
          className="w-28 h-28 md:w-40 md:h-40 -left-2 top-72 md:left-4"
        />
        <GeoShape
          color="#FFE600"
          clipPath="polygon(0% 20%, 70% 0%, 100% 50%, 80% 100%, 10% 90%)"
          className="w-24 h-28 md:w-36 md:h-40 -right-2 top-44 md:right-2"
        />
        <GeoShape
          color="#FF6B6B"
          clipPath="polygon(20% 0%, 100% 10%, 90% 80%, 0% 100%)"
          className="w-28 h-24 md:w-40 md:h-32 -right-4 bottom-36 md:right-0"
        />

        <div className="relative z-10 max-w-[960px] mx-auto">
          <Image
            src="/logo.png"
            alt="Valorizate"
            width={120}
            height={120}
            priority
            className="mx-auto mb-8"
          />
          <p className="font-[family-name:var(--font-display)] font-semibold text-xs uppercase tracking-[4px] text-[#0052E0] mb-6">
            17 de octubre &middot; Bogota, Colombia
          </p>
          <h1 className="font-[family-name:var(--font-display)] font-black text-4xl md:text-6xl lg:text-7xl uppercase leading-[0.95] mb-6 text-[#0A0A0A]">
            El primer concurso
            <br />
            de educacion financiera
            <br />
            <span className="text-[#0052E0]">de America Latina</span>
          </h1>
          <p className="font-[family-name:var(--font-body)] text-[#555555] text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Sabes tomar buenas decisiones con tu dinero? Es momento de
            demostrarlo.
          </p>
          <a
            href={TICKET_URL}
            className="inline-block font-[family-name:var(--font-display)] font-black uppercase text-lg tracking-wider bg-[#0052E0] px-10 py-4 text-white rounded-lg hover:brightness-110 transition-all"
          >
            Comprar entrada
          </a>
          <p className="text-[#888888] text-sm mt-4 font-[family-name:var(--font-body)]">
            Cupos limitados
          </p>
        </div>

        <div className="relative z-10 mt-16 animate-bounce">
          <svg
            className="w-6 h-6 text-[#CCCCCC]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7"
            />
          </svg>
        </div>
      </section>

      {/* PREMIO */}
      <section className="py-24 md:py-32 bg-[#0052E0]">
        <div className="max-w-[960px] mx-auto px-5 md:px-10 text-center">
          <div className="animate-on-scroll">
            <p className="font-[family-name:var(--font-display)] font-semibold text-sm uppercase tracking-[3px] text-white/70 mb-4">
              Premio mayor
            </p>
            <p className="font-[family-name:var(--font-display)] font-black text-6xl md:text-8xl lg:text-9xl text-[#FFE600] leading-none mb-8">
              $30.000.000
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-10">
              <span className="font-[family-name:var(--font-display)] font-bold uppercase text-xl tracking-wide text-white">
                Sin sorteos.
              </span>
              <span className="font-[family-name:var(--font-display)] font-bold uppercase text-xl tracking-wide text-white">
                Sin azar.
              </span>
              <span className="font-[family-name:var(--font-display)] font-bold uppercase text-xl tracking-wide text-white">
                Sin rifas.
              </span>
            </div>
            <p className="font-[family-name:var(--font-body)] text-white/80 text-lg max-w-lg mx-auto">
              Tu conocimiento sera el que te lleve a la final.
            </p>
          </div>
        </div>
      </section>

      {/* QUE VIVIRAS */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-white">
        <GeoShape
          color="#0052E0"
          clipPath="polygon(0% 0%, 100% 15%, 85% 100%, 5% 85%)"
          className="w-24 h-28 md:w-36 md:h-40 -left-4 top-16 md:left-0"
        />
        <GeoShape
          color="#FF6B6B"
          clipPath="polygon(20% 0%, 100% 10%, 90% 80%, 0% 100%)"
          className="w-20 h-24 md:w-28 md:h-32 -left-2 bottom-24 md:left-2"
        />
        <GeoShape
          color="#00BF88"
          clipPath="polygon(0% 10%, 80% 0%, 100% 70%, 30% 100%, 0% 80%)"
          className="w-24 h-28 md:w-36 md:h-40 -right-4 top-32 md:right-0"
        />

        <div className="relative z-10 max-w-[960px] mx-auto px-5 md:px-10">
          <div className="animate-on-scroll">
            <h2 className="font-[family-name:var(--font-display)] font-black text-3xl md:text-5xl uppercase text-center mb-16 text-[#0A0A0A]">
              Que viviras durante el evento?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Competencia en vivo",
                desc: "Clasificacion por fases con retos de conocimiento financiero.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
              },
              {
                title: "Conferencias accionables",
                desc: "Conferencias cortas sobre dinero, ahorro, inversion y toma de decisiones financieras.",
                icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
              },
              {
                title: "Networking financiero",
                desc: "Relacionamiento con empresas lideres del sector financiero.",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
              },
              {
                title: "Compite por $30M",
                desc: "La oportunidad de competir por hasta $30 millones de pesos.",
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="animate-on-scroll border border-[#E0E0E0] rounded-2xl p-8 hover:border-[#0052E0]/50 transition-colors bg-white"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <svg
                  className="w-8 h-8 text-[#0052E0] mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={item.icon}
                  />
                </svg>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-xl uppercase mb-2 text-[#0A0A0A]">
                  {item.title}
                </h3>
                <p className="font-[family-name:var(--font-body)] text-[#555555] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-24 md:py-32 bg-white text-[#0A0A0A]">
        <div className="max-w-[960px] mx-auto px-5 md:px-10">
          <div className="animate-on-scroll">
            <h2 className="font-[family-name:var(--font-display)] font-black text-3xl md:text-5xl uppercase text-center mb-16">
              Como funciona?
            </h2>
          </div>
          <div className="grid md:grid-cols-5 gap-4 md:gap-2">
            {[
              { step: "01", text: "Compra tu entrada" },
              { step: "02", text: "Asiste al evento el 17 de octubre en Bogota" },
              { step: "03", text: "Participa en las actividades y retos" },
              { step: "04", text: "Llega a la final" },
              { step: "05", text: "Compite hasta por $30 millones" },
            ].map((item, i) => (
              <div
                key={i}
                className="animate-on-scroll text-center"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="font-[family-name:var(--font-display)] font-black text-5xl md:text-6xl text-[#0052E0]/20 block mb-2">
                  {item.step}
                </span>
                <p className="font-[family-name:var(--font-display)] font-bold text-sm uppercase tracking-wide">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="animate-on-scroll text-center mt-16">
            <p className="font-[family-name:var(--font-display)] font-bold text-xl md:text-2xl uppercase">
              Te pagamos por lo que sabes,{" "}
              <span className="bg-[#FFE600] px-1">no por lo que tienes.</span>
            </p>
          </div>
        </div>
      </section>

      {/* CUANDO Y DONDE */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-white">
        <GeoShape
          color="#FFE600"
          clipPath="polygon(0% 20%, 70% 0%, 100% 50%, 80% 100%, 10% 90%)"
          className="w-24 h-28 md:w-36 md:h-40 -right-4 top-12 md:right-0"
        />
        <GeoShape
          color="#7B61FF"
          clipPath="polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)"
          className="w-20 h-24 md:w-28 md:h-32 -left-2 bottom-16 md:left-2"
        />

        <div className="relative z-10 max-w-[960px] mx-auto px-5 md:px-10">
          <div className="animate-on-scroll">
            <h2 className="font-[family-name:var(--font-display)] font-black text-3xl md:text-5xl uppercase text-center mb-16 text-[#0A0A0A]">
              Cuando y donde?
            </h2>
          </div>
          <div className="animate-on-scroll grid md:grid-cols-3 gap-8 text-center">
            <div className="border border-[#E0E0E0] rounded-2xl p-8 bg-white">
              <span className="text-4xl block mb-4">&#128205;</span>
              <p className="font-[family-name:var(--font-display)] font-bold uppercase text-lg mb-1 text-[#0A0A0A]">
                Auditorio Origenes
              </p>
              <p className="font-[family-name:var(--font-body)] text-[#555555]">
                Universidad EAN
              </p>
            </div>
            <div className="border border-[#E0E0E0] rounded-2xl p-8 bg-white">
              <span className="text-4xl block mb-4">&#128197;</span>
              <p className="font-[family-name:var(--font-display)] font-bold uppercase text-lg mb-1 text-[#0A0A0A]">
                17 de octubre
              </p>
              <p className="font-[family-name:var(--font-body)] text-[#555555]">
                Registro desde las 8:00 AM
              </p>
            </div>
            <div className="border border-[#E0E0E0] rounded-2xl p-8 bg-white">
              <span className="text-4xl block mb-4">&#128204;</span>
              <p className="font-[family-name:var(--font-display)] font-bold uppercase text-lg mb-1 text-[#0A0A0A]">
                Bogota
              </p>
              <p className="font-[family-name:var(--font-body)] text-[#555555]">
                Colombia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ENTRADA */}
      <section className="py-24 md:py-32 bg-[#0052E0]" id="comprar">
        <div className="max-w-[960px] mx-auto px-5 md:px-10 text-center">
          <div className="animate-on-scroll">
            <p className="font-[family-name:var(--font-display)] font-semibold text-sm uppercase tracking-[3px] text-white/70 mb-4">
              Entrada general
            </p>
            <p className="font-[family-name:var(--font-display)] font-black text-5xl md:text-7xl text-[#FFE600] leading-none mb-4">
              $179.000 COP
            </p>
            <p className="font-[family-name:var(--font-body)] text-white/80 mb-10">
              Cupos limitados
            </p>
            <a
              href={TICKET_URL}
              className="inline-block font-[family-name:var(--font-display)] font-black uppercase text-xl tracking-wider bg-[#FFE600] text-[#0A0A0A] px-12 py-5 rounded-lg hover:brightness-110 transition-all"
            >
              Comprar entrada
            </a>
          </div>
          <div className="animate-on-scroll mt-12 max-w-md mx-auto text-left">
            <p className="font-[family-name:var(--font-display)] font-bold uppercase text-sm tracking-wide mb-4 text-white">
              Tu entrada incluye:
            </p>
            <ul className="space-y-3 font-[family-name:var(--font-body)] text-white/80">
              <li className="flex items-start gap-3">
                <span className="text-[#FFE600] mt-0.5">&#10003;</span>
                Participacion oficial en el concurso
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FFE600] mt-0.5">&#10003;</span>
                Acceso a todas las conferencias
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FFE600] mt-0.5">&#10003;</span>
                Espacio de networking entre sesiones
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FFE600] mt-0.5">&#10003;</span>
                Kit de bienvenida y beneficios de patrocinadores
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FFE600] mt-0.5">&#10003;</span>
                Oportunidad de competir por hasta $30 millones de pesos
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ORGANIZAN */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-white">
        <GeoShape
          color="#00BF88"
          clipPath="polygon(0% 10%, 80% 0%, 100% 70%, 30% 100%, 0% 80%)"
          className="w-24 h-28 md:w-36 md:h-40 -right-4 top-20 md:right-0"
        />
        <GeoShape
          color="#F0007D"
          clipPath="polygon(15% 0%, 100% 5%, 100% 85%, 0% 100%)"
          className="w-20 h-24 md:w-28 md:h-32 -left-2 top-12 md:left-2"
        />

        <div className="relative z-10 max-w-[960px] mx-auto px-5 md:px-10">
          <div className="animate-on-scroll">
            <h2 className="font-[family-name:var(--font-display)] font-black text-3xl md:text-5xl uppercase text-center mb-16 text-[#0A0A0A]">
              Organizan
            </h2>
          </div>
          <div className="animate-on-scroll grid md:grid-cols-2 gap-8">
            <div className="border border-[#E0E0E0] rounded-2xl p-8 bg-white">
              <p className="font-[family-name:var(--font-display)] font-bold uppercase text-xl text-[#0052E0] mb-3">
                Karem Suarez
              </p>
              <p className="font-[family-name:var(--font-body)] text-[#555555] leading-relaxed">
                Mas de 13 anos impulsando la educacion financiera en Colombia.
              </p>
            </div>
            <div className="border border-[#E0E0E0] rounded-2xl p-8 bg-white">
              <p className="font-[family-name:var(--font-display)] font-bold uppercase text-xl text-[#0052E0] mb-3">
                CLEFI
              </p>
              <p className="font-[family-name:var(--font-body)] text-[#555555] leading-relaxed">
                10 anos formando personas para tomar mejores decisiones
                financieras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PATROCINADORES */}
      <section className="py-16 border-t border-b border-[#E0E0E0] bg-white">
        <div className="max-w-[960px] mx-auto px-5 md:px-10 text-center">
          <div className="animate-on-scroll">
            <p className="font-[family-name:var(--font-display)] font-bold uppercase text-sm tracking-[3px] text-[#888888] mb-4">
              Patrocinadores y aliados
            </p>
            <p className="font-[family-name:var(--font-body)] text-[#888888] text-sm max-w-md mx-auto">
              Espacio reservado para las organizaciones que creen en una sociedad
              con mejores decisiones financieras.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-white">
        <GeoShape
          color="#FF6B6B"
          clipPath="polygon(20% 0%, 100% 10%, 90% 80%, 0% 100%)"
          className="w-24 h-28 md:w-36 md:h-40 -left-4 top-28 md:left-0"
        />
        <GeoShape
          color="#FFE600"
          clipPath="polygon(0% 20%, 70% 0%, 100% 50%, 80% 100%, 10% 90%)"
          className="w-20 h-24 md:w-28 md:h-32 -right-2 bottom-20 md:right-2"
        />

        <div className="relative z-10 max-w-[960px] mx-auto px-5 md:px-10">
          <div className="animate-on-scroll">
            <h2 className="font-[family-name:var(--font-display)] font-black text-3xl md:text-5xl uppercase text-center mb-16 text-[#0A0A0A]">
              Preguntas frecuentes
            </h2>
          </div>
          <div className="animate-on-scroll">
            <FAQ />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 md:py-32 bg-[#0052E0] text-center">
        <div className="max-w-[960px] mx-auto px-5 md:px-10">
          <div className="animate-on-scroll">
            <h2 className="font-[family-name:var(--font-display)] font-black text-3xl md:text-5xl uppercase mb-6 text-white">
              Estas listo para demostrar
              <br />
              cuanto sabes?
            </h2>
            <p className="font-[family-name:var(--font-display)] font-bold text-xl uppercase mb-10 text-white">
              Haz que cada peso cuente.
            </p>
            <a
              href={TICKET_URL}
              className="inline-block font-[family-name:var(--font-display)] font-black uppercase text-xl tracking-wider bg-[#FFE600] text-[#0A0A0A] px-12 py-5 rounded-lg hover:brightness-110 transition-all"
            >
              Comprar entrada
            </a>
            <p className="font-[family-name:var(--font-body)] text-white/80 mt-4">
              Compite por hasta $30 millones de pesos
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-[#E0E0E0] bg-white">
        <div className="max-w-[960px] mx-auto px-5 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <Image
            src="/logo-64.png"
            alt="Valorizate"
            width={32}
            height={32}
          />
          <p className="font-[family-name:var(--font-body)] text-[#888888] text-sm">
            Valorizate &middot; Colombia &middot; 2025
          </p>
        </div>
      </footer>
    </>
  );
}
