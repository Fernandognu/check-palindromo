var str = 'raiar'; //recebe a palavra
var arr = str.split(''); //Converte String em Array
var rra = arr.slice(0).reverse(); //Inverte o Array mantendo o original
var result = compara(); // Verifica se é palindromo


console.log(arr); //imprime array
console.log(rra); //imprime array invertido
console.log(result);

function compara() {
    //verifica se a palavra é um palíndromo, e retorna verdadeiro ou falso
    if (JSON.stringify(arr)==JSON.stringify(rra)){
        return true;
    } else {
        return false;
    }
}