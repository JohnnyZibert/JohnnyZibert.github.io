export const line = {
  hidden: { opacity: 0, width: '0%' },
  show: {
    opacity: 1,
    width: '100%',
    transition: {
      duration: 1,
    },
  },
}
export const lineForIcon = {
  hidden: { opacity: 0, width: '0%' },
  show: {
    opacity: 1,
    width: '100%',
    transition: {
      duration: 1,
    },
  },
}

export const AnimateInfo = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'linear',
    },
  },
}

export const OpenBurger = {
  hidden: { x: '-100%', opacity: 0 },
  show: {
    x: '0%',
    opacity: 1,
    transition: {
      ease: 'linear',
      duration: 0.3,
    },
  },
  exit: {
    x: '-100%',
    opacity: 0,
    duration: 0.3,
    ease: 'easeInOut',
    transition: {
      ease: 'linear',
    },
  },
}
