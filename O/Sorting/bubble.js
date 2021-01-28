let arr = [7, 6, -2, 4, -5];

function Swap(ft, st)
{
    let tmp = arr[ft];
    arr[ft] = arr[st];
    arr[st] = tmp;
}

function BubbleSort()
{
    for(let i = 0; i < arr.length; i++)
    {
        let flag = false; //para optimizar evitando loops de ordenamiento innecesarios
        for(let j = 1; j < arr.length - i; j++)//por alguna razón restarle i al límite de este for funciona muy bien
        {
            if(arr[j] < arr[j - 1]) 
            {
                flag = true;
                Swap(j, j - 1);
            }
            console.log(arr);
        }
        if(!flag) return;
    }
}

BubbleSort();