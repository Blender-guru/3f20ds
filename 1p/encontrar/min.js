/* 
Aguilar Cruz Abelardo 3°F

haciendo uso de esta secuencia S=[3,1,4,2,3] encontrar:

    min(S);

    private Queue<int> myQueue = new Queue<int>();
    js?.Invoke(false);
*/

const S = [3,1,4,2,3];

function min(list)
{
    var tmp = list[0];


    for(var i = 0; i < list.length; i++)
    {
        if(list[i] < tmp)
        {
            tmp = list[i];
        }
    }
    return tmp;
}

console.log("Min value is: " + min(S));