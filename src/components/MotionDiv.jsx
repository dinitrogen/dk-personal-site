import { motion } from "framer-motion";

function MotionDiv({ children, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: delay, duration: 0.3 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default MotionDiv;
