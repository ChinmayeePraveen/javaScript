//linear search 
//1.START FROM FIRST ELEMENT OF THE ARRAY AND MOVE TOWARDS LAST
//2.at each element you check if the element is a target element or not 
//3.if it is , return index of the array . if not return -1

function LinearSearch(arr , target)
{
    for(i=0 ; i< arr.length ; i++)
    {
    if(arr[i] == target)
    return i
    }
    return -1;
}

console.log(LinearSearch([10,20,30,50] , 60));
console.log(LinearSearch([10,20,30,50] , 50));
console.log(LinearSearch([10,20,30,50] , 10));



