function calcularColor(num) {
    if (num === 1) {
    return "El color es negro";
    } else if (num === 2) {
    return "El color es blanco";
    } else if (num === 3) {
    return "El color es azul";
    } else {
    return "El color es verde";
    }
}

console.log(calcularColor(1)) // "El color es negro"
console.log(calcularColor(2)) // "El color es blanco"
console.log(calcularColor(3)) // "El color es azul"
console.log(calcularColor(8)) // "El color es verde"