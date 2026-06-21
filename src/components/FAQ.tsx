"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Valorizate es un sorteo o una rifa?",
    a: "No. Valorizate es un concurso de Educación Financiera. Los participantes avanzarán a través de diferentes fases y actividades diseñadas para evaluar su capacidad de tomar decisiones financieras, resolver retos y demostrar sus conocimientos. Aquí no gana la suerte. Gana quien mejor se desempeñe.",
  },
  {
    q: "¿Cómo puedo ganar los $30 millones?",
    a: "Los participantes deberán superar distintas etapas durante el evento. A medida que avancen en el concurso, irán clasificando a nuevas rondas hasta llegar a la final, donde tendrán la oportunidad de competir por hasta $30 millones de pesos. Los detalles específicos de las pruebas serán revelados durante el evento.",
  },
  {
    q: "¿Necesito ser experto en finanzas para participar?",
    a: "No. Valorizate está diseñado para cualquier persona interesada en mejorar su relación con el dinero. Si te interesa el ahorro, presupuesto, inversión, crédito, emprendimiento o finanzas personales eres bienvenido.",
  },
  {
    q: "¿Qué aprenderé durante el evento?",
    a: "Tendrás acceso a conferencias cortas, prácticas y enfocadas en acciones concretas que puedes aplicar en tu vida financiera. Queremos que salgas con ideas, herramientas y estrategias que te ayuden a tomar mejores decisiones con tu dinero.",
  },
  {
    q: "¿Qué incluye mi entrada?",
    a: "Tu entrada incluye: participación oficial en el concurso, acceso a todas las conferencias, espacio de networking entre sesiones, kit de bienvenida y beneficios de patrocinadores, y la oportunidad de competir por hasta $30 millones de pesos.",
  },
  {
    q: "¿Quiénes pueden participar?",
    a: "Cualquier persona mayor de 18 años. No importa si eres estudiante, profesional, emprendedor, colaborador o empresario. Si te interesa aprender y demostrar lo que sabes sobre dinero, puedes participar.",
  },
  {
    q: "¿Debo llevar algo al evento?",
    a: "Solo tu documento de identidad y muchas ganas de aprender y concursar. Cualquier requerimiento adicional será informado previamente a los participantes registrados.",
  },
  {
    q: "¿Cuántas personas participarán?",
    a: "Los cupos son limitados para garantizar una experiencia dinámica y organizada. Una vez se alcance la capacidad del auditorio, las inscripciones serán cerradas.",
  },
  {
    q: "¿Dónde se realizará el evento?",
    a: "En el Auditorio Orígenes de la Universidad EAN, en Bogotá, Colombia.",
  },
  {
    q: "¿A qué hora inicia el evento?",
    a: "Iniciamos registro a las 8:00 AM, llega puntual para no perderte de las instrucciones y los elementos con los que participarás.",
  },
  {
    q: "¿Cómo se selecciona al ganador?",
    a: "El proceso de clasificación será completamente transparente y estará basado en el desempeño de cada participante durante las diferentes etapas de la competencia. Los resultados se reflejarán en tiempo real a través del sistema de evaluación del evento.",
  },
  {
    q: "¿Puedo asistir aunque no llegue a la final?",
    a: "Por supuesto. Además de concursar, vivirás una experiencia única de aprendizaje, networking y conexión con organizaciones líderes del ecosistema financiero.",
  },
  {
    q: "¿Quién organiza Valorizate?",
    a: "Valorizate es organizado por Karem Suárez, Embajadora de la Educación Financiera con más de 13 años generando contenido de Finanzas Personales, y CLEFI, empresa líder en el sector educativo con más de 10 años desarrollando los programas de educación financiera de diferentes instituciones.",
  },
  {
    q: "¿Qué hace diferente a Valorizate?",
    a: "Es el primer concurso de educación financiera de América Latina. Una experiencia donde el conocimiento tiene valor real y donde las decisiones financieras inteligentes pueden acercarte a un premio de hasta $30 millones de pesos. Te pagamos por lo que sabes, no por lo que tienes.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border border-[#E0E0E0] rounded-lg overflow-hidden bg-white"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer hover:bg-[#F5F5F5] transition-colors text-[#0A0A0A]"
          >
            <span className="font-[family-name:var(--font-display)] font-bold text-lg uppercase tracking-wide pr-4">
              {faq.q}
            </span>
            <svg
              className={`w-5 h-5 shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`grid transition-all duration-300 ease-in-out ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
          >
            <div className="overflow-hidden">
              <p className="px-6 pb-5 font-[family-name:var(--font-body)] text-[#555555] leading-relaxed">
                {faq.a}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
