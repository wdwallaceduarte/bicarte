
const Paragraph = ({ texto, corTexto }) => {

const style = `
  ${corTexto}
`;

  return (
    <>
      <p>{texto}</p>
    </>
  );
}

export default Paragraph;
