function quick(arr)
{
    if(arr.length<2)
    
    return arr;
    
    let pivot = arr[arr.length-1]
    let left =[]
    let right=[]
    for(i=0;i<arr.length-1;i++)
    {
        if(arr[i]<pivot)
        {
            left.push(arr[i])
        }
        else
        {
            right.push(arr[i])
        }
    }
    return  [...quick(left) , pivot , ...quick(right)]
}

arr = [2,4,1,6,0,9]
quick(arr)
console.log(quick(arr))