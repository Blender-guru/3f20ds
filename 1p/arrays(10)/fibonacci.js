/* 
Aguilar Cruz Abelardo 3°F

Generar e imprimir arrays (10) de n=10 números según corresponda

usar iteraciones de k={1,n}

no leer datos, ie usar constantes x=3

    fibonacci

    private Queue<int> myQueue = new Queue<int>();
    js?.Invoke(false);
*/
let end = 10;

function Fibonacci(n) 
{
    let numsF = new Array();
    let a = 0;
    let b = 1;
    let c = a + b;
    numsF.push(a);
    numsF.push(b);
    numsF.push(c);
    for(let i = 0; i < n; i++) 
    {
        a = b;
        b = c;
        c = a + b;
        numsF.push(c);
    }
    return numsF;
}

console.log(Fibonacci(end));  


