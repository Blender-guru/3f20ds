/* 
Aguilar Cruz Abelardo 3°F

haciendo uso de esta secuencia S=[3,1,4,2,3] encontrar:

    IsRepeated(S);

    private Queue<int> myQueue = new Queue<int>();
    js?.Invoke(false);
*/
const S = [3,1,4,2,3];

function IsRepeated(list)
{
    var tmp = [];


    for(var i = 0; i < list.length; i++)
    {
        for(var j = 0; j < list.length; j++)
        {
            if(i != j && list[i] == list[j])
            {
                tmp.push(list[j]);
            }
        }
    }

    if(tmp.length > 0)
    {
        return true;
    }
    return false;
}

console.log("Repeated values are: " + IsRepeated(S));
