let pizza = {
    tipo_corteza: "",
    tipo_salsa:"",
    quesos:[],
    salsas:[],
}

function pizzaOven(tipo_corteza, tipo_salsa, quesos, salsas){
    // Metodo 1: invocando al objeto pizza.
    // pizza.tipo_corteza = tipo_corteza;
    // pizza.tipo_salsa = tipo_salsa;
    // pizza.quesos = quesos;
    // pizza.salsas = salsas
    
    // return pizza

    // Metodo 2: retornando el objeto con parametros de entrada a la función.
    return {
        tipo_corteza,
        tipo_salsa,
        quesos,
        salsas
    }
}



let pizza1 = pizzaOven('estilo chicago', "tradicional", ['mozzarella'], ["pepperoni", "salchicha"]);
console.log(`Pizza 1: `, pizza1);
console.log('**********')
let pizza2 = pizzaOven('lanzada a mano', "marinara", ['mozzarella','feta'], ["champiñones", "aceitunas", "cebollas"]);
console.log(`Pizza 2: `, pizza2);
console.log('**********')
let pizza3 = pizzaOven('a la piedra', "tomate con albahaca", ['pecorino', 'mozzarela'], ["Albahaca fresca", "aceitunas", "tomates cherry"]);
console.log(`Pizza 3: `, pizza3);
console.log('**********')
let pizza4 = pizzaOven('Napoletana', "Salsa de Tomate San Marzano", ['Mozzarella di Bufala','cabra'], ["aceite de oliva extra virgen", "aceitunas"]);
console.log(`Pizza 4: `, pizza4);