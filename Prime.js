function isPrime(n)
{
    if(n<2)
    {
        return  "Its a prime number " ;
    }
    for (let i = 2 ; i<n ; i++)
    {
     if(n%i === 0)
     {
        return "Not a Prime number"
     }
  
    }    
    return          "Its a prime number " ;
    ;
}
let res = isPrime(3)
console.log(res)