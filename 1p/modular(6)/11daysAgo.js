/* 
Aguilar Cruz Abelardo 3°F

artimética modular (6)

no leer datos, ie usar constantes

si hoy es lunes

    qué dia fue hace 11 dias?

    private Queue<int> myQueue = new Queue<int>();
    js?.Invoke(false);
*/

let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "SATurday"];


function GetDayAddition() 
{   
    let today = 3;
    let substract = 11 % 7;
    let answer = 0;

    if(substract >= today)
    {
        answer = 7 + today - substract;
        return week[answer];
    }

    answer = today - substract;
    
    return week[answer];
}

console.log("Today less eleven days is equal to: " + GetDayAddition());