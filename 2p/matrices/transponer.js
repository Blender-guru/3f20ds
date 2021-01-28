class Matrix
{
    constructor(matrix)
    {
        this.matrix = matrix;
    }

    Transpose()
    {
        let ceroMatrix = [];
        for(let i = 0; i < this.matrix.length; i++)
        {
            ceroMatrix.push([]);
            for(let j = 0; j < this.matrix.length; j++)
                ceroMatrix[i].push(0);
        }

        for(let i = 0; i < this.matrix.length; i++)
        {
            for(let j = 0; j < this.matrix.length; j++)
                ceroMatrix[j][y] = this.matrix[i][j];
        }
        console.log(ceroMatrix);
    }
}

function MyFunction()
{
    let mtx = new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    console.log(mtx);
    console.log("");
    mtx.Transpose();
}

MyFunction();