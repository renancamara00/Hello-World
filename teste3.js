let matriz = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function maiorNumero() {
    const maximo = Math.max(...matriz)
    return maximo
}

console.log(maiorNumero())