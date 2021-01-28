/* 
Aguilar Cruz Abelardo 3°F

Generar e imprimir arrays (10) de n=10 números según corresponda

usar iteraciones de k={1,n}

no leer datos, ie usar constantes x=3

    factorial

    private Queue<int> myQueue = new Queue<int>();
    js?.Invoke(false); isn't it?
*/
const readline = require('readline');
const rl = readline.createInterface(
{
    input: process.stdin,
    output: process.stdoutput
});

let x;

console.log("¿Hasta que número vamos a llegar hoy?");
rl.question('', respuesta => 
{
    x = respuesta;
    {
        console.log(Handler(x));
    }
    rl.close();
}
);

function Factorial(inValue)
{
    if (inValue <= 1)
    return inValue;
    else
    return inValue * Factorial(inValue - 1); // Call Factorial again.
}

function Handler(n)
{
    let nums = new Array();

    for(let i = 1; i <= n; i++)
    {
        nums.push(Factorial(i));
    }
    return nums;
}
