function Somar(array, valorSoma) {
    for (i = 0; i < array.length; i++) {
        for (c = 1; c < array.length + 1; c++) {
            if (array[i] + array[c] == valorSoma) {
                return console.log(array[i], `(posição ${i})`, " + ", array[c], `(posição ${c})`, " = ", valorSoma)
                i = array.length
                break;
            }
        }
    }
}

Somar([1, 2, 5, 7, 4], 7)