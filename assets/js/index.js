
const formCloseBtn = document.getElementById('close_form_btn')
const loginForm = document.getElementById('login_form')


formCloseBtn.addEventListener('click',()=>{
    loginForm.style.display='none'
})

function open_form(){
    loginForm.style.display='flex'
}