function soma(n1=0, n2=0) { 
    return n1+n2
}

console.log(soma(2, 5))
console.log(soma(9, 5))
console.log(soma(9))


function fatorial(n){
    let num = 1
    while(n > 1){
        console.log(num *= n)
        n--
    }
    return num
}

let fat = fatorial(5)


// Recursividade 
function fatRecursao(n){
    if(n == 1){
        return 1
    }else{
        return n * fatRecursao(n -1)
    }
}

let ftr = fatRecursao(5)
console.log(`Fatorial com recursividade -> ${ftr}`)

