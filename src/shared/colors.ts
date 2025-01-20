export const colors = {
  primary: {
    main: '#6366F1',
    light: '#818CF8',
    dark: '#4F46E5',
  },
  secondary: {
    main: '#EC4899',
    light: '#F472B6',
    dark: '#DB2777',
  },
  background: {
    light: {
      default: '#F8FAFC',
      paper: '#FFFFFF',
      hover: '#E2E8F0',
      active: '#CBD5E1',
    },
    dark: {
      default: '#0F172A',
      paper: '#1E293B',
      hover: '#334155',
      active: '#475569',
    },
  },
  text: {
    light: {
      primary: '#1E293B',
      secondary: '#64748B',
    },
    dark: {
      primary: '#F1F5F9',
      secondary: '#CBD5E1',
    },
  },
  overlay: {
    light: {
      hover: 'rgba(30, 41, 59, 0.05)',
      active: 'rgba(30, 41, 59, 0.1)',
      backdrop: 'rgba(255, 255, 255, 0.8)',
    },
    dark: {
      hover: 'rgba(241, 245, 249, 0.05)',
      active: 'rgba(241, 245, 249, 0.1)',
      backdrop: 'rgba(30, 41, 59, 0.8)',
    },
  },
  border: {
    light: 'rgba(30, 41, 59, 0.1)',
    dark: 'rgba(241, 245, 249, 0.1)',
  },
  gradients: {
    light: 'radial-gradient(at 50% 0%, rgba(99, 102, 241, 0.1) 0%, rgba(248, 250, 252, 0) 75%)',
    dark: 'radial-gradient(at 50% 0%, rgba(99, 102, 241, 0.15) 0%, rgba(15, 23, 42, 0) 75%)',
  },
} as const;
