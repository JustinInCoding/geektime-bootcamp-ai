import { motion } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';
import { getUrl } from '../../utils/url';

interface TimelineItem {
  weekNumber: number;
  title: string;
  subtitle: string;
  href?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="max-w-4xl mx-auto">
      {items.map((item, index) => (
        <ScrollReveal key={item.weekNumber} delay={index * 0.1}>
          <div className="relative flex" style={{ gap: 'var(--space-lg)', paddingBottom: index < items.length - 1 ? 'var(--space-3xl)' : 0 }}>
            {/* Timeline line */}
            <div className="relative flex flex-col items-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="z-10"
                style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: 0,
                  backgroundColor: 'var(--md-sky)',
                }}
              />
              {index < items.length - 1 && (
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  className="absolute"
                  style={{
                    width: '2px',
                    top: '16px',
                    background: 'linear-gradient(to bottom, var(--md-sky), transparent)',
                  }}
                />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 group">
              <a
                href={item.href || getUrl(`curriculum/week-${item.weekNumber}`)}
                className="block md-card md-card-interactive"
                style={{ padding: 'var(--space-lg)' }}
              >
                <div className="flex items-center" style={{ gap: 'var(--space-md)', marginBottom: 'var(--space-sm)' }}>
                  <span className="font-semibold" style={{ fontSize: 'var(--font-small)', color: 'var(--md-sky)' }}>
                    第 {item.weekNumber} 周
                  </span>
                  <span style={{ fontSize: 'var(--font-tiny)', color: 'var(--md-neutral-700)' }}>→</span>
                </div>
                <h3
                  className="font-bold group-hover:text-sky transition-colors"
                  style={{
                    fontSize: 'var(--font-h3)',
                    color: 'var(--md-neutral-900)',
                    marginTop: 0,
                    marginBottom: 'var(--space-sm)',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: 'var(--font-body)',
                    lineHeight: 'var(--line-height-body)',
                    color: 'var(--md-neutral-700)',
                    marginTop: 0,
                    marginBottom: 0,
                  }}
                >
                  {item.subtitle}
                </p>
              </a>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
