import type { NextPage } from 'next'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import Link from 'next/link'
import {
  Container,
  Header,
  Logo,
  Main,
  NavigationList,
  NavigationItem,
  NavigationLink,
} from './styles'

const Home: NextPage = () => {
  return (
    <Container>
      <Header>
        <Logo src="/assets/images/logo.svg" />
      </Header>
      <Main>
        <h1>
          Cuidando <span>do mais importante</span>, sua AUTO ESTIMA!
        </h1>
      </Main>
      <NavigationMenu.Root>
        <NavigationList>
          <NavigationItem>
            <NavigationLink>
              <Link href="/">Início</Link>
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink>
              <Link href="/sobre">Sobre</Link>
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink>
              <Link href="/servicos">Serviços</Link>
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink>
              <Link href="/contato">Contato</Link>
            </NavigationLink>
          </NavigationItem>
        </NavigationList>
      </NavigationMenu.Root>
    </Container>
  )
}

export default Home
