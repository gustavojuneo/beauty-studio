import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import * as Toggle from '@radix-ui/react-toggle'

import { styled } from '../styles'
import pixelToRem from '../utils/pixelToRem'

export const Container = styled('div', {
  height: '100%',
  scrollSnapType: 'y mandatory',
  overflowY: 'scroll',
})

export const Header = styled('header', {
  padding: '1rem 0',
  height: '100vh',
  scrollSnapAlign: 'start',
})

export const Schedule = styled('div', {
  position: 'relative',
  background:
    "url('/assets/images/schedule_background.svg') no-repeat center center",
  width: 375,
  height: 269,
  padding: pixelToRem(0, 44),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  '& > h1': {
    color: '$gray1',
    fontSize: pixelToRem(24),
    marginBottom: 11,
  },

  '& > button': {
    backgroundColor: '#D93E92',
    alignSelf: 'stretch',
    padding: pixelToRem(12, 46),
    border: 'none',
    fontSize: pixelToRem(24),
    borderRadius: 50,
    color: '$gray1',
  },
})

export const NavigationMenuRoot = styled(NavigationMenu.Root, {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: pixelToRem(0, 16),
})

export const NavigationMenuList = styled(NavigationMenu.List, {
  all: 'unset',
  display: 'flex',
  listStyle: 'none',
  gap: 32,
  flex: 1,
})

export const NavigationMenuItem = styled(NavigationMenu.Item, {
  listStyle: 'none',
})

export const NavigationMenuLink = styled(NavigationMenu.Link, {})

export const HamburguerMenu = styled(Toggle.Toggle, {
  all: 'unset',
})

export const Content = styled('main', {
  margin: pixelToRem(14),
  height: '100vh',
  padding: '40px 0',
  scrollSnapAlign: 'start',
})

export const DescriptionContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const DescriptionTitle = styled('h2', {
  fontSize: pixelToRem(18),
  fontWeight: '$semibold',
  marginBottom: 8,
})

export const Description = styled('div', {
  backgroundColor: '#F0F0F5',
  padding: pixelToRem(18, 36),
  boxShadow: '0px 5px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: 18,

  '& > p': {
    textAlign: 'justify',

    '& + p': {
      marginTop: 16,
    },
  },
})
