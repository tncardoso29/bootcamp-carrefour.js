function validacaoArray(zap, colg) {
    try {
        if(!zap && !colg) throw new ReferenceError('Envie Parâmetros!!');
        if(typeof zap !== 'object')
            throw new TypeError('O Array prcisa ser do tipo Object, ok?');

        if(typeof colg !== 'number')
            throw new TypeError('Num prcisa ser do tipo Number, ok?');

        if(zap.length !== colg) throw new RangeError('FOI MAL, Tamanho Inválido!');

        return zap;
    } catch(e) {
        if(e instanceof ReferenceError) {
            console.log('Este erro é um ReferenceError!');
            console.log(e.message);
        } else if(e instanceof TypeError) {
            console.log('Este erro é um TypeError!');
            console.log(e.message);
        } else if(e instanceof RangeError) {
            console.log('Este erro é um RangeError!');
            console.log(e.message);
        } else {
            console.log('Tipo de Erro não esperado: '+ e);
        }
    }
}

console.log(validacaoArray([14, 28, 16, 90, 100, 19], 6));