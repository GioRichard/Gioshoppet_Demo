const inputs = document.querySelectorAll("input")
const submit = document.querySelector("button[type=submit]")

console.log(submit)

function validation(input){
    let message = ''
    if (input.name === 'name'){
        let name = /^[A-Za-z ]+$/ 
        if (!(/^[A-Za-z ]+$/).test(input.value.toString())){
            message = 'Họ và tên không được dùng chữ số'
        }
    }
    if (input.name === 'password'){
        if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/).test(input.value)){
            message = 'Mật khẩu cần chứa ít nhất 1 chữ hoa, 1 chữ thường, 1 chữ số, 1 kí tự đặc biệt và ít nhất 8 chữ số'
        }
    }
    if (input.name === 'password-confirm'){
        const passsword = document.querySelector("input[name=password]")
        console.log(password)
        if (input.value !== passsword.value){
            message = 'Mật khẩu khẳng định không khớp'
        }
    }
    if (input.name === 'tel'){
        if(!(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/).test(input.value)){
            message = 'Số điện thoại không được chứa ký tự đặc biệt ngoại trừ khoảng trắng và -'
        }
    }
    if (input.value === ''){
        message = 'Trường này không được để trống'
    }
    return message
}

submit.onclick = function handleSubmit(e) {
    for (var input of inputs){
        const message = input.closest(".input-wrap").querySelector(".message")
        message.innerHTML = validation(input)
    }
    e.preventDefault()
}
