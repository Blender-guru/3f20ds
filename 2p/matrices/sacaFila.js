class  Matrix
{
    constructor(matrix)
    {
        this.matrix = matrix;
    }

    GetRow(number)
    {
            console.log(this.matrix[number - 1]);
    }
}

function MyFunction(r)
{
    let mtx = new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    console.log(mtx);
    console.log("");
    mtx.GetRow(r);
}
MyFunction(2);