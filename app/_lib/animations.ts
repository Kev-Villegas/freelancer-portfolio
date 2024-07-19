// Skills Reveal Animation
export const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.07 * index,
      type: "keyframes",
      duration: 0.25,
      ease: "easeInOut",
      times: [0, 1],
    },
  }),
} as const;
