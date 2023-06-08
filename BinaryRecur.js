function BinaryRecurssion (arr , target)
{
    return search(arr , target , 0 , arr.length-1)
}

function search(arr , target , leftIndex , rightIndex)
{
    if(leftIndex < rightIndex)
    {
        return -1
    }
    let middelIndex = Math.floor((leftIndex+rightIndex) /2)
    if(target < arr[middelIndex])
    {
        return search(arr ,target,leftIndex ,middelIndex-1 )
    }
    else
    {
        return search(arr,target, rightIndex , middelIndex+1)
    }
}
console.log([10,20,30,40,50] , 40)
console.log([10,20,30,40,50] , 40)