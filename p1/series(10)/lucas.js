/* 
Aguilar Cruz Abelardo 3°F

Imprimir series (10) de n=10 números según corresponda

usar iteraciones de k={1,n}

no leer datos, ie usar constantes x=3

    lucas

    private Queue<int> myQueue = new Queue<int>();
    js?.Invoke(false);
*/

let end = 10;

function GetLucass(n) 
{
    let a = 2;
    let b = 1;
    let c = 0;
    console.log(a);
    console.log(b);

    for(let i = 2; i < n; i++) 
    {
      a = b;
      b = c;
      c = a + b;
      console.log(c); 
    }
  }

GetLucass(end);
  