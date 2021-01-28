class Matrix 
{
    constructor(matrix)
    {
        this.matrix = matrix;
    }
    GetColumn(number)
    {
        let column = [];
        for(let i = 0; i < this.matrix.length; i++)
            column.push(this.matrix[i][number-1]);
        
        console.log(column);
    }
}

function MyFunction(r)
{
    let mtx = new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    console.log(mtx);
    console.log("");
    mtx.GetColumn(r);
}
MyFunction(2);