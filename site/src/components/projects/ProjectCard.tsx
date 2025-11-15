import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { getUrl } from '../../utils/url';

interface ProjectCardProps {
  number: number;
  title: string;
  subtitle: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  estimatedHours: number;
  techStack: string[];
  href?: string;
  previewImage?: string;
}

export default function ProjectCard({
  number,
  title,
  subtitle,
  difficulty,
  estimatedHours,
  techStack,
  href,
  previewImage,
}: ProjectCardProps) {
  return (
    <motion.a
      href={href || getUrl(`projects/project-${number}`)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="block md-card md-card-interactive group"
    >
      {/* Preview Image */}
      <div
        className="relative aspect-video overflow-hidden mb-lg"
        style={{
          background: 'linear-gradient(135deg, #6FC2FF 0%, #16AA98 100%)',
        }}
      >
        {previewImage ? (
          <div className="w-full h-full p-lg flex items-center justify-center">
            <img
              src={previewImage}
              alt={title}
              className="max-w-full max-h-full object-contain shadow-xl border-2 group-hover:scale-[1.02] transition-all duration-300"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.2)',
                backgroundColor: 'var(--md-white)',
                borderRadius: 0,
              }}
            />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span
              className="text-6xl font-bold opacity-30"
              style={{ color: 'var(--md-white)' }}
            >
              {number}
            </span>
          </div>
        )}

        {/* 项目徽章 */}
        <div
          className="absolute top-md left-md md-badge md-badge-sun"
          style={{
            fontWeight: 'var(--font-weight-semibold)',
          }}
        >
          项目 {number}
        </div>
      </div>

      {/* Content */}
      <div>
        <h3
          className="text-h3 font-bold transition-colors duration-200"
          style={{
            color: 'var(--md-neutral-900)',
            marginTop: 0,
            marginBottom: 'var(--space-sm)',
          }}
        >
          {title}
        </h3>

        <p
          className="text-body"
          style={{
            color: 'var(--md-neutral-700)',
            marginTop: 0,
            marginBottom: 'var(--space-lg)',
            lineHeight: 'var(--line-height-body)',
          }}
        >
          {subtitle}
        </p>

        {/* Meta Info */}
        <div
          className="flex flex-wrap text-small"
          style={{
            color: 'var(--md-neutral-700)',
            gap: 'var(--space-lg)',
            marginBottom: 'var(--space-lg)',
          }}
        >
          <div className="flex items-center gap-sm">
            <span>难度:</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < difficulty ? 'fill-watermelon' : ''}
                  style={{
                    color: i < difficulty ? 'var(--md-watermelon)' : 'var(--md-neutral-300)'
                  }}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-sm">
            <span>⏱</span>
            <span>{estimatedHours} 小时</span>
          </div>
        </div>

        {/* Tech Stack */}
        <div
          className="flex flex-wrap"
          style={{
            gap: 'var(--space-sm)',
            marginBottom: 'var(--space-lg)',
          }}
        >
          {techStack.map((tech) => (
            <span
              key={tech}
              className="md-badge md-badge-sky"
              style={{
                fontSize: 'var(--font-tiny)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div
          className="flex items-center font-medium transition-all duration-200"
          style={{
            color: 'var(--md-sky)',
            gap: 'var(--space-sm)',
          }}
        >
          <span>查看详情</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.a>
  );
}
