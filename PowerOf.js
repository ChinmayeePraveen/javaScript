function PowerOf2(n)
{
    if(n<1)
    {
        return  +n ,"not a power of 2" ;
    }
   while(n>1)
    {
     if(n%2 !==0)
     {
        return   ` is NOT  a power of 2` ;
     }
n=n/2;
    }    
    return   ` is a power of 2` ;
}
let res = PowerOf2(5)
console.log(res)