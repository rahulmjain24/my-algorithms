function anagram(str1, str2) {
    if(str1.length !== str2.length) return false

    let frequency1 = {}
    let frequency2 = {}

    for(let s of str1){
        frequency1[s] = (frequency1[s] || 0) + 1
    }

    for(let s of str2){
        frequency2[s] = (frequency2[s] || 0) + 1
    }

    for(let key in frequency1){
        if(!(frequency1[key]===frequency2[key])) return false
    }
    return true    
}

console.log(anagram('hello','elloh'))