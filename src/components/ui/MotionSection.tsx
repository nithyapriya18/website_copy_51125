import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

interface MotionSectionProps {
  children: React.ReactNode;
  delay?: number;
}

const MotionSection = ({ children, delay = 0 }: MotionSectionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.9]);

  return (
    <motion.section
      ref={ref}
      style={{ y: translateY, opacity }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      className="will-change-transform"
    >
      {children}
    </motion.section>
  );
};

export default MotionSection;
