/* 
Aguilar Cruz Abelardo 3°F

haciendo uso de esta secuencia S=[3,1,4,2,3] encontrar:

    avg(S);

    private Queue<int> myQueue = new Queue<int>();
    js?.Invoke(false);
*/

const S = [3,1,4,2,3];

function avg(list)
{
    var tmp = 0;


    for(var i = 0; i < list.length; i++)
    {
        tmp += list[i];
    }
    return tmp / list.length;
}

console.log("The average is " + avg(S));