import stitchLogo from '../assets/stitch-logo.png';
import { motion } from 'motion/react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      <div className="flex justify-start items-center w-full px-8 py-6 max-w-7xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className=""
        >
          <img alt="DS4B Logo" className="h-8" src={stitchLogo} />
        </motion.div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-outline-variant/20 to-transparent"></div>
    </header>
  );
}
