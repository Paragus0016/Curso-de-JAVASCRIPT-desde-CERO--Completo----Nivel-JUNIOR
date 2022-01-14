recipiente = "pedro";
alert(recipiente);

string = "cadena de texto";
number = 19;
booleano = 'true/false';

var numero = 15; // Alcance global
let numero = 15; // Alcance local
const nombre = 'Dalto'; // Constante, no puede cambiar su valor

let num; // Sólo declaración
num = 2; // Inicialización y/o modificación, dependiendo de si la variable ya tenía un valor
const numConst = 1; // Las variables const deben si o si declararse e inicializarse al mismo tiempo.

// Otra forma de declarar variables
let numero1, numero2, numero3;

// Hoisting es un término referido a cómo el sitio se ve afectado cuando se crea el código y cuando se ejecuta el código.

// Null(Declaración vacía intencional) y nan(Not a number)
let numeroNull = null;
let numero1 = 5;
let numeroNaN = 'No soy un número';
alert(numero1 + numeroNaN); // El programa hará una concatenación
alert(numero1 * numeroNaN); // El programa enviará un NaN porque no puede multiplicar número con texto
//