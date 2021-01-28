/* 
Aguilar Cruz Abelardo 3°F

Imprimir series (10) de n=10 números según corresponda

usar iteraciones de k={1,n}

no leer datos, ie usar constantes x=3

    triangular

    private Queue<int> myQueue = new Queue<int>();
    js?.Invoke(false);
*/

let end = 10;

function GetTriangularNumbers(n) 
{
    for (let i = 1; i <= n; i++) 
    {
      console.log((i * (i + 1)) / 2);
    }
}

GetTriangularNumbers(end);