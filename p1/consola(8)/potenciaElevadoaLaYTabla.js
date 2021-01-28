/* 
Aguilar Cruz Abelardo 3°F

Generar e imprimir arrays (10) de n=10 números según corresponda

usar iteraciones de k={1,n}

no leer datos, ie usar constantes x=3

    potencia x elevado a la y (tabla)

    private Queue<int> myQueue = new Queue<int>();
    js?.Invoke(false); just a joke
*/
const readline = require('readline');
const rl = readline.createInterface(
{
    input: process.stdin,
    output: process.stdoutput
});

let x;

console.log("¿A cuanto elevamos el insulso 6?");
rl.question('', respuesta => 
{
    x = respuesta;
    for (let i = 0; i < x; i++) 
    {
        console.log(PrintOut(x));
    }
    rl.close();
}
);

function PrintOut(k)
{
    let x = 6;

    for(let i = 1; i <= k; i++)
    {
        x *= x;
    }
    return x;
}
