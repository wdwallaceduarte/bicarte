
const Section = ({ children, corFundo, corTexto, altura, espacamento, modeloCaixa }) => {

const style = `
  ${corFundo}
  ${corTexto}
  ${altura}
  ${espacamento}
  ${modeloCaixa}
  
`;

  return (
    <>
      <section className={style}>{ children }</section>
    </>
  );
}

export default Section;
