import { Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    课程: [
      { label: '课程大纲', href: '/curriculum' },
      { label: '工具生态', href: '/tools' },
      { label: '实战项目', href: '/projects' },
      { label: '学习资料', href: '/materials' },
    ],
    资料: [
      { label: 'Claude Code 架构', href: '/materials/claude-code-architecture' },
      { label: '工具对比', href: '/materials/ai-coding-tools-comparison' },
      { label: 'NotebookLM', href: '/materials/notebooklm-guide' },
    ],
    关于: [
      { label: '课程价值', href: '/about#value' },
      { label: '适合人群', href: '/about#audience' },
      { label: '讲师介绍', href: '/about#instructor' },
    ],
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
  ];

  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: 'var(--md-white)',
        borderTop: '3px solid var(--md-black)',
      }}
    >
      <div className="container-custom" style={{ paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-4xl)' }}>
        <div className="grid grid-cols-1 md:grid-cols-4" style={{ gap: 'var(--space-3xl)', marginBottom: 'var(--space-3xl)' }}>
          {/* Brand */}
          <div className="md:col-span-1">
            <h3
              className="font-bold"
              style={{
                fontSize: 'var(--font-h3)',
                lineHeight: 'var(--line-height-heading)',
                marginBottom: 'var(--space-lg)',
                background: 'linear-gradient(135deg, #FF7169 0%, #6FC2FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              陈天 AI 训练营
            </h3>
            <p
              className="leading-relaxed"
              style={{
                fontSize: 'var(--font-body)',
                lineHeight: 'var(--line-height-body)',
                color: 'var(--md-neutral-700)',
                marginBottom: 'var(--space-lg)',
              }}
            >
              让 AI 成为你的编程超能力
            </p>

            {/* 装饰性徽章 */}
            <div style={{ marginTop: 'var(--space-lg)', display: 'inline-block' }}>
              <span
                className="md-badge md-badge-sun"
                style={{
                  fontSize: 'var(--font-tiny)',
                  padding: '6px 12px',
                }}
              >
                ✨ 8周精通 AI 编程
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="font-semibold"
                style={{
                  fontSize: 'var(--font-body)',
                  lineHeight: 'var(--line-height-body)',
                  color: 'var(--md-neutral-900)',
                  marginBottom: 'var(--space-lg)',
                }}
              >
                {category}
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="transition-all duration-200 hover:translate-x-1 inline-block"
                      style={{
                        fontSize: 'var(--font-body)',
                        lineHeight: 'var(--line-height-body)',
                        color: 'var(--md-neutral-700)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--md-sky)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--md-neutral-700)';
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col md:flex-row justify-between items-center border-t"
          style={{
            paddingTop: 'var(--space-xl)',
            borderColor: 'var(--md-neutral-300)',
            gap: 'var(--space-lg)',
          }}
        >
          <p
            style={{
              fontSize: 'var(--font-small)',
              lineHeight: 'var(--line-height-body)',
              color: 'var(--md-neutral-700)',
            }}
          >
            © {currentYear} 陈天极客时间 AI 训练营. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center" style={{ gap: 'var(--space-lg)' }}>
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="transition-all duration-200 hover:scale-110 hover:-translate-y-1"
                  style={{
                    padding: 'var(--space-sm)',
                    borderRadius: 0,
                    color: 'var(--md-neutral-700)',
                  }}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--md-watermelon)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 113, 105, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--md-neutral-700)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
