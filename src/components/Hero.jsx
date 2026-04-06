import { motion } from 'motion/react';
import ShimmerText from './ShimmerText';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const handleScrollToOffer = () => {
    const offerSection = document.getElementById('offer');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const avatarImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAVnM4taTqYszT7BBMa0-9piOo3czDtOlx-HUXDXdl7CqE40w7NFjCecCeAsv4_hvaLmfsF3L7A-cchp2XbqsYnN3YRmTf9gB4Ex8IivgTpjlWPH5H42pxQMaYdevzJUsFT0_Qb_ERcZYxt5OknxVz8JRFrRNPW5p7CDQsgpT6SxFCh0kJWQvAE3FVzrvxmRdqqV4thGki4YAUOuqVysQQob2q8VjXQ611yT9mbh-XXKhC1DA0ItlNIs_CDh3Z-ADTH3iu5C_JJQ5U",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAi5qRVva5NOJAzKRqB7AAL5Ayy3qya1Wp1WP1pszl63BxIvfcy86sRsgIszXzrFV1y_rwPUMPrsk5RMOFsbtSo7nd0vuStI6nGSwopgKMXrv7aRMvvpOrXWInzEaUopeB6SJ8khNrSV8RZjzfw-fziKOrMtbl1xFpATLUsSWD8-0-qRwOpmjuLM0ZHQILAUmHZzP3uQd8B2Ya_mZnd24P9AkE8Y6nzBai7Hn7VhD_Zyz9Gn0OubFrQJhJdISoWByu6Hw2G2ktAvP8",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAhxS_tGJBWu9hPupNYeaikRQ-ZNzYnOsgh0KVlFdvl3AMpzeesoW3i0YjThM66wqkf7bpGGweM8IrGi_9C8-jZGC9FxuTBupkvXL-SgZxb9rqJf1FpPTrUGIQudBXTBgKOWyDhKwLJQNNxxRRPz5HUAhE9jsU3P5zTgvZGPkK_k8jFzzu0jJdme1j0kuuWUe_VyddZ5eenVSJZO01Rk4fzXK_C5MO7lAmHBLIA6h5mw6vJWJ6iBSj_iI-NYxNrs_3jV6bZTOcRo5k",
  ];

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
    <section className="relative pt-40 pb-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>

      <motion.div
        className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div variants={itemVariants}>
            <ShimmerText className="text-5xl md:text-7xl font-headline font-bold leading-[1.1] tracking-tighter text-on-background block">
              De Candidato Invisible a Candidato Contratable en 45 días.
            </ShimmerText>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-on-surface-variant font-light max-w-2xl leading-relaxed"
          >
            Un sistema diseñado específicamente para analistas y científicos de datos. El arma secreta para arrasar en procesos de selección.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 items-start sm:items-center"
          >
            <motion.button
              onClick={handleScrollToOffer}
              className="btn-metallic-orange text-on-primary px-10 py-5 rounded-full font-bold text-lg relative"
              style={{ cursor: 'pointer' }}
              whileHover={{
                scale: 1.12,
                boxShadow: "0 20px 60px rgba(255, 143, 111, 0.6)"
              }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <span className="relative z-10">Contratar ya</span>
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 -z-10 blur-lg"
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </motion.button>

            <motion.div
              className="flex items-center gap-3"
              whileHover={{ x: 5 }}
            >
              <span className="flex -space-x-3">
                {avatarImages.map((url, idx) => (
                  <motion.div
                    key={idx}
                    className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container-highest flex items-center justify-center overflow-hidden"
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img alt="Student" src={url} className="w-full h-full object-cover" />
                  </motion.div>
                ))}
              </span>
              <span className="text-sm font-label text-on-surface-variant">+500 alumnos ya dentro</span>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="pt-8 border-t border-outline-variant/10"
          >
            <p className="text-sm font-label text-on-surface-variant/80 italic">
              "Más de 5.000 vacantes de Data en España, pero la mayoría de candidatos no recibe ni una llamada."
            </p>
          </motion.div>
        </div>

        {/* Right Visual Element */}
        <motion.div
          className="lg:col-span-5 relative"
          variants={itemVariants}
        >
          <motion.div
            className="glass-panel p-8 rounded-2xl border border-outline-variant/20 shadow-2xl relative overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent"></div>

            <div className="h-64 relative z-10 flex items-center justify-center">
              <svg
                className="w-full h-full line-graph-svg"
                viewBox="0 0 400 200"
                preserveAspectRatio="none"
              >
                {/* Grid lines */}
                <line x1="0" x2="400" y1="40" y2="40" stroke="#484847" strokeDasharray="4" strokeWidth="0.5" />
                <line x1="0" x2="400" y1="80" y2="80" stroke="#484847" strokeDasharray="4" strokeWidth="0.5" />
                <line x1="0" x2="400" y1="120" y2="120" stroke="#484847" strokeDasharray="4" strokeWidth="0.5" />
                <line x1="0" x2="400" y1="160" y2="160" stroke="#484847" strokeDasharray="4" strokeWidth="0.5" />

                {/* Baseline comparison */}
                <path d="M0,180 Q100,175 200,170 T400,165" fill="none" stroke="#adaaaa" strokeWidth="1" opacity="0.3" />

                {/* Main Primary Line - Animated with continuous upward movement */}
                <motion.path
                  d="M0,180 Q50,160 100,140 T200,80 T300,50 T400,20"
                  fill="none"
                  stroke="#ff8f6f"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  strokeDasharray="600"
                  initial={{ strokeDashoffset: 600 }}
                  animate={{
                    strokeDashoffset: 0,
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="group-hover:opacity-100"
                  style={{
                    filter: "drop-shadow(0 0 12px rgba(255, 143, 111, 0.8))"
                  }}
                />

                {/* Animated glow line - creates upward flowing effect */}
                <motion.path
                  d="M0,180 Q50,160 100,140 T200,80 T300,50 T400,20"
                  fill="none"
                  stroke="#ffaa8a"
                  strokeLinecap="round"
                  strokeWidth="4"
                  strokeDasharray="100"
                  initial={{ strokeDashoffset: 100, opacity: 0.8 }}
                  animate={{
                    strokeDashoffset: -200,
                    opacity: [0.8, 0, 0.8]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    filter: "blur(2px) drop-shadow(0 0 8px rgba(255, 170, 138, 0.6))"
                  }}
                />

                {/* Glow area under line */}
                <path d="M0,180 Q50,160 100,140 T200,80 T300,50 T400,20 L400,200 L0,200 Z" fill="url(#lineGradient)" opacity="0.1" />

                <defs>
                  <linearGradient id="lineGradient" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#ff8f6f', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#ff8f6f', stopOpacity: 0 }} />
                  </linearGradient>
                </defs>

                {/* Key point */}
                <circle cx="400" cy="20" r="4" fill="#ff8f6f" className="animate-pulse" />
              </svg>
            </div>

            <div className="mt-8 space-y-2">
              <h3 className="text-lg font-headline font-bold">Impacto del Sistema</h3>
              <p className="text-sm text-on-surface-variant">Tasa de respuesta media tras optimización</p>
            </div>

            {/* Floating Data Points */}
            <motion.div
              className="absolute top-10 right-10 flex items-center gap-2 bg-surface-bright/50 px-3 py-1 rounded-full border border-white/5"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
              <span className="text-[10px] font-label text-on-surface tracking-widest">+87% SUCCESS</span>
            </motion.div>

            <div className="absolute top-6 right-32 bg-primary text-on-primary text-[10px] px-2 py-1 rounded font-bold shadow-lg">
              CONTRATADO
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
