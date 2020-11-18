/* 
Aguilar Cruz Abelardo 3°F

Imprimir series (10) de n=10 números según corresponda

usar iteraciones de k={1,n}

no leer datos, ie usar constantes x=3

    1, 3, 5...

    private Queue<int> myQueue = new Queue<int>();
    js?.Invoke(false);
*/

let count = 1;
let start = 1;

function PrintOut()
{
    console.log(start);

    while(count <= 10)
    {
        start += 2;
        console.log(start);
        count++;
    }
}

PrintOut();