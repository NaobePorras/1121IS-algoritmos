function contarVocales(texto) {
    let contadorVocales = 0;
    let vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    for(let i = 0; i < texto.length; ++i) {
        if (vocales.indexOf(texto[i]) >= 0) {
            ++contadorVocales;
        }
    }

    return contadorVocales;
}

console.log(contarVocales('El profesor me sacara un diez'));