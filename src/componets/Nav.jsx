
export default function Nav({
    altura,
    children, 
    modeloCaixa, 
    justificacao,
    alinhamento
}) {

    const style = `
    ${altura}
    ${modeloCaixa}
    ${justificacao}
    ${alinhamento}
    `
    return <nav className={style}>{children}</nav>
}