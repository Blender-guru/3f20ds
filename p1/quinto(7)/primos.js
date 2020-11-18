/* 
Aguilar Cruz Abelardo 3°F

Generar e imprimir arrays (10) de n=10 números según corresponda

usar iteraciones de k={1,n}

no leer datos, ie usar constantes x=3

    primos

    private Queue<int> myQueue = new Queue<int>();
    js?.Invoke(false);
*/


function IsPrime(n) 
{
    if (n == 0 || n == 1 || n == 4) return false;

    for (let i = 2; i < n / 2; i++) 
    {
        if (n % i == 0) return false;
    }
    return true;
}

function PrintOut(n = 10)
{
    let nums = new Array();
    let count = 0;
    let x = 0;

    while(count <= n)
    {
        if(IsPrime(x))
        {
            nums.push(x);
            count++;
        }
        x++;
    }
    return nums[4];
}

console.log(PrintOut());