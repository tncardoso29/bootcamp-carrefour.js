function filtraPares(arr) {
    return arr.filter(callback)
}

function callback(item) {
    return item % 2 !== 0;
}

const meuArray = [14, 16, 22, 18, 25, 28, 32, 41];

console.log(filtraPares(meuArray))