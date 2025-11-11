import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollDeckSection = ({ children, index }: { children: React.ReactNode; index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // each section will move upward slightly as you scroll
  const y = useTransform(scrollYProgress, [0, 1], ["10vh", "-10vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  return (
    <section ref={ref} className="section">
      <motion.div
        style={{ y, opacity, scale}}
        className="section-inner will-change-transform"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default ScrollDeckSection;
    