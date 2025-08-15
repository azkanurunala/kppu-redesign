
'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function AnimatedCard({ icon, title, description }: AnimatedCardProps) {
  return (
    <motion.div
      whileHover="hover"
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      variants={{
        hover: { y: -10, scale: 1.05 }
      }}
      className="relative p-8 bg-background rounded-2xl shadow-lg overflow-hidden"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="relative z-10 text-center">
        <motion.div
          className="mx-auto mb-6 flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 text-primary"
          variants={{
            hover: {
              scale: 1.2,
              rotate: 15,
              transition: { duration: 0.3, yoyo: Infinity, ease: 'easeInOut' }
            }
          }}
        >
          {icon}
        </motion.div>
        <h3 className="text-2xl font-bold font-poppins mb-4 text-primary-dark dark:text-white">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"
        style={{
          transform: 'translateZ(-50px)',
        }}
        variants={{
          hover: { opacity: 0.5, scale: 1.2 }
        }}
      />
    </motion.div>
  );
}
