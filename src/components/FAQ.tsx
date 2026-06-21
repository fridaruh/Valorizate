"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Valorizate es un sorteo o una rifa?",
    a: "No. Valorizate es un concurso de Educacion Financiera. Los participantes avanzaran a traves de diferentes fases y actividades disenadas para evaluar su capacidad de tomar decisiones financieras, resolver retos y demostrar sus conocimientos. Aqui no gana la suerte. Gana quien mejor se desempene.",
  },
  {
    q: "Como puedo ganar los $30 millones?",
    a: "Los participantes deberan superar distintas etapas durante el evento. A medida que avancen en el concurso, iran clasificando a nuevas rondas hasta llegar a la final, donde tendran la oportunidad de competir por hasta $30 millones de pesos. Los detalles especificos de las pruebas seran revelados durante el evento.",
  },
  {
    q: "Necesito ser experto en finanzas para participar?",
    a: "No. Valorizate esta disenado para cualquier persona interesada en mejorar su relacion con el dinero. Si te interesa el ahorro, presupuesto, inversion, credito, emprendimiento o finanzas personales eres bienvenido.",
  },
  {
    q: "Que aprendere durante el evento?",
    a: "Tendras acceso a conferencias cortas, practicas y enfocadas en acciones concretas que puedes aplicar en tu vida financiera. Queremos que salgas con ideas, herramientas y estrategias que te ayuden a tomar mejores decisiones con tu dinero.",
  },
  {
    q: "Que incluye mi entrada?",
    a: "Tu entrada incluye: participacion oficial en el concurso, acceso a todas las conferencias, espacio de networking entre sesiones, kit de bienvenida y beneficios de patrocinadores, y la oportunidad de competir por hasta $30 millones de pesos.",
  },
  {
    q: "Quienes pueden participar?",
    a: "Cualquier persona mayor de 18 anos. No importa si eres estudiante, profesional, emprendedor, colaborador o empresario. Si te interesa aprender y demostrar lo que sabes sobre dinero, puedes participar.",
  },
  {
    q: "Debo llevar algo al evento?",
    a: "Solo tu documento de identidad y muchas ganas de aprender y concursar. Cualquier requerimiento adicional sera informado previamente a los participantes registrados.",
  },
  {
    q: "Cuantas personas participaran?",
    a: "Los cupos son limitados para garantizar una experiencia dinamica y organizada. Una vez se alcance la capacidad del auditorio, las inscripciones seran cerradas.",
  },
  {
    q: "Donde se realizara el evento?",
    a: "En el Auditorio Origenes de la Universidad EAN, en Bogota, Colombia.",
  },
  {
    q: "A que hora inicia el evento?",
    a: "Iniciamos registro a las 8:00 AM, llega puntual para no perderte de las instrucciones y los elementos con los que participaras.",
  },
  {
    q: "Como se selecciona al ganador?",
    a: "El proceso de clasificacion sera completamente transparente y estara basado en el desempeno de cada participante durante las diferentes etapas de la competencia. Los resultados se reflejaran en tiempo real a traves del sistema de evaluacion del evento.",
  },
  {
    q: "Puedo asistir aunque no llegue a la final?",
    a: "Por supuesto. Ademas de concursar, viviras una experiencia unica de aprendizaje, networking y conexion con organizaciones lideres del ecosistema financiero.",
  },
  {
    q: "Quien organiza Valorizate?",
    a: "Valorizate es organizado por Karem Suarez, Embajadora de la Educacion Financiera con mas de 13 anos generando contenido de Finanzas Personales, y CLEFI, empresa lider en el sector educativo con mas de 10 anos desarrollando los programas de educacion financiera de diferentes instituciones.",
  },
  {
    q: "Que hace diferente a Valorizate?",
    a: "Es el primer concurso de educacion financiera de America Latina. Una experiencia donde el conocimiento tiene valor real y donde las decisiones financieras inteligentes pueden acercarte a un premio de hasta $30 millones de pesos. Te pagamos por lo que sabes, no por lo que tienes.",
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
