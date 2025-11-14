
const Drawer = ({texto, corTexto}) => {

const style = `
  ${corTexto}
`;

  return (
    <>
      <span className={style}>{texto}</span>
    </>
  );
}

export default Drawer;
