function slidingWindow(arr,num){
    if(arr.length<num) return false

    let current = 0
    let max = 0

    for(let i=0;i<num;i++){
        max +=arr[i]
    }

    current = max

    for(let i =num;i<arr.length;i++){
        current = current - arr[i-num] + arr[i]
        if(current>max) max=current
    }
    return max
}


console.log(slidingWindow([1,2,3,4,5,6,7,3,6,8,1,2,4,6,45],3))