/* 
Aguilar Cruz Abelardo 3°F

artimética modular (6)

no leer datos, ie usar constantes

si hoy es lunes

    qué dia será en 11 dias?

    private Queue<int> myQueue = new Queue<int>();
    js?.Invoke(false);
*/

let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "SATurday"];


function GetDayAddition() 
{   
    let today = 3;
    let addition = 11 + today;
    let answer = addition % 7;
    return week[answer];
}

console.log("Today plus eleven days is equal to: " + GetDayAddition());