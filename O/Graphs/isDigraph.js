let mtxt = [[0, 0, 0, 1, 1],
		    [1, 0, 1, 1, 0],
		    [1, 0, 0, 1, 0],
            [0, 0, 0, 0, 1],
            [0, 1, 1, 0, 0]];

let mtxf = [[0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0]];

function isDigraph(g)//es dirigido?
{
    for(let i = 0; i < g.length - 1; i++)
    {
        for(let j = i + 1; j < g.length; j++)
        {
            if(g[i][j] === g[j][i]) return false;
        }
    }
    return true;
}

console.log(isDigraph(mtxt));
console.log(isDigraph(mtxf));