function BinarySearch(arr , t)
{
    let leftIndex = 0;
    let rightIndex  = arr.length-1;
while(leftIndex <= rightIndex)
    {
      let middelIndex = Math.floor((leftIndex+rightIndex) / 2)
      if(t == arr[middelIndex])
      {
        return middelIndex;
      }
      if(t < arr[middelIndex])
      {
        rightIndex = middelIndex -1;
      }
      else
      {
        leftIndex = middelIndex+1
        
      }
    }
    return -1
}
console.log(BinarySearch([10,20,30,40,50,70], 40))
//console.log(BinarySearch([10,20,30,40,50,], 10))
console.log(BinarySearch([10,20,30,40,50], 20))
