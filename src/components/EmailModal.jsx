import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function EmailModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
        onClose();
      }, 2000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="glass-panel p-8 md:p-12 rounded-3xl border border-primary/20 shadow-2xl w-96">
              {!submitted ? (
                <>
                  <h3 className="text-2xl font-headline font-bold mb-2">
                    ¡Perfecto!
                  </h3>
                  <p className="text-on-surface-variant mb-6">
                    Ingresa tu email para comenzar tu transformación
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu@email.com"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-surface-container border border-outline-variant/50 text-on-background placeholder-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        autoFocus
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="btn-metallic-orange w-full text-on-primary px-6 py-3 rounded-full font-bold relative"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">Comenzar Ahora</span>
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 -z-10 blur-lg"
                        animate={{
                          opacity: [0.3, 0.8, 0.3],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      />
                    </motion.button>

                    <button
                      type="button"
                      onClick={onClose}
                      className="w-full px-6 py-2 rounded-full text-on-surface-variant hover:bg-surface-container transition-colors"
                    >
                      Cancelar
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  className="text-center space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-primary/20 mx-auto flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="material-symbols-outlined text-primary text-3xl">
                      check_circle
                    </span>
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-bold">¡Email registrado!</h4>
                    <p className="text-sm text-on-surface-variant">Te enviaremos la información pronto</p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
