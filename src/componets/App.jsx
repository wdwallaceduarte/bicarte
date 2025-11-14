import Header from "./Header"
import Nav from './Nav.jsx'
import Link from './Link.jsx'
import List from './List.jsx'
import Item from './Item.jsx'
import Box from './Box.jsx'
import Button from './Button.jsx'
import Drawer from './Drawer.jsx'
import Heading from './Heading.jsx'
import Image from './Image.jsx'
import Main from './Main.jsx'
import Paragraph from './Paragraph.jsx'
import Section from './Section.jsx'
function App() {
  return (
    <>
      <Header 
        corFundo='bg-black' 
        corTexto='text-white'
        espacamento='px-[12.5rem]'
        
      >
        <Nav 
          altura='h-[6rem]'
          modeloCaixa='flex'
          justificacao='justify-between'
          alinhamento='items-center'
        >
          <Link 
            texto='bicarte'
            tamanhoFonte='text-5xl'
            caixaFonte='uppercase'
            pesoFonte='font-black'
            entreLetras='tracking-[0.5rem]'
            
          />
          <List 
            modeloCaixa='flex'
            distanciamento='gap-[2.5rem]'
          >
            <Item>
              <Link 
                texto='modelos' 
                tamanhoFonte='text-lg'
                caixaFonte='uppercase'
                pesoFonte='font-semibold'
                efeitoSobre='hover:text-yellow-500'
              />
            </Item>
            <Item>
              <Link 
                texto='contato'
                tamanhoFonte='text-lg'
                caixaFonte='uppercase'
                pesoFonte='font-semibold'
                efeitoSobre='hover:text-yellow-500'
              />
            </Item>
            <Item>
              <Link 
                texto='sobre'
                tamanhoFonte='text-lg'
                caixaFonte='uppercase'
                pesoFonte='font-semibold'
                efeitoSobre='hover:text-yellow-500'
              />
            </Item>
          </List>
        </Nav>
      </Header>
      <Main>
        <Section 
          corFundo='bg-black'
          corTexto='text-white'
          altura='h-[37.5rem]'
          espacamento='px-50'
          modeloCaixa='flex'
        >
          <Box
            largura='w-[50%]'
          >
            <Heading 
              tamanhoFonte='text-[4rem]'
              pesoFonte='font-bold'
            >
              Bicicletas feitas sob medida
              <Drawer 
               texto='.'
               corTexto='text-yellow-500'
              />
            </Heading>
            <Paragraph texto='Bicicletas elétricas de alta precisão e qualidade, feitas sob medida para você. Explore o mundo na sua velocidade com a Bikcraft.' corTexto='text-gray-500'/>
            <Button/>
          </Box>
          <Box
            largura='w-[50%]'
          >
            <Image
              fonte='https://www.origamid.com/projetos/bikcraft/img/fotos/introducao.jpg'
            />
          </Box>
        </Section>
      </Main>
    </>
  )
}

export default App
