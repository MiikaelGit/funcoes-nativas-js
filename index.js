const carrinho = [
    {nome: "Caneta", qtde: 10, preco: 7.99},
    {nome: "Impressora", qtde: 0, preco: 649.50},
    {nome: "Caderno", qtde: 4, preco: 27.10},
    {nome: "Lapis", qtde: 3, preco: 5.82},
    {nome: "Tesoura", qtde: 1, preco: 19.20},
]

Array.prototype.meuFilter = function(callback) {
    const arrayFiltrado = [];
    for(let i = 0; i < this.length; i++){
        if(callback(this[i])) {
            arrayFiltrado.push(this[i])
        }
    }
    return arrayFiltrado;
}

Array.prototype.meuMap = function(callback) {
    const arrayMapeado = [];
    for(let i = 0; i < this.length; i++){
        arrayMapeado.push(callback(this[i]))
    }
    return arrayMapeado;
}

Array.prototype.meuReduce = function(callback, inicial) {
    // 'ultimo' será o acumulador que armazenará o valor reduzido ao longo do loop
    let ultimo = inicial;

    // Percorre todos os elementos do array
    for (let i = 0; i < this.length; i++) {
        // Se 'inicial' não foi passado (ou seja, é undefined), usamos o primeiro elemento do array como inicial
        if (ultimo === undefined) {
            ultimo = this[i]; // Define o primeiro elemento do array como o acumulador inicial
            continue; // Pula a iteração atual e continua com o próximo elemento
        }

        // Aplica a função 'callback' passando o acumulador atual e o elemento do array
        ultimo = callback(ultimo, this[i]);
    }

    // Retorna o valor final do acumulador após todas as iterações
    return ultimo;
}


const resultado = carrinho
    .meuFilter(item => item.qtde > 0)
    .meuMap(item => item.qtde * item.preco)
    .meuReduce((a, b) => a + b, 0)

console.log(resultado);