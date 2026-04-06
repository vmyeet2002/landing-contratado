import { motion } from 'motion/react';
import { useState } from 'react';

export default function Footer({ onNewsletterClick }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const navLinks = [
    { label: "MENTORSHIP", href: "#" },
    { label: "CURRICULUM", href: "#" },
    { label: "ALUMNI", href: "#" },
    { label: "CONTACT", href: "#" }
  ];

  const socialLinks = [
    {
      label: "YouTube",
      href: "https://www.youtube.com/@DataScienceForBusiness",
      icon: "play_circle"
    },
    {
      label: "Web",
      href: "https://datascience4business.com",
      icon: "globe"
    },
    {
      label: "Instagram",
      href: "https://instagram.com",
      icon: "photo_camera"
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      icon: "business"
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 2000);
    }
  };

  return (
    <footer className="bg-surface-bright w-full py-16 border-t border-outline-variant/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-headline font-bold text-on-background">
              DS4B
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              DataScience ForBusiness. Transformamos candidatos invisibles en candidatos contratables en 45 días con STITCH.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm font-label font-semibold uppercase tracking-widest text-on-background">
              Recursos
            </h4>
            <nav className="space-y-2">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  className="block text-sm text-on-surface-variant hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm font-label font-semibold uppercase tracking-widest text-on-background">
              Síguenos
            </h4>
            <div className="space-y-2">
              {socialLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span className="material-symbols-outlined text-base">
                    {link.icon}
                  </span>
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-sm font-label font-semibold uppercase tracking-widest text-on-background">
              Newsletter
            </h4>
            <form onSubmit={handleSubscribe} className="relative">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="flex-1 px-3 py-2 rounded-lg bg-surface-container border border-outline-variant/50 text-on-background placeholder-on-surface-variant/50 text-sm focus:outline-none focus:border-primary transition-colors"
                  disabled={subscribed}
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-primary/20 border border-primary/50 text-primary hover:bg-primary/30 transition-colors disabled:opacity-50 text-sm font-semibold"
                  disabled={subscribed || !email}
                >
                  {subscribed ? '✓' : 'Ok'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-outline-variant/10 pt-8">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-xs text-on-surface-variant uppercase tracking-widest">
              © 2024 DATASCIENCE FORBUSINESS. TODOS LOS DERECHOS RESERVADOS.
            </p>
            <div className="flex gap-4 text-xs text-on-surface-variant">
              <a href="#" className="hover:text-primary transition-colors">
                Privacidad
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Términos
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Contacto
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
