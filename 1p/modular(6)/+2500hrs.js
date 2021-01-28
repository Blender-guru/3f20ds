/* 
Aguilar Cruz Abelardo 3°F

artimética modular (6)

no leer datos, ie usar constantes

si son las 10am

    ¿qué horas serán en 2500hrs?

    private Queue<int> myQueue = new Queue<int>();
    js?.Invoke(false);
*/

function GetTimeAddition()
{
    let time = 10;
    let addition = 2500 + time;
    let answ = addition % 24;
    return answ;
}

console.log("10:00 + 2500 hrs = " + GetTimeAddition() + ":00");
