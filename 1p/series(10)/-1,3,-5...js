/* 
Aguilar Cruz Abelardo 3°F

Imprimir series (10) de n=10 números según corresponda

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

function SelectToPrint()
{
    console.log(negative);
    

    while(count <= 10)
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
}

function PrintOut(formalSign)
{
    positive += 2;
    negative -= 2;
    console.log(formalSign);
    sign = !sign;
    count++;
}

SelectToPrint();