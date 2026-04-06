import { motion } from "motion/react";

export default function ShimmerText({
  children,
  className = "",
  duration = 1.5,
  delay = 1.5,
}) {
  return (
    <div className="group overflow-hidden">
      <div>
        <motion.div
          className={`inline-block [--shimmer-contrast:rgba(255,255,255,0.6)] dark:[--shimmer-contrast:rgba(0,0,0,0.5)] ${className}`}
          style={{
            WebkitTextFillColor: "transparent",
            background:
              "currentColor linear-gradient(to right, currentColor 0%, var(--shimmer-contrast) 40%, var(--shimmer-contrast) 60%, currentColor 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            backgroundRepeat: "no-repeat",
            backgroundSize: "50% 200%",
          }}
          initial={{
            backgroundPositionX: "250%",
          }}
          animate={{
            backgroundPositionX: ["-100%", "250%"],
          }}
          transition={{
            duration: duration,
            delay: delay,
            repeat: Infinity,
            repeatDelay: 1.5,
            ease: "linear",
          }}
        >
          <span>{children}</span>
        </motion.div>
      </div>
    </div>
  );
}
