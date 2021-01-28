/* 
Aguilar Cruz Abelardo 3°F

Generar e imprimir arrays (10) de n=10 números según corresponda

usar iteraciones de k={1,n}

no leer datos, ie usar constantes x=3

    aleatorios

    private Queue<int> myQueue = new Queue<int>();
    js?.Invoke(false);
    The school has become a joke
*/

const readline = require('readline');
const rl = readline.createInterface(
{
    input: process.stdin,
    output: process.stdoutput
});

let x;

console.log("¿Cuantos quieres carnal?");
rl.question('', respuesta => 
{
    x = respuesta;
    for (let i = 0; i < x; i++) 
    {
        console.log(GetRandomNumber(1, x));
    }
    rl.close();
}
);

function GetRandomNumber(min = 1, max = 10) 
{
    return Math.random() * (max - min) + min;
}