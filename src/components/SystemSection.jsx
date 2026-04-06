import { motion } from 'motion/react';

export default function SystemSection() {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

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

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {modules.map((module, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(255, 143, 111, 0.2)"
              }}
              className="group surface-container p-8 rounded-xl hover:bg-surface-bright transition-all duration-500 flex flex-col gap-6 border border-outline-variant/10 cursor-default relative overflow-hidden"
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              <motion.span
                className="material-symbols-outlined text-primary text-4xl relative z-10"
                whileHover={{ rotate: 10, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {module.icon}
              </motion.span>
              <div className="relative z-10">
                <motion.h4
                  className="font-headline font-bold text-lg mb-2"
                  whileHover={{ color: "#ff8f6f" }}
                  transition={{ duration: 0.3 }}
                >
                  {module.title}
                </motion.h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">{module.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
