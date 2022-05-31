const ArrayBoladao = [18, 22, 25, 128, 232, 2235, 9];

function valoreUnicos(shp) {
    const mySet = new Set(shp);
    return [...mySet];
}

console.log(valoreUnicos(ArrayBoladao));