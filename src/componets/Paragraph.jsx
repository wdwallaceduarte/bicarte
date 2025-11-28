
const Paragraph = ({ texto, corTexto }) => {

const style = `
  ${corTexto}
`;

  return (
    <>
      <p className={style}>{texto}</p>
    </>
  );
}

export default Paragraph;
