const lista = [
    {
        name: 'sabao em po',
        preco: 25,
    },
    {
        name: 'sunga',
        preco: 15,
    },
    {
        name: 'toalha de banho SPFC',
        preco: 34,
    },
    {
        name: 'calcinha tanga branca',
        preco: 19,
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index) {
        console.log('Rodada: ', index + 1);
        console.log('\n')
        console.log({ prev })
        console.log({ current })
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));