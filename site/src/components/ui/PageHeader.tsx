import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export default function PageHeader({ title, subtitle, children }: PageHeaderProps) {
  return (
    <section
      className="border-b"
      style={{
        backgroundColor: 'var(--md-white)',
        borderBottom: '3px solid var(--md-black)',
        paddingTop: 'var(--space-2xl)',
        paddingBottom: 'var(--space-3xl)',
      }}
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-4xl"
        >
          <h1
            className="font-bold"
            style={{
              fontSize: 'var(--font-h1)',
              lineHeight: 'var(--line-height-heading)',
              marginTop: 0,
              marginBottom: 'var(--space-lg)',
              background: 'linear-gradient(135deg, #FF7169 0%, #6FC2FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {title}
          </h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                fontSize: 'var(--font-h3)',
                lineHeight: 'var(--line-height-body)',
                color: 'var(--md-neutral-700)',
                marginTop: 0,
                marginBottom: 'var(--space-xl)',
              }}
            >
              {subtitle}
            </motion.p>
          )}

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap"
              style={{ gap: 'var(--space-md)' }}
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
