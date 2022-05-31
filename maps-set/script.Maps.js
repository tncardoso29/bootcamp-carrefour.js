function getAdms(map) {
    let admins = [];
    for([keys, value] of map){
        if(value === 'user') {
            admins.push(keys);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Pedro', 'admin');
usuarios.set('Thiago', 'admin');
usuarios.set('Marcela', 'user');
usuarios.set('Stephany', 'user');
usuarios.set('Gustavo', 'admin');

console.log
(getAdms(usuarios));