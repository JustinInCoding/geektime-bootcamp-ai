import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';
import { getUrl } from '../../utils/url';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface ToolShowcaseProps {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: Feature[];
  href?: string;
  reverse?: boolean;
  imageUrl?: string;
}

export default function ToolShowcase({
  id,
  name,
  tagline,
  description,
  features,
  href,
  reverse = false,
  imageUrl,
}: ToolShowcaseProps) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } gap-3xl items-center`}
    >
      {/* Image/Icon */}
      <ScrollReveal
        animation={reverse ? 'slideInRight' : 'slideInLeft'}
        className="flex-1"
      >
        <div className="relative aspect-square max-w-md mx-auto">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full overflow-hidden"
            style={{
              boxShadow: 'var(--shadow-xl)',
              borderRadius: 0,
            }}
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center"
                style={{
                  background: 'var(--md-gradient-sky)',
                }}
              >
                <span
                  className="text-8xl font-bold opacity-90"
                  style={{ color: 'var(--md-white)' }}
                >
                  {name[0]}
                </span>
              </div>
            )}
          </motion.div>

          {/* 装饰性渐变 */}
          <div
            className="absolute -inset-4 opacity-30 blur-2xl -z-10"
            style={{
              background: reverse
                ? 'var(--md-gradient-primary)'
                : 'var(--md-gradient-sky)',
              borderRadius: 0,
            }}
          />
        </div>
      </ScrollReveal>

      {/* Content */}
      <ScrollReveal
        animation={reverse ? 'slideInLeft' : 'slideInRight'}
        className="flex-1"
      >
        <div>
          <div style={{ marginBottom: 'var(--space-lg)' }}>
            <h2
              className="text-h1 font-bold"
              style={{
                background: reverse
                  ? 'var(--md-gradient-primary)'
                  : 'var(--md-gradient-sky)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginTop: 0,
                marginBottom: 'var(--space-sm)',
              }}
            >
              {name}
            </h2>

            <p
              className="text-h3"
              style={{
                color: 'var(--md-sky)',
                marginTop: 0,
                marginBottom: 'var(--space-md)',
                lineHeight: 'var(--line-height-body)',
              }}
            >
              {tagline}
            </p>

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
          </div>

          {/* Features */}
          <div style={{ marginBottom: 'var(--space-lg)' }}>
            <h3
              className="font-semibold text-body"
              style={{
                color: 'var(--md-neutral-900)',
                marginTop: 0,
                marginBottom: 'var(--space-md)',
              }}
            >
              核心功能：
            </h3>

            {features.map((feature, index) => (
              <div
                key={index}
                style={{
                  marginBottom: index < features.length - 1 ? 'var(--space-md)' : 0,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex p-md transition-all duration-200 hover:translate-x-2"
                  style={{
                    backgroundColor: 'rgba(111, 194, 255, 0.05)',
                    borderRadius: 0,
                    gap: 'var(--space-md)',
                  }}
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <div className="flex-1">
                    <h4
                      className="font-semibold text-body"
                      style={{
                        color: 'var(--md-neutral-900)',
                        marginTop: 0,
                        marginBottom: 'var(--space-xs)',
                      }}
                    >
                      {feature.title}
                    </h4>
                    <p
                      className="text-small"
                      style={{
                        color: 'var(--md-neutral-700)',
                        marginTop: 0,
                        marginBottom: 0,
                        lineHeight: 'var(--line-height-body)',
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop: 'var(--space-lg)' }}>
            <a
              href={href || getUrl(`tools/${id}`)}
              className="btn-secondary inline-flex"
            >
              <span>深入了解</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
