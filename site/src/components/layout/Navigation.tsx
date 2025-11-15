import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '../../data/navigation';
import { getUrl } from '../../utils/url';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsOpen(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div
        className="backdrop-blur-md border-b"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderColor: 'var(--md-neutral-300)',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between" style={{ height: 'var(--space-4xl)', minHeight: '64px' }}>
            {/* Logo */}
            <a
              href={getUrl('')}
              className="font-semibold transition-all duration-200 hover:scale-105"
              style={{
                fontSize: 'var(--font-h3)',
                background: 'linear-gradient(135deg, #FF7169 0%, #6FC2FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 'var(--line-height-heading)',
              }}
            >
              陈天 AI 训练营
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center" style={{ gap: 'var(--space-xl)' }}>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-medium transition-all duration-200 hover:-translate-y-0.5 relative group"
                  style={{
                    fontSize: 'var(--font-body)',
                    color: 'var(--md-neutral-900)',
                    lineHeight: 'var(--line-height-body)',
                  }}
                >
                  {item.label}
                  <span
                    className="absolute left-0 w-0 transition-all duration-300 group-hover:w-full"
                    style={{
                      bottom: '-2px',
                      height: '2px',
                      backgroundColor: 'var(--md-watermelon)',
                    }}
                  />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 transition-all duration-200 hover:scale-110"
              style={{
                borderRadius: 0,
                color: 'var(--md-watermelon)',
              }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{
          top: 'var(--space-4xl)',
          backgroundColor: 'var(--md-white)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <div className="container-custom" style={{ paddingTop: 'var(--space-xl)', paddingBottom: 'var(--space-xl)' }}>
          <div className="flex flex-col" style={{ gap: 'var(--space-lg)' }}>
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="font-semibold transition-all duration-200 hover:translate-x-2"
                style={{
                  fontSize: 'var(--font-h3)',
                  color: 'var(--md-neutral-900)',
                  lineHeight: 'var(--line-height-heading)',
                  animationDelay: `${index * 50}ms`,
                }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
