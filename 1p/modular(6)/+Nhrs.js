/* 
Aguilar Cruz Abelardo 3°F

artimética modular (6)

no leer datos, ie usar constantes

si son las 10am

    ¿qué horas serán en n hrs?

    private Queue<int> myQueue = new Queue<int>();
    js?.Invoke(false);
*/

function GetTimeAddition(n)
{
    let addition = 2500 + n;
    let answ = addition % 24;
    return answ;
}

console.log("6:00 + 2500 hrs = " + GetTimeAddition(6) + ":00");
