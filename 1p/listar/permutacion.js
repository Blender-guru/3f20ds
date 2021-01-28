/* 
Aguilar Cruz Abelardo 3°F

haciendo uso de esta secuencia S=[3,1,4,2,3] listar:

    permutaciones(S)

    private Queue<int> myQueue = new Queue<int>();
    js?.Invoke(false);
*/

const S = [3,1,4,2,3];

var permArr = [], usedChars = [];
 
function permute(input) 
{ 
    var i, ch; 
    for (i = 0; i < input.length; i++) 
    { 
        ch = input.splice(i, 1)[0];
        usedChars.push(ch); 
        if (input.length == 0) 
        { 
            permArr.push(usedChars.slice()); 
        } 
        permute(input); 
        input.splice(i, 0, ch); 
        usedChars.pop(); 
    } 
        return permArr 
}

console.log(permute(S));
