/* 
Aguilar Cruz Abelardo 3°F

haciendo uso de esta secuencia S=[3,1,4,2,3] encontrar:

    max(S);

    private Queue<int> myQueue = new Queue<int>();
    js?.Invoke(false);
*/

const S = [3,1,4,2,3];

function max(list)
{
    var tmp = 0;


    for(var i = 0; i < list.length; i++)
    {
        if(list[i] > tmp)
        {
            tmp = list[i];
        }
    }
    return tmp;
}

console.log("Max value is: " + max(S));