
export default function List({
    children, 
    modeloCaixa, 
    distanciamento
}) {

    const style = `
    ${modeloCaixa}
    ${distanciamento}
    `
    return <ul className={style}>{children}</ul>
}