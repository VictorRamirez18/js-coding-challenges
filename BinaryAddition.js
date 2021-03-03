/*Binary Addition 7kyu
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.*/
function addBinary(a, b) {
    if (isNaN(a) | isNaN(b)) {
        return false
    } else {
        var suma = parseInt(a) + parseInt(b);
        var residuos = []
        while (suma >= 2) {
            residuos.push(suma % 2)
            suma = Math.trunc(suma / 2)
        }
        residuos.push(suma)
        residuos = residuos.reverse()
        var binario = "";
        for (i of residuos) {
            binario += i
        }
        return binario
    }
}