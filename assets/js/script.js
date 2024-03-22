

const toggleArticles = document.getElementById('toggleArticles')
const toggleContents = document.getElementById('toggleContents')
const formCloseBtn = document.getElementById('close_form_btn')
const loginForm = document.getElementById('login_form')
const articles = document.getElementById('articles')
const contents = document.getElementById('contents')

const contentHref = document.querySelectorAll("#contents a")
const articlesHref = document.querySelectorAll("#articles a")

let ARICLES_STATUS = false
let CONTENTS_STATUS = false



contentHref.forEach(i=>{
    i.addEventListener('click',()=>{
        toggleContent()

    })
})
articlesHref.forEach(i=>{
    i.addEventListener('click',()=>{ toggleArticle() })
})

toggleArticles.addEventListener('click',()=>{
     toggleArticle()
     if (CONTENTS_STATUS) {
        toggleContent()
     }

    })
toggleContents.addEventListener('click',()=>{
     toggleContent()
     if (ARICLES_STATUS) {
        toggleArticle()
     }
    })


function toggleArticle() {
    if (ARICLES_STATUS) {
        toggleArticles.classList.toggle('open')
        articles.style.left = '-100vw'
        articles.style.zIndex = 3
        ARICLES_STATUS = false
    }
    else{
        toggleArticles.classList.toggle('open')
        articles.style.left = '0px'
        articles.style.zIndex = 5
        ARICLES_STATUS = true
    }
}
function toggleContent() {
    if (CONTENTS_STATUS) {
        toggleContents.classList.toggle('open')
        contents.style.left = '-100vw'
        contents.style.zIndex = 3
        CONTENTS_STATUS = false
    }
    else{
        toggleContents.classList.toggle('open')
        contents.style.left = '0px'
        contents.style.zIndex = 5
        CONTENTS_STATUS = true
    }
}


formCloseBtn.addEventListener('click',()=>{
    loginForm.style.display='none'
})

function open_form(){
    loginForm.style.display='flex'
}

window.addEventListener('scroll', function() {
    var headers = document.querySelectorAll('article h1, article h2, article h3, article h4, article h5, article h6');

    for (var i = 0; i < headers.length; i++) {
      var currentHeader = headers[i];
      var nextHeader = headers[i + 1];
      var currentHeaderRect = currentHeader.getBoundingClientRect();
      var nextHeaderRect = nextHeader.getBoundingClientRect();
      
      if (currentHeaderRect.bottom >= nextHeaderRect.top) {
        currentHeader.style.position = 'static';
        nextHeader.style.position = 'sticky';
        nextHeader.style.textWrap = 'nowrap';
        nextHeader.style.overflow = 'hidden';
      }
      else if (currentHeaderRect.top >= nextHeaderRect.bottom) {
        currentHeader.style.position = 'sticky';
        nextHeader.style.position = 'static';;
        nextHeader.style.textWrap = 'wrap';
        nextHeader.style.overflow = 'vissible';
      }
      else {
        nextHeader.style.position = 'sticky';
        nextHeader.style.textWrap = 'wrap';
        nextHeader.style.overflow = 'vissible';
      }
    }
  });