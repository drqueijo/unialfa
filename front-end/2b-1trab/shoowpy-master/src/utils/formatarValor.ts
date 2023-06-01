
export const formataValorBR = (
    valor?: string | number | null
) => {
    if (valor) {
        let valorUS = parseFloat(valor.toString())

        return 'R$ ' + valorUS.toLocaleString('pt-br', {
            minimumFractionDigits: 2
        })
    }
}
