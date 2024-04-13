const fontsContainer = document.querySelector('.fontsContainer')
const fontColorContainer = document.querySelector('.fontColorContainer')
const fontBackgroundColorContainer = document.querySelector('.fontBackgroundColorContainer')
const textTypeContainer = document.getElementById('textTypeContainer')
const createLinkContainer = document.getElementById('createLinkContainer')

let frame,frameContent, categoryName

frame = document.querySelector('iframe') 
frameContent = frame.contentDocument || frame.contentWindow.document;
frameContent.querySelector('body').setAttribute("contenteditable","true")



let alist = frameContent.querySelectorAll('a')
alist.forEach(i=>{
    i.setAttribute("contenteditable","false")
})

function init(){
    frame = document.querySelector('iframe') 
    frameContent = frame.contentDocument || frame.contentWindow.document;
    frameContent.querySelector('body').setAttribute("contenteditable","true")
}
//init()

iframe.onload = function() {
    frameContent = frame.contentDocument || frame.contentWindow.document;
    frameContent.querySelector('body').setAttribute("contenteditable","true")
    let alist = frameContent.querySelectorAll('a')
    alist.forEach(i=>{
        i.setAttribute("contenteditable","false")
    })
    frameContent.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            categoryName = event.target.href;
            console.log("Tıklanan linkin URL'si: ", categoryName);
        }
    });
};

function command(aCommandName, aShowDefaultUI='', aValueArgument=''){
   frameContent.execCommand(aCommandName, aShowDefaultUI, aValueArgument)
}

var allElements = frameContent.querySelectorAll('.editable')
allElements.forEach(el=>el.setAttribute('contenteditable','true'))

var images = frameContent.querySelectorAll('img')
images.forEach(img=>{
    img.addEventListener('click',(e)=>{
    e.target.getAttribute('src')
    var newUri = prompt("Yeni resim uri",e.target.getAttribute('src'))
    if (newUri != null && newUri != '' ) {
        e.target.setAttribute('src',newUri)
    }
})
})

const scaleSelect = document.getElementById('scaleSelect')
scaleSelect.addEventListener('change',()=>{
    console.log(frame.style.height);
    frame.style.transform = `scale(${scaleSelect.value})`
    console.log(scaleSelect.value);
    frame.style.transformOrigin = '50% 0';
    frame.style.height = `calc((100vh - 50px) * (1 / ${scaleSelect.value}))`
   
})

const pagesSelect = document.getElementById('pagesSelect')
pagesSelect.addEventListener('change',()=>{

   

    frame.src = pagesSelect.value
    //init()
    
   
})

function size(width) { 
   frame.width = width
   console.log(width);
}

  
//   frameContent.body.addEventListener('click',(event)=>{
//    init()
//  })
  
  
  var Menu = true
  var Attributes = true
  var Editting = true
  let mobileSelectStatus = true
  let laptopSelectStatus = true
  let DesktopSelectStatus = true

  var fontsContainerBool = false
  var fontColorContainerBool = false
  var fontBackgroundColorContainerBool = false
  var textTypeContainerBool = false
  var createLinkContainerBool = false
 
function toggleFontsContainer(){
     if (!fontsContainerBool) {
         fontsContainer.style.display='flex' 
         fontsContainerBool = true
     }else{
         fontsContainer.style.display='none'
         fontsContainerBool = false
     }
     
}
function toggleFontColorContainer(){
     if (!fontColorContainerBool) {
         fontColorContainer.style.display='flex' 
         fontColorContainerBool = true
     }else{
         fontColorContainer.style.display='none'
         fontColorContainerBool = false
     }
     
}
function toggleFontBackgroundColorContainer(){
     if (!fontBackgroundColorContainerBool) {
         fontBackgroundColorContainer.style.display='flex' 
         fontBackgroundColorContainerBool = true
     }else{
         fontBackgroundColorContainer.style.display='none'
         fontBackgroundColorContainerBool = false
     }
}
function openTextTypeContainer(){
     if (!textTypeContainerBool) {
         textTypeContainer.style.display='flex' 
         textTypeContainerBool = true
     }else{
         textTypeContainer.style.display='none'
         textTypeContainerBool = false
     }
}
function openCreateLinkContainer(){
     if (!createLinkContainerBool) {
         createLinkContainer.style.display='flex' 
         createLinkContainerBool = true
     }else{
         createLinkContainer.style.display='none'
         createLinkContainerBool = false
     }
}

const linkInput = document.getElementById('linkInput')
function createLink(){
    command('createLink','',linkInput.value)
}
function unLink(){
    command('unlink')
}



const saveBtn = document.getElementById('saveBtn')
saveBtn.addEventListener('click',()=>{
    console.log('click save');
    frameContent.querySelector('body').setAttribute("contenteditable","false")
    var title =  frameContent.querySelector('h1').innerHTML
    var description =  frameContent.querySelector('p').innerHTML
    var content =  frameContent.querySelector('article').innerHTML
    
    var veriler = {
        category : categoryName,
        title: title,
        description: description,
        content: content
    };
    var jsonData = JSON.stringify(veriler);
    ajax(jsonData)
})

function ajax(data) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      if (this.readyState == 4 && this.status == 200) {
        //frameContent.getElementById("demo").innerHTML =
       //this.responseText;
        console.log(this.responseText);
        frameContent.querySelector('body').setAttribute("contenteditable","true")
      }
    };
   
    xhttp.open("POST", "save.php" ,true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //xhttp.setRequestHeader("Content-Type", "text/html; charset=UTF-8");
    xhttp.send("data=" + data);
  }

  