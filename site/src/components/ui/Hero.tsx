import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  backgroundClass?: string;
  backgroundImage?: string;
}

export default function Hero({
  title,
  subtitle,
  children,
  backgroundClass = 'bg-gradient-hero',
  backgroundImage,
}: HeroProps) {
  const sectionStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(135deg, rgba(255, 113, 105, 0.15) 0%, rgba(255, 222, 2, 0.15) 100%), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }
    : {};

  return (
    <section
      className={`min-h-screen flex items-center justify-center ${backgroundClass}`}
      style={sectionStyle}
    >
      <div className="container-custom text-center py-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-hero font-bold"
            style={{
              background: 'linear-gradient(135deg, #FF7169 0%, #FFDE02 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: 'var(--space-lg)',
            }}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-h3 max-w-3xl mx-auto"
              style={{
                color: 'var(--md-neutral-700)',
                marginBottom: 'var(--space-2xl)',
                lineHeight: 'var(--line-height-body)',
              }}
            >
              {subtitle}
            </motion.p>
          )}

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-md justify-center items-center"
            >
              {children}
            </motion.div>
          )}
        </motion.div>

        {/* 装饰性元素 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{ zIndex: -1 }}
        >
          {/* 左上角装饰圆 */}
          <div
            className="absolute rounded-full blur-3xl"
            style={{
              top: '-10%',
              left: '-5%',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(111, 194, 255, 0.15) 0%, transparent 70%)',
            }}
          />

          {/* 右下角装饰圆 */}
          <div
            className="absolute rounded-full blur-3xl"
            style={{
              bottom: '-10%',
              right: '-5%',
              width: '500px',
              height: '500px',
              background: 'radial-gradient(circle, rgba(255, 113, 105, 0.12) 0%, transparent 70%)',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
