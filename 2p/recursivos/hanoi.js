let towers = ["A", "B", "C"];
let n = 4;

function hanoi(n, tOrigin, tTarget, tAux) {

    if (n === 1)
        console.log("Disco" + n + " de torre " + tOrigin + " a torre " + tTarget);
    else {

        hanoi(n - 1, tOrigin, tAux, tTarget);
        console.log("Disco" + n + " de torre " + tOrigin + " a torre " + tTarget);
        hanoi(n - 1, tAux, tTarget, tOrigin);
    }
}

hanoi(n, towers[0], towers[2], towers[1]);
