'use client';

import { motion } from "framer-motion";

export default function AnimatedSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative px-4 py-32 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center overflow-hidden z-10"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center justify-center gap-8 pt-8 mx-auto mb-8 relative"
      >
        {children}
      </motion.div>
    </motion.section>
  );
}
