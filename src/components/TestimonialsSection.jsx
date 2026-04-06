import { motion } from 'motion/react';
import TestimonialCarousel from './ui/testimonial-v2';

export default function TestimonialsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-24 px-8 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Header */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-background mb-4">
            Casos de Éxito: De Invisible a Contratable
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            Candidatos reales que transformaron su búsqueda en 45 días o menos. Sus historias pueden ser la tuya.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center py-12"
        >
          <TestimonialCarousel />
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-16 pt-16 border-t border-outline-variant/10"
        >
          <div className="text-center">
            <p className="text-3xl font-bold text-primary mb-2">+500</p>
            <p className="text-on-surface-variant text-sm">Alumnos Activos</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary mb-2">87%</p>
            <p className="text-on-surface-variant text-sm">Tasa de Éxito</p>
          </div>
          <div className="text-center col-span-2 sm:col-span-1">
            <p className="text-3xl font-bold text-primary mb-2">45 días</p>
            <p className="text-on-surface-variant text-sm">Promedio de Transformación</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
