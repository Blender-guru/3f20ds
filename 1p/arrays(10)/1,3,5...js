/* 
Aguilar Cruz Abelardo 3°F

Generar e imprimir arrays (10) de n=10 números según corresponda

usar iteraciones de k={1,n}

no leer datos, ie usar constantes x=3

    1, 3, 5...

    private Queue<int> myQueue = new Queue<int>();
    js?.Invoke(false);
*/

let count = 1;
let start = 1;

function PrintOut(n = 10)
{
    let numbers = new Array();
    numbers.push(start);

    while(count <= n)
    {
        start += 2;
        numbers.push(start);
        count++;
    }
    return numbers;
}

console.log(PrintOut());