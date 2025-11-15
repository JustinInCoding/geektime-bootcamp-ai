import { useState } from 'react';
import { motion } from 'framer-motion';
import ExpandableSection from '../ui/ExpandableSection';
import AnimatedDiagram from '../diagrams/AnimatedDiagram';
import { getUrl } from '../../utils/url';

interface WeekModuleProps {
  weekNumber: number;
  title: string;
  subtitle: string;
  objectives: string[];
  keyPoints: { title: string; description: string; diagram?: string }[];
  practicalContent: string[];
  relatedTools: string[];
  estimatedHours: number;
}

export default function WeekModule({
  weekNumber,
  title,
  subtitle,
  objectives,
  keyPoints,
  practicalContent,
  relatedTools,
  estimatedHours,
}: WeekModuleProps) {
  const [activeTab, setActiveTab] = useState<'objectives' | 'keyPoints' | 'practice'>(
    'objectives'
  );

  const tabs = [
    { id: 'objectives' as const, label: '学习目标' },
    { id: 'keyPoints' as const, label: '知识点' },
    { id: 'practice' as const, label: '实践内容' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="overflow-hidden"
      style={{
        backgroundColor: 'var(--md-white)',
        borderRadius: 0,
        boxShadow: 'var(--shadow-lg)',
      }}
    >
      {/* Header */}
      <div
        className="p-2xl text-white"
        style={{
          background: 'var(--md-gradient-sky)',
        }}
      >
        <div className="flex items-center gap-md mb-lg">
          <span
            className="md-badge"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              color: 'var(--md-white)',
              fontSize: 'var(--font-small)',
              fontWeight: 'var(--font-weight-semibold)',
            }}
          >
            第 {weekNumber} 周
          </span>

          <span
            className="text-small"
            style={{ opacity: 0.9 }}
          >
            ⏱ {estimatedHours} 小时
          </span>
        </div>

        <h1
          className="text-h1 font-bold"
          style={{
            marginTop: 0,
            marginBottom: 'var(--space-sm)',
          }}
        >
          {title}
        </h1>
        <p
          className="text-body"
          style={{
            opacity: 0.9,
            marginTop: 0,
            marginBottom: 0,
            lineHeight: 'var(--line-height-body)',
          }}
        >
          {subtitle}
        </p>
      </div>

      {/* Tabs */}
      <div
        className="border-b px-2xl"
        style={{ borderBottom: '3px solid var(--md-black)' }}
      >
        <div className="flex gap-2xl">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-md text-small font-medium border-b-2 transition-all duration-200 ${
                activeTab === tab.id ? '' : ''
              }`}
              style={{
                borderColor: activeTab === tab.id ? 'var(--md-sky)' : 'transparent',
                color: activeTab === tab.id ? 'var(--md-sky)' : 'var(--md-neutral-700)',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-2xl">
        {activeTab === 'objectives' && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="flex"
                style={{
                  gap: 'var(--space-md)',
                  marginBottom: index < objectives.length - 1 ? 'var(--space-md)' : 0,
                }}
              >
                <span
                  className="text-xl"
                  style={{ color: 'var(--md-garden)' }}
                >
                  ✓
                </span>
                <p
                  className="flex-1 text-body"
                  style={{
                    color: 'var(--md-neutral-900)',
                    marginTop: 0,
                    marginBottom: 0,
                    lineHeight: 'var(--line-height-body)',
                  }}
                >
                  {objective}
                </p>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === 'keyPoints' && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {keyPoints.map((point, index) => (
              <div
                key={index}
                style={{
                  marginBottom: index < keyPoints.length - 1 ? 'var(--space-md)' : 0,
                }}
              >
                <ExpandableSection title={point.title}>
                  <p
                    className="text-body"
                    style={{
                      color: 'var(--md-neutral-700)',
                      marginTop: 0,
                      marginBottom: 'var(--space-md)',
                      lineHeight: 'var(--line-height-body)',
                    }}
                  >
                    {point.description}
                  </p>
                  {point.diagram && <AnimatedDiagram code={point.diagram} />}
                </ExpandableSection>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === 'practice' && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {practicalContent.map((content, index) => (
              <div
                key={index}
                className="flex"
                style={{
                  gap: 'var(--space-md)',
                  marginBottom: index < practicalContent.length - 1 ? 'var(--space-md)' : 0,
                }}
              >
                <span
                  className="font-bold"
                  style={{ color: 'var(--md-watermelon)' }}
                >
                  {index + 1}.
                </span>
                <p
                  className="flex-1 text-body"
                  style={{
                    color: 'var(--md-neutral-900)',
                    marginTop: 0,
                    marginBottom: 0,
                    lineHeight: 'var(--line-height-body)',
                  }}
                >
                  {content}
                </p>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Related Tools */}
      {relatedTools.length > 0 && (
        <div
          style={{
            paddingLeft: 'var(--space-2xl)',
            paddingRight: 'var(--space-2xl)',
            paddingBottom: 'var(--space-2xl)',
            paddingTop: 0,
          }}
        >
          <h3
            className="text-small font-semibold"
            style={{
              color: 'var(--md-neutral-700)',
              marginTop: 0,
              marginBottom: 'var(--space-md)',
            }}
          >
            相关工具
          </h3>
          <div
            className="flex flex-wrap"
            style={{ gap: 'var(--space-sm)' }}
          >
            {relatedTools.map((tool) => (
              <a
                key={tool}
                href={getUrl(`tools/${tool}`)}
                className="md-badge md-badge-sky transition-all duration-200 hover:scale-105"
                style={{
                  cursor: 'pointer',
                }}
              >
                {tool}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
