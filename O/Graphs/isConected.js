let matrixt = [[0, 1, 0, 0],
			   [1, 0, 1, 1],
			   [1, 1, 0, 1],
			   [0, 1, 0, 0]];
			   
let matrixf = [[0, 1, 0, 0],
			   [0, 0, 0, 0],
			   [0, 1, 0, 1],
			   [0, 1, 1, 0]];

function isConected(g)
{	
	for(let i = 0; i < g.length; i++)
	{
        let k = 0;
		for(let j = 0; j < g.length; j++)
		{
			k += g[i][j];
		}
		if (k === 0) return false;
	}
	return true;
}
console.log(isConected(matrixt));
console.log(isConected(matrixf));