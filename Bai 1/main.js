 const input = document.querySelector('#number')
 const tinh = document.querySelector('.tinh')
 const nhap = document.querySelector('.nhap')
 const result = document.querySelector('.result')

 function validate(input) {
    if ((/^[0-9]+$/.test(input.value))) {
        return true
    }
    return false
}

function sum(n) {
    var sum = 0
    for (var i = 1;i<=n;i++){
        if (n>0){
            sum = sum + i * i;
        }
    }
    return sum
}


tinh.onclick = function() {
    result.innerHTML = sum(input.value)
}