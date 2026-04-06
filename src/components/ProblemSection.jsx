import { motion } from 'motion/react';

export default function ProblemSection() {
  const problems = [
    { icon: "block", text: "¿Llevas meses enviando CVs y solo recibes silencio o rechazos automáticos?" },
    { icon: "school", text: "¿Tienes cursos, certificaciones y portfolio en GitHub, pero no te llaman?" },
    { icon: "work_history", text: "¿Ves ofertas \"junior\" que piden 2-3 años de experiencia mínima?" }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Content */}
          <div className="space-y-6">
            <ul className="space-y-6">
              {problems.map((item, idx) => (
                <motion.li
                  key={idx}
                  className="flex gap-4 items-start cursor-pointer group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.span
                    className="material-symbols-outlined text-error mt-1 flex-shrink-0"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.icon}
                  </motion.span>
                  <p className="text-lg text-on-surface-variant font-light group-hover:text-on-surface transition-colors duration-300">
                    {item.text}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right - Cost Card */}
          <motion.div
            className="glass-panel p-10 rounded-2xl border border-error-container/20 border-l-4 border-l-error bg-error-container/5 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{
              boxShadow: "0 20px 40px rgba(255, 107, 107, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
            }}
          >
            {/* Animated background glow on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-error/10 to-transparent opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            <motion.h3
              className="text-2xl font-headline font-bold mb-6 text-on-background relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              El Coste de la Inacción
            </motion.h3>

            <motion.p
              className="text-4xl md:text-5xl font-headline font-extrabold text-error mb-4 relative z-10"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ scale: 1.05, color: "#ff716c" }}
            >
              Hasta 24.000€
            </motion.p>

            <motion.p
              className="text-on-surface-variant leading-relaxed mb-8 relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Cada mes sin trabajo pierdes entre <span className="text-on-surface font-bold">2.000€ y 4.000€</span>. Si llevas 6 meses buscando de forma ineficiente, ya has dejado de ingresar el equivalente a un coche nuevo.
            </motion.p>

            <motion.div
              className="flex items-center gap-2 text-sm font-label uppercase tracking-wider text-error-dim relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                className="material-symbols-outlined text-sm"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                warning
              </motion.span>
              El mercado no te espera
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
