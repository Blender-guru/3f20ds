/* 
Aguilar Cruz Abelardo 3°F

artimética modular (6)

no leer datos, ie usar constantes

si hoy es lunes

    qué dia será en n dias?

    private Queue<int> myQueue = new Queue<int>();
    js?.Invoke(false);
*/

let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "SATurday"];


function GetDayAddition(n) 
{   
    let today = 3;
    let addition = n + today;
    let answer = addition % 7;
    return week[answer];
}

console.log("Today plus two days is equal to: " + GetDayAddition(2));