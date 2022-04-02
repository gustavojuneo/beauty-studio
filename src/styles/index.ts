import { createStitches, ScaleValue } from '@stitches/react'
import { gray, purpleDark } from '@radix-ui/colors'

export const { css, styled, globalCss, getCssText } = createStitches({
  theme: {
    colors: {
      ...gray,
      ...purpleDark,
    },

    fonts: {
      default: 'Poppins, sans-serif',
    },
    fontWeights: {
      regular: 400,
      semibold: 600,
      bold: 700,
    },

    lineHeights: {
      shorter: '125%',
      short: '140%',
      base: '160%',
      tall: '180%',
    },

    borderWidths: {
      thin: '1px',
      medium: '1.5px',
      thick: '2px',
      heavy: '4px',
    },

    opacity: {
      default: '100%',
      semiOpaque: '90%',
      intense: '75%',
      medium: '50%',
      light: '25%',
      semiTransparent: '10%',
    },

    media: {
      mobile: '(max-width: 768px)',
    },
  },
  utils: {
    marginY: (value: ScaleValue<'space'>) => {
      return {
        marginTop: value,
        marginBottom: value,
      }
    },
  },
})
