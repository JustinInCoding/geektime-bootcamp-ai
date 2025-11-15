import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode | string;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({
  icon,
  title,
  description,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="md-card md-card-interactive group"
    >
      <div
        className="text-5xl transition-transform duration-300 group-hover:scale-110"
        style={{
          filter: 'drop-shadow(0 4px 6px rgba(255, 113, 105, 0.2))',
          marginBottom: 'var(--space-lg)',
        }}
      >
        {typeof icon === 'string' ? icon : icon}
      </div>
      <h3
        className="text-h3 font-semibold"
        style={{
          color: 'var(--md-neutral-900)',
          marginTop: 0,
          marginBottom: 'var(--space-md)',
        }}
      >
        {title}
      </h3>
      <p
        className="text-body"
        style={{
          color: 'var(--md-neutral-700)',
          marginTop: 0,
          marginBottom: 0,
          lineHeight: 'var(--line-height-body)',
        }}
      >
        {description}
      </p>

      {/* 装饰性渐变边框效果 */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          borderRadius: 0,
          background: 'linear-gradient(135deg, rgba(255, 113, 105, 0.1) 0%, rgba(111, 194, 255, 0.1) 100%)',
          zIndex: -1,
        }}
      />
    </motion.div>
  );
}
