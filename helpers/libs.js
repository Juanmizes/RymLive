const libs = {};
//hacemos una funcion para crear un nombre al azar
libs.randomName = (size) => {
    possibility = 'abcdefghijklmnopqrstuwxyz0123456789-_$&';
    let random = 0;
    for (let i = 0; i < size; i++) {
        random += possibility.charAt(Math.floor(Math.random() * possibility.length));

    }

    return random;
}

module.exports = libs;