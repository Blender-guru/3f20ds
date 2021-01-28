/* 
Aguilar Cruz Abelardo 3°F

Generar e imprimir arrays (10) de n=10 números según corresponda

usar iteraciones de k={1,n}

no leer datos, ie usar constantes x=3

    potencia x elevado a la y (tabla)

    private Queue<int> myQueue = new Queue<int>();
    js?.Invoke(false);
*/

function PrintOut(n = 10)
{
    let nums = new Array();
    let x = 6;

    for(let i = 1; i <= n; i++)
    {
        nums.push(x * i);
    }
    return nums;
}

console.log(PrintOut());