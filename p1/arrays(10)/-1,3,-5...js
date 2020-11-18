/* 
Aguilar Cruz Abelardo 3°F

Generar e imprimir arrays (10) de n=10 números según corresponda

usar iteraciones de k={1,n}

no leer datos, ie usar constantes x=3

    -1, 3, -5...

    private Queue<int> myQueue = new Queue<int>();
    js?.Invoke(false);
*/

let count = 1;
let sign = new Boolean(true);//whut??
let positive = 1;
let negative = -1;

function SelectToPrint(n = 10)
{
    let nums = new Array();
    nums.push(negative);

    while(count <= n)
    {
        if(sign)
        {
            PrintOut(positive);
        }
        else
        {
            PrintOut(negative);
        }
    }
    return nums;
}

function PrintOut(formalSign)
{
    positive += 2;
    negative -= 2;
    nums.push(formalSign);
    sign = !sign;
    count++;
}

console.log(SelectToPrint());