let array = [1, 2, 5, 7, 4]
let valorSoma = 7
//Pegar soma 12

for (i = 0; i < array.length; i++) {
    for (c = 1; c < array.length + 1; c++) {
        if (array[i] + array[c] == valorSoma) {
            console.log("índices:", i, c)
            break;
        }
    }
}