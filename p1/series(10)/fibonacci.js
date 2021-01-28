/* 
Aguilar Cruz Abelardo 3°F

Imprimir series (10) de n=10 números según corresponda

usar iteraciones de k={1,n}

no leer datos, ie usar constantes x=3

    fibonacci

    private Queue<int> myQueue = new Queue<int>();
    js?.Invoke(false);
*/
let end = 10;

function Fibonacci(n) 
{
    let a = 0;
    let b = 1;
    let c = a + b;
    console.log(a);
    console.log(b);
    console.log(c);
    for(let i = 0; i < n; i++) 
    {
        a = b;
        b = c;
        c = a + b;
        console.log(c);
    }
}

Fibonacci(end);    


