import { useState } from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import { FiMenu } from 'react-icons/fi'
import { MdOutlineClose } from 'react-icons/md'
// import Link from 'next/link'
import {
  Container,
  Header,
  Schedule,
  Content,
  DescriptionContainer,
  DescriptionTitle,
  Description,
  NavigationMenuRoot,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  HamburguerMenu,
} from './styles'

import logoSvg from '../assets/images/logo.svg'
import bannerImage from '../assets/images/banner.png'

const Home: NextPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Container>
      <Header>
        <Image src={logoSvg} alt="Beauty Studio" />
        <Image src={bannerImage} alt="Beauty Studio" />

        <Schedule>
          <h1>
            <strong>CUIDANDO</strong>
            <br />
            DO MAIS IMPORTANTE,
            <br />
            SUA <strong>AUTO ESTIMA!</strong>
          </h1>
          <button>AGENDE JÁ</button>
        </Schedule>
      </Header>

      <Content>
        <NavigationMenuRoot>
          <NavigationMenuItem>
            <Image src={logoSvg} alt="Beauty Studio" width={174} height={47} />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <HamburguerMenu
              onPressedChange={() => setIsMenuOpen(prevState => !prevState)}
            >
              {isMenuOpen ? (
                <MdOutlineClose size={30} color="#D93E92" />
              ) : (
                <FiMenu size={30} color="#D93E92" />
              )}
            </HamburguerMenu>
          </NavigationMenuItem>
          {/* <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink>
                <Link href="/">Ínicio</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>
                <Link href="/sobre">Sobre</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>
                <Link href="/servicos">Serviços</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>
                <Link href="/contato">Contato</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList> */}
        </NavigationMenuRoot>
        <DescriptionContainer>
          <DescriptionTitle>Sempre na sua melhor versão!</DescriptionTitle>
          <Description>
            <p>
              <strong>AME</strong> a mulher que você é! Conecte-se com a sua
              verdadeira <strong>ESSÊNCIA</strong> cuidando de cada detalhe!{' '}
            </p>
            <p>
              Com isso surgiu a Beauty Studio, com o intuito de ajudar{' '}
              <strong>VOCÊ</strong> a cuidar de cada detalhe para continuar
              transmitindo para o mundo o poder que você têm!
            </p>
          </Description>
        </DescriptionContainer>
      </Content>
    </Container>
  )
}

export default Home
