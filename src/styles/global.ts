import { globalCss } from '.'

export const applyGlobalCss = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$gray2',
    color: '$gray12',
    fontFamily: '$default',
    height: '100vh',
  },

  '#__next': {
    height: '100%',
  },

  h1: {
    fontFamily: '$secondary',
    fontWeight: '$regular',
  },

  strong: {
    fontWeight: '$bold',
  },
})
