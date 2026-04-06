import { motion } from 'motion/react';

export default function OfferSection() {
  const features = [
    "Acceso Vitalicio",
    "Plantillas CV & LinkedIn",
    "Guiones de Entrevista",
    "Garantía de Satisfacción"
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="offer">
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-8 text-center">
        <motion.div
          className="glass-panel p-12 md:p-16 rounded-3xl border border-primary/20 shadow-2xl space-y-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{
            boxShadow: "0 30px 60px rgba(255, 143, 111, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
          }}
        >
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-headline font-bold">
              Tu futuro en Data empieza hoy
            </h2>
            <p className="text-xl text-on-surface-variant max-w-xl mx-auto">
              Acceso inmediato para siempre, plantillas, checklists y guiones probados.
            </p>
          </motion.div>

          {/* Pricing */}
          <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.span
              className="text-on-surface-variant line-through text-lg"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              497€
            </motion.span>
            <div className="flex items-start justify-center gap-1">
              <motion.span
                className="text-6xl md:text-8xl font-headline font-extrabold text-on-background"
                whileHover={{ scale: 1.1, color: "#ff8f6f" }}
              >
                247€
              </motion.span>
              <span className="text-xl font-bold mt-4">+ IVA</span>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-md mx-auto"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.4 }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                whileHover={{ x: 10, color: "#ff8f6f" }}
                className="flex items-center gap-2 text-sm text-on-surface-variant cursor-pointer"
              >
                <motion.span
                  className="material-symbols-outlined text-primary text-sm"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  check_circle
                </motion.span>
                {feature}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href="#"
            className="btn-metallic-orange inline-block w-full sm:w-auto text-on-primary px-16 py-6 rounded-full font-bold text-xl relative"
            whileHover={{
              scale: 1.12,
              boxShadow: "0 25px 70px rgba(255, 143, 111, 0.7)"
            }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <span className="relative z-10">Comprar Ahora</span>
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 -z-10 blur-lg"
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </motion.a>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-outline-variant/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.div
              className="flex items-center gap-2 opacity-60 cursor-pointer"
              whileHover={{ opacity: 1, scale: 1.05 }}
            >
              <motion.span
                className="material-symbols-outlined"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                lock
              </motion.span>
              <span className="text-xs font-label">PAGO 100% SEGURO</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 opacity-60 cursor-pointer"
              whileHover={{ opacity: 1, scale: 1.05 }}
            >
              <motion.span
                className="material-symbols-outlined"
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                credit_card
              </motion.span>
              <span className="text-xs font-label">VISA, MASTERCARD, PAYPAL</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
