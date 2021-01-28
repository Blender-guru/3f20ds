/* 
Aguilar Cruz Abelardo 3°F

Generar e imprimir arrays (10) de n=10 números según corresponda

usar iteraciones de k={1,n}

no leer datos, ie usar constantes x=3

    triangular

    private Queue<int> myQueue = new Queue<int>();
    js?.Invoke(false);
*/

let end = 10;

function GetTriangularNumbers(n) 
{
    let nums = new Array();
    for (let i = 1; i <= n; i++) 
    {
      nums.push((i * (i + 1)) / 2);
    }
    return nums[4];
}

console.log(GetTriangularNumbers(end));