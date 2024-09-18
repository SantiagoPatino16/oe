// Arreglo 1: Números
let numeros = [2, 4, 6, 8, 10];

// Aplicando .reduce()
let sumaNumeros = numeros.reduce((suma, valor) => {
    return suma + valor;
});
console.log("Suma de numeros:", sumaNumeros);

// Aplicando .forEach()
let sumaForEach = 0;
numeros.forEach((numero) => {
    sumaForEach += numero;
});
console.log("Suma con forEach:", sumaForEach);

// Aplicando .filter()
let numerosFiltrados = numeros.filter((numero) => {
    return numero > 5;
});
console.log("Filtrados mayores a 5:", numerosFiltrados);

// Aplicando .map()
let numerosMapeados = numeros.map((numero) => {
    return "$" + numero * 10;
});
console.log("Mapeado a dólares:", numerosMapeados);


console.log("\n-----------------------------\n");


// Arreglo 2: Cadenas de texto
let frutas = ["manzana", "banana", "pera", "naranja", "uva"];

// Aplicando .reduce()
let frutasConcatenadas = frutas.reduce((concatenacion, fruta) => {
    return concatenacion + ", " + fruta;
});
console.log("Frutas concatenadas:", frutasConcatenadas);

// Aplicando .forEach()
frutas.forEach((fruta) => {
    console.log("Fruta:", fruta);
});

// Aplicando .filter()
let frutasConA = frutas.filter((fruta) => {
    return fruta.includes("a");
});
console.log("Frutas con 'a':", frutasConA);

// Aplicando .map()
let frutasMayusculas = frutas.map((fruta) => {
    return fruta.toUpperCase();
});
console.log("Frutas en mayúsculas:", frutasMayusculas);


console.log("\n-----------------------------\n");


// Arreglo 3: Booleanos
let booleanos = [true, false, true, false, true];

// Aplicando .reduce()
let cantidadVerdaderos = booleanos.reduce((contador, valor) => {
    return valor ? contador + 1 : contador;
}, 0);
console.log("Cantidad de true:", cantidadVerdaderos);

// Aplicando .forEach()
booleanos.forEach((valor, indice) => {
    console.log("Booleano en índice", indice, ":", valor);
});

// Aplicando .filter()
let soloVerdaderos = booleanos.filter((valor) => {
    return valor === true;
});
console.log("Solo verdaderos:", soloVerdaderos);

// Aplicando .map()
let textoBooleanos = booleanos.map((valor) => {
    return valor ? "Verdadero" : "Falso";
});
console.log("Booleanos en texto:", textoBooleanos);


console.log("\n-----------------------------\n");


// Arreglo 4: Mixto
let mixto = [5, "hola", true, 7.5, false];

// Aplicando .reduce() (Solo con números)
let sumaMixto = mixto.reduce((suma, valor) => {
    return typeof valor === "number" ? suma + valor : suma;
}, 0);
console.log("Suma de números en arreglo mixto:", sumaMixto);

// Aplicando .forEach()
mixto.forEach((valor) => {
    console.log("Valor en arreglo mixto:", valor);
});

// Aplicando .filter() (Filtrando por tipo número)
let soloNumeros = mixto.filter((valor) => {
    return typeof valor === "number";
});
console.log("Solo números del arreglo mixto:", soloNumeros);

// Aplicando .map()
let transformadoMixto = mixto.map((valor) => {
    return typeof valor === "number" ? valor * 2 : valor;
});
console.log("Arreglo mixto transformado:", transformadoMixto);


console.log("\n-----------------------------\n");


// Arreglo 5: Decimales
let decimales = [1.2, 2.5, 3.7, 4.1, 5.9];

// Aplicando .reduce()
let sumaDecimales = decimales.reduce((suma, valor) => {
    return suma + valor;
});
console.log("Suma de decimales:", sumaDecimales);

// Aplicando .forEach()
decimales.forEach((decimal) => {
    console.log("Decimal:", decimal);
});

// Aplicando .filter()
let mayoresA3 = decimales.filter((decimal) => {
    return decimal > 3;
});
console.log("Decimales mayores a 3:", mayoresA3);

// Aplicando .map()
let decimalesAumentados = decimales.map((decimal) => {
    return decimal + 1;
});
console.log("Decimales aumentados en 1:", decimalesAumentados);
