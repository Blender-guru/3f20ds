function MergeSort(input) 
{
  const { length : arraySize } = input;
  //let result = [];

  if (arraySize < 2) return input;
  const arrMiddle = Math.floor(arraySize/2);
  const sortedLeftArray = MergeSort(input.slice(0, arrMiddle));
  const sortedRightArray = MergeSort(input.slice(arrMiddle, arraySize));
  return Merge(sortedLeftArray, sortedRightArray);
}
  
function Merge (left, right)
{
  let result = [];
  while(left.length && right.length)
  {
    if(left[0] < right[0])
      result.push(left.shift());
    else
      result.push(right.shift());
  }
  
    return [...result, ...left, ...right];
}
  
  console.log(MergeSort([127, 192, 168, 254, 10, 1]));