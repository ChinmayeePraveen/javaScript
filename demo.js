function mer(a)
{
    if(a.length<2)
    return a
    
    let m = Math.floor(a.length/2)
    let l = a.slice(0,m)
    let r =a.slice(m)

    return me(mer(l),mer(r))
}
function me(l , r)
{

    let s = []

    while(l.length && r.length)
    {
        if(l[0]<=r[0])
        {
s.push(l.shift())
        }
        else
        {
            s.push(r.shift())
        }
    }
    return [...s , ...l , ...r]
}

a = [0,2,8,4,1]
console.log(mer(a))