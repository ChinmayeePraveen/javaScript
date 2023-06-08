function linearSearch_recurssion(ar , t , i)
{
if(i== ar.length)
{
    return -1
}
if(ar[i]== t)
{
    return i;
}
else
{
    return linearSearch_recurssion(ar , t , i+1)
    
}
}
let ar = [2 , 3 , 4, 6]
let t =2
 i = 0

console.log(linearSearch_recurssion(ar , t , i))