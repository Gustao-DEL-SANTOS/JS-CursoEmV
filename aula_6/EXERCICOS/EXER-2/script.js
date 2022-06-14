function tabuada() {
    let tab = document.getElementById('selectTb')
    let num = document.getElementById('txttb')

    if(num.length == 0) {
        alert('Digite um numero!')
    }else{
        let n = 1
        num = Number(num.value)
        tab.innerHTML = ``
        for (n; n <= 10; n++) {
            let item = document.createElement('option')
            item.text = `${num} X ${n} = ${num*n}`
            item.value = `tab${n}`
            
            if(n%2 == 0){
                item.className = `cor-blue`
            }else{
                item.className = `cor-black`
            }
            tab.appendChild(item)
            
            
        }
    }

    
    
}