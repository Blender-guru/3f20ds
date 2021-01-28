/* 
Aguilar Cruz Abelardo 3°F

Generar e imprimir arrays (10) de n=10 números según corresponda

usar iteraciones de k={1,n}

no leer datos, ie usar constantes x=3

    lucas

    private Queue<int> myQueue = new Queue<int>();
    js?.Invoke(false);
*/

function GetLucass(n = 10) 
{
    let nums = new Array();
    let a = 2;
    let b = 1;
    let c = 0;
    nums.push(a);
    nums.push(b);

    for(let i = 2; i < n; i++) 
    {
      a = nums[i - 1];
      b = nums[i - 2];
      c = a + b;
      nums.push(c); 
    }
    return nums[4];
}

console.log(GetLucass());
  