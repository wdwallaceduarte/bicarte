
export default function Link({
    texto,
    tamanhoFonte,
    caixaFonte,
    pesoFonte,
    entreLetras,
    efeitoSobre
}) {

    const style = `
        ${tamanhoFonte}
        ${caixaFonte}
        ${pesoFonte}
        ${entreLetras}
        ${efeitoSobre}
        `
    return <a href="" className={style}>{texto}</a>
}