

const toggleArticles = document.getElementById('toggleArticles')
const toggleContents = document.getElementById('toggleContents')
const formCloseBtn = document.getElementById('close_form_btn')
const loginForm = document.getElementById('login_form')
const articles = document.getElementById('articles')
const contents = document.getElementById('contents')
let ARICLES_STATUS = false
let CONTENTS_STATUS = false

toggleArticles.addEventListener('click',()=>{
    if (ARICLES_STATUS) {
        toggleArticles.classList.toggle('open')
        articles.style.left = 'calc(-100vw + 35px)'
        articles.style.zIndex = 3
        ARICLES_STATUS = false
    }
    else{
        toggleArticles.classList.toggle('open')
        articles.style.left = '0px'
        articles.style.zIndex = 5
        ARICLES_STATUS = true
    }
})

toggleContents.addEventListener('click',()=>{
    if (CONTENTS_STATUS) {
        toggleContents.classList.toggle('open')
        contents.style.right = 'calc(-100vw + 35px)'
        contents.style.zIndex = 3
        CONTENTS_STATUS = false
    }
    else{
        toggleContents.classList.toggle('open')
        contents.style.right = '0px'
        contents.style.zIndex = 5
        CONTENTS_STATUS = true
    }
})
formCloseBtn.addEventListener('click',()=>{
    loginForm.style.display='none'
})

function open_form(){
    loginForm.style.display='flex'
}
