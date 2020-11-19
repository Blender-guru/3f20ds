/* 
Aguilar Cruz Abelardo 3°F

artimética modular (6)

no leer datos, ie usar constantes

si son las 10am

    ¿qué horas fueron hace 2500hrs?

    private Queue<int> myQueue = new Queue<int>();
    js?.Invoke(false);
*/

function GetTimeSubstraction()
{
    let time = 10;
    let substract = 2500 % 24;

    if(substract > time)
    {
        return (24 + time) - substract;
    }

    return time - substract;
}

console.log("10:00 - 2500 hrs = " + GetTimeSubstraction() + ":00");