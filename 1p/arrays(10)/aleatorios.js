/* 
Aguilar Cruz Abelardo 3°F

Generar e imprimir arrays (10) de n=10 números según corresponda

usar iteraciones de k={1,n}

no leer datos, ie usar constantes x=3

    aleatorios

    private Queue<int> myQueue = new Queue<int>();
    js?.Invoke(false);
*/

function GetRandomNumber(min = 1, max = 10) 
{
    return Math.random() * (max - min) + min;
}
  
function RandomNumbersCreator(n = 10, min = 1, max = 10) 
{
    let nums = new Array();

    for(let i = 0; i < 10; i++) 
    {
      nums.push(Math.floor(GetRandomNumber()));
    }
    return nums;
}

console.log(RandomNumbersCreator());