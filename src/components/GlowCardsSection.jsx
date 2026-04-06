import { motion } from 'motion/react';
import { GlowCard } from './GlowCard';

export default function GlowCardsSection() {
  const modules = [
    { icon: "stars", title: "Marca Personal", desc: "El arma de posicionamiento para que las empresas te persigan a ti." },
    { icon: "language", title: "Presencia Online", desc: "Cómo construir autoridad en LinkedIn sin quemarte publicando a diario." },
    { icon: "target", title: "Tu Trabajo Ideal", desc: "Elige tu destino profesional con precisión quirúrgica y datos reales." },
    { icon: "visibility_off", title: "Empleos Ocultos", desc: "Las 4 fuentes secretas donde está el 80% de los mejores trabajos." },
    { icon: "folder_special", title: "Portfolio WOW", desc: "Convierte proyectos técnicos en casos de negocio que impresionen a hiring managers." },
    { icon: "description", title: "CV Irresistible", desc: "Hacks para superar sistemas ATS y contar una historia imposible de ignorar." },
    { icon: "forum", title: "Dominar el Proceso", desc: "Qué decir en entrevistas de RRHH, pruebas técnicas y con los jefes." },
    { icon: "payments", title: "Negociación Salarial", desc: "Frameworks para conseguir miles de euros más sin parecer codicioso." }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          className="text-center mb-20 space-y-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-background">
            El Sistema de 8 Módulos
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
            Un recorrido integral desde el anonimato hasta la firma de tu contrato.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((module, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <GlowCard
                glowColor="orangeMetal"
                customSize
                width={280}
                height={340}
                className="flex flex-col items-center justify-center text-center p-6"
              >
                <div className="flex flex-col items-center gap-4 h-full justify-center">
                  <span className="material-symbols-outlined text-primary text-5xl">
                    {module.icon}
                  </span>
                  <h3 className="text-lg font-headline font-bold text-on-background">
                    {module.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {module.desc}
                  </p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
