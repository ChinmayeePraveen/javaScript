function bubb(a)
{

    let swap
    do {
        swap=false
        for(i=0;i<a.length-1;i++){
        if(a[i]>a[i+1])
        {
            let temp=a[i]
            a[i]=a[i+1]
            a[i+1]=temp
            swap=true
        }
    }
    } while (swap);
}

a=[2,9,-1,-9]
bubb(a)
console.log(a)