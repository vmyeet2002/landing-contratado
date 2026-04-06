import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';

// --- Data ---
const testimonials = [
  {
    text: "Llevo 8 meses buscando trabajo en data science y estaba a punto de rendirme. Con nuestro programa cambió todo: mejoré mi LinkedIn, pulí mi CV y en 6 semanas tenía 3 ofertas. Ahora trabajo en una startup que paga un 30% más. ¡Increíble!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Carlos Mendez",
    role: "Data Scientist | Startup Tech",
  },
  {
    text: "Pensé que con mi portfolio en GitHub era suficiente. El módulo de 'Portfolio WOW' me enseñó a contar historias de negocio, no solo código. Ahí fue cuando empecé a recibir calls de recruiters de verdad.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "María González",
    role: "Data Analyst | Corporate",
  },
  {
    text: "El módulo de Negociación Salarial me sacó 5.000€ más anuales. Solo eso ya pagó el curso 10 veces. Ahora entiendo cómo jugar este juego.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Juan Rodríguez",
    role: "Analytics Manager | Finance",
  },
  {
    text: "Vengo de un bootcamp y no sabía ni por dónde empezar. Los 'Empleos Ocultos' fueron un game changer. Encontré una posición que no estaba en LinkedIn y ahora trabajo con un equipo increíble.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sofia Fernández",
    role: "Junior Data Scientist | Agencia",
  },
  {
    text: "Mi presencia online era inexistente. Después de seguir nuestro programa, publiqué content sobre análisis de datos y linkedin empezó a traerme oportunidades sin aplicar. Trabajo soñado encontrado.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Pedro Sánchez",
    role: "Data Engineer | Consultora",
  },
  {
    text: "Los 'Guiones de Entrevista' me prepararon para cada tipo de pregunta. En mi última entrevista técnica fue como si hubiera ensayado exactamente ese escenario. Oferta al día siguiente.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Laura Martín",
    role: "ML Engineer | Tech Scale-up",
  },
  {
    text: "Cambié mi CV completamente. Pasé de un documento plano a una narrativa impactante usando los hacks de ATS. El cambio fue brutal: de 0 callbacks a 7 en 3 semanas.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Andrés López",
    role: "Business Analyst | E-commerce",
  },
  {
    text: "Lo que más me sorprendió fue el módulo de 'Marca Personal'. Nunca pensé que ser 'visible' en el sector me traería tanto valor. Ahora recibo propuestas sin buscar.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Elena Ruiz",
    role: "Data Strategist | Banco",
  },
  {
    text: "Invertí 247€ y saqué 25.000€ más anuales en esta negociación. El ROI es absurdo. Además, ahora tengo un framework que uso en cada entrevista.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "David Torres",
    role: "Senior Analytics | Fintech",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// --- Sub-Components ---
const TestimonialsColumn = (props) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <motion.li
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? "true" : "false"}
                  tabIndex={index === 1 ? -1 : 0}
                  whileHover={{
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  whileFocus={{
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  className="p-10 rounded-3xl border border-outline-variant/20 shadow-lg shadow-black/5 max-w-xs w-full bg-surface dark:bg-surface-dim transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  <blockquote className="m-0 p-0">
                    <p className="text-on-surface-variant leading-relaxed font-normal m-0 transition-colors duration-300">
                      {text}
                    </p>
                    <footer className="flex items-center gap-3 mt-6">
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={`Avatar of ${name}`}
                        className="h-10 w-10 rounded-full object-cover ring-2 ring-outline-variant/20 group-hover:ring-primary/30 transition-all duration-300 ease-in-out"
                      />
                      <div className="flex flex-col">
                        <cite className="font-semibold not-italic tracking-tight leading-5 text-on-background transition-colors duration-300">
                          {name}
                        </cite>
                        <span className="text-sm leading-5 tracking-tight text-on-surface-variant mt-0.5 transition-colors duration-300">
                          {role}
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  );
};

export default function TestimonialCarousel() {
  return (
    <div
      className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
      role="region"
      aria-label="Scrolling Testimonials"
    >
      <TestimonialsColumn testimonials={firstColumn} duration={15} />
      <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
      <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
    </div>
  );
}
