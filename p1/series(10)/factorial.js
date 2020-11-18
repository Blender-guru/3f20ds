/* 
Aguilar Cruz Abelardo 3°F

Imprimir series (10) de n=10 números según corresponda

usar iteraciones de k={1,n}

no leer datos, ie usar constantes x=3

    factorial

    private Queue<int> myQueue = new Queue<int>();
    js?.Invoke(false);
*/

function Factorial(inValue)
{
    if (inValue <= 1)
    return inValue;
    else
    return inValue * Factorial(inValue - 1); // Call Factorial again.
}

function Handler(n = 10)
{
    for(let i = 1; i <= n; i++)
    {
        console.log(Factorial(i));
    }
}

Handler();