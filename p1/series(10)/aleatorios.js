/* 
Aguilar Cruz Abelardo 3°F

Imprimir series (10) de n=10 números según corresponda

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
    for(let i = 0; i < 10; i++) 
    {
      console.log(Math.floor(GetRandomNumber()));
    }
}

RandomNumbersCreator();