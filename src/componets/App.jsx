import Header from "./Header"
import Nav from './Nav.jsx'
import Link from './Link.jsx'
import List from './List.jsx'
import Item from './Item.jsx'
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
    </>
  )
}

export default App
