import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { styled } from '../styles'
import { pixelToRem } from '../utils'

export const Container = styled('main', {
  padding: '$6',
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: pixelToRem(40, 0),
})

export const Logo = styled('img', {})

export const Main = styled('main', {
  '& > h1': {
    fontSize: pixelToRem(36),
    color: '$gray1',
    backgroundColor: '$pink6',
    '& > span': {
      fontWeight: 'lighter',
    },
  },
})

export const NavigationList = styled(NavigationMenu.List, {
  display: 'flex',
  gap: 10,
  listStyle: 'none',
})

export const NavigationItem = styled(NavigationMenu.Item, {})

export const NavigationLink = styled(NavigationMenu.Link, {})
