function sumzero(arr){
    let p1 = 0
    let p2 = arr.length-1

    while(p1<p2){
        if(arr[p1]+arr[p2]===0) return [arr[p1],arr[p2]]
        if(arr[p1]+arr[p2]>0) p2-=1
        else p1+=1
    }
    return false
}   

console.log(sumzero([1,2,3,4]))

