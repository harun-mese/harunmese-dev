const fontsContainer = document.querySelector('.fontsContainer')
const fontColorContainer = document.querySelector('.fontColorContainer')
const fontBackgroundColorContainer = document.querySelector('.fontBackgroundColorContainer')
const textTypeBox = document.getElementById('textTypeBox')
const createLinkContainer = document.getElementById('createLinkContainer')

const attributesContainer = document.querySelector('.attributesContainer')
const imageBox = document.querySelector('.imageBox')
const videoBox = document.querySelector('.videoBox')
const blockBox = document.querySelector('.blockBox')
const inlineSpanBox = document.querySelector('#inlineSpanBox')

const colorSelectContainer = document.querySelector('.colorSelectContainer')
const backcolorSelectContainer = document.querySelector('.backcolorSelectContainer')
const newContentBox = document.querySelector('.newContentBox')

let frame,frameContent, categoryName

frame = document.querySelector('iframe') 
frameContent = frame.contentDocument || frame.contentWindow.document;
frameContent.querySelector('body').setAttribute("contenteditable","true")


var deleteThisElem , selectedText, selectedImageEl

var selection, range
const selected = document.querySelector('#select-selected');
const items = document.querySelector('#select-items');

const fontFamCont = document.querySelector('#font-selected');
const fontFamItems = document.querySelector('.fontsContainer-select');
var iAttrB = false

var baloonTextEditor = document.querySelector('#baloonTextEditor')
var baloonLink = document.querySelector('#baloonLink')
var baloonColorBox = document.querySelector('#baloonColorBox')
var imageEditBox = document.querySelector('#imageEditBox')
var selectImageBox = document.querySelector('#selectImageBox')
var sectectableImage = document.querySelectorAll('#selectImageBox div img')
const stylingBox = document.querySelector("#stylingBox");
const blocksBox = document.querySelector("#blocksBox");

const stylingHandler = document.getElementById("stylingHandler");
const blocksHandler = document.getElementById("blocksHandler");

let isDraggingstyling = false;
let isDraggingblocks = false;


const secondFontInput = document.getElementById('secondFontInput');

const input = document.getElementById('custom-input');
const datalist = document.getElementById('custom-datalist');
const options = datalist.getElementsByTagName('li');
const fontSizeCount = document.getElementById('custom-input')




// const selectElement = document.querySelector('#selectElement')
// selectElement.addEventListener("change",(e)=>{

//    // alert(e.target.value)
// })


  
selected.addEventListener('click', function() {
    items.style.display = items.style.display === 'flex' ? 'none' : 'flex';
});

fontFamCont.addEventListener('click', function() {
    fontFamItems.style.display = fontFamItems.style.display === 'flex' ? 'none' : 'flex';
});

items.addEventListener('click', function(event) {
    //if (event.target.tagName === 'BUTTON') {
        selected.textContent = event.target.innerText;
        items.style.display = 'none';
        items.querySelectorAll('button').forEach(el=>{
            el.classList.remove('active')
        })
        event.target.classList.add("active")
    //}
});
fontFamItems.addEventListener('click', function(event) {
    //if (event.target.tagName === 'BUTTON') {
        fontFamCont.textContent = event.target.innerText;
        fontFamItems.style.display = 'none';
        fontFamItems.querySelectorAll('button').forEach(el=>{
            el.classList.remove('active')
        })
        event.target.classList.add("active")
    //}
});

document.addEventListener('click', function(event) {
    if (!event.target.matches('#select-selected')) {
        items.style.display = 'none';
    }
});


input.addEventListener('input', function() {
    const value = input.value.toLowerCase();
    datalist.style.display = value ? 'block' : 'none';
    for (let option of options) {
        const text = option.textContent.toLowerCase();
        option.style.display = text.includes(value) ? 'block' : 'none';
    }
    
});


input.addEventListener('focus', function() {
    if (input.value) {
        datalist.style.display = 'block';
    }
});

input.addEventListener('blur', function() {
    setTimeout(() => {
        datalist.style.display = 'none';
    }, 100);
});

for (let option of options) {
    option.addEventListener('mousedown', function(e) {
        input.value = e.target.textContent;

        selection = frameContent.getSelection();

    if (!selection.isCollapsed) {
        var range = selection.getRangeAt(0);
        var selectedText = range.toString();
        
        if (selectedText) {

            var parentElement = range.commonAncestorContainer.parentElement;
            
            if(parentElement.tagName === "SPAN"){
            parentElement.style.fontSize = input.value + "px";
        
            }else{
                var span = frameContent.createElement("span");
                span.innerText = selectedText;
                span.style.fontSize = input.value + "px";
                range.surroundContents(span);

            }
                
        }

    }else{
        var range = selection.getRangeAt(0);
        
        var parentElement = range.commonAncestorContainer.parentElement;
         parentElement.style.fontSize = input.value + "px";
    }

        datalist.style.display = 'none';
    });
}

function increaseValue() {
    
    let value = parseInt(input.value, 10);
    input.value = isNaN(value) ? 0 : value + 1;
    secondFontInput.innerHTML = isNaN(value) ? 0 : value + 1;

    selection = frameContent.getSelection();
    range = selection.getRangeAt(0);
    var selectedText = range.toString();


    if (!selection.isCollapsed) {
        

        if (selectedText) {
            // Kontrol edilen span
            var parentElement = range.commonAncestorContainer.parentElement;  
            var currentFontSize = parseFloat(frameContent.defaultView.getComputedStyle(parentElement).getPropertyValue('font-size'));
            let newFontSize;

             if (selection.anchorNode.nodeName !== "SPAN") {
                // Yeni bir span oluştur ve seçili metni bu span ile sar
                var span = frameContent.createElement("span");
                newFontSize = (currentFontSize + 1) + "px";
                span.style.fontSize = newFontSize;
                span.innerText = selectedText;

                range.deleteContents();
                range.insertNode(span);
   
                const newRange = frameContent.createRange();
                newRange.selectNodeContents(span);
                selection.removeAllRanges();
                selection.addRange(newRange);

               
            } else {
                
                var currentFontSize = parseFloat(frameContent.defaultView.getComputedStyle(selection.anchorNode.firstChild.parentElement).getPropertyValue('font-size'));
                newFontSize = (currentFontSize + 1) + "px";
                selection.anchorNode.firstChild.parentElement.style.fontSize = newFontSize;
            }

        }
    }else{
        var range = selection.getRangeAt(0);
        

            var parentElement = range.commonAncestorContainer.parentElement;
            var currentFontSize = parseFloat(frameContent.defaultView.getComputedStyle(parentElement).getPropertyValue('font-size'));

        parentElement.style.fontSize = (currentFontSize + 1) + "px";
    }
}

function decreaseValue() {
    let value = parseInt(input.value, 10);
    input.value = isNaN(value) ? 0 : value - 1;
    secondFontInput.innerHTML = isNaN(value) ? 0 : value - 1;
    selection = frameContent.getSelection();

    if (!selection.isCollapsed) {
        var range = selection.getRangeAt(0);
        var selectedText = range.toString();
        
        if (selectedText) {

            var parentElement = range.commonAncestorContainer.parentElement;
            var currentFontSize = parseFloat(frameContent.defaultView.getComputedStyle(parentElement).getPropertyValue('font-size'));

            if (selection.anchorNode.nodeName !== "SPAN") {
                // Yeni bir span oluştur ve seçili metni bu span ile sar
                var span = frameContent.createElement("span");
                newFontSize = (currentFontSize - 1) + "px";
                span.style.fontSize = newFontSize;
                span.innerText = selectedText;

                range.deleteContents();
                range.insertNode(span);
   
                const newRange = frameContent.createRange();
                newRange.selectNodeContents(span);
                selection.removeAllRanges();
                selection.addRange(newRange);

               
            } else {
                
                var currentFontSize = parseFloat(frameContent.defaultView.getComputedStyle(selection.anchorNode.firstChild.parentElement).getPropertyValue('font-size'));
                newFontSize = (currentFontSize - 1) + "px";
                selection.anchorNode.firstChild.parentElement.style.fontSize = newFontSize;
            }
                
        }

    }else{
        var range = selection.getRangeAt(0);
        

            var parentElement = range.commonAncestorContainer.parentElement;
            var currentFontSize = parseFloat(frameContent.defaultView.getComputedStyle(parentElement).getPropertyValue('font-size'));

        parentElement.style.fontSize = (currentFontSize - 1) + "px";
    }
}


document.execCommand('defaultParagraphSeparator', false, 'p');
frameContent.execCommand('defaultParagraphSeparator', false, 'p');


sectectableImage.forEach(el=>{
    el.addEventListener('click',()=>{
        selectedImageEl.src = el.src
    })
})


stylingHandler.addEventListener("mousedown", () => {
    isDraggingstyling = true;
    frame.style.zIndex = "-2"
    stylingBox.style.zIndex = 5
    blocksBox.style.zIndex = 2
});
blocksHandler.addEventListener("mousedown", () => {
    isDraggingblocks = true;
    frame.style.zIndex = "-2"
    stylingBox.style.zIndex = 2
    blocksBox.style.zIndex = 5
});

document.addEventListener("mousemove", (e)=> {
    if (isDraggingstyling) {
        stylingBox.style.left = e.clientX  - 150 + "px";
        stylingBox.style.top = e.clientY - 10 + "px";
    }
    if (isDraggingblocks) {
        blocksBox.style.left = e.clientX  - 150 + "px";
        blocksBox.style.top = e.clientY - 10 + "px";
    }
});

document.addEventListener("mouseup", function() {
    isDraggingstyling = false;
    isDraggingblocks = false;
    frame.style.zIndex = "initial"

});


frameContent.addEventListener('mouseup', function() {

    isDraggingstyling = false;
    isDraggingblocks = false;
    frame.style.zIndex = "initial"

    selection = frameContent.getSelection();
    range = selection.getRangeAt(0);

    if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        // console.log("2");
        if (range) {
            const rect = range.getBoundingClientRect();
            const iframeRect = iframe.getBoundingClientRect();
            
            const width = rect.width;
            const height = rect.height;
            const x = rect.left + window.scrollX + iframeRect.left;
            const y = rect.top + window.scrollY + iframeRect.top;

            // console.log("3");

            baloonTextEditor.style.display = 'flex'
            baloonTextEditor.style.top = y - 60 + "px"
            baloonTextEditor.style.left = x  + "px"

            baloonColorBox.style.display = 'none'
            baloonColorBox.style.top = y + 30 + "px"
            baloonColorBox.style.left = x + 118 + "px"
            
            baloonLink.style.display = 'none'
            baloonLink.style.top = y + 30 + "px"
            baloonLink.style.left = x  + "px"
            
            // console.log(`Genişlik: ${width}`);
            // console.log(`Yükseklik: ${height}`);
            // console.log(`X Koordinatı: ${x}`);
            // console.log(`Y Koordinatı: ${y}`);
        }
    } else {
        console.warn('Geçerli bir seçim bulunamadı.');
    }
});

frameContent.addEventListener('scroll',()=>{
    baloonTextEditor.style.display = 'none'
    baloonLink.style.display = 'none'
    baloonColorBox.style.display = 'none'
    imageEditBox.style.display = 'none'
    inlineSpanBox.style.display = 'none'
})



function openBaloonLink(){
  baloonLink.style.display = 'flex'
  const linkInput = document.querySelector('#baloonLink input')

    var selection = frameContent.getSelection();
    console.log(selection);

  if (selection.anchorNode.parentElement.nodeName == 'A') {
    linkInput.value = selection.anchorNode.parentElement.href
  }else{
    linkInput.value = ''

  }
}


function closeBaloonLink(){
    baloonLink.style.display = 'none'
    command('unLink')
}
function createBaloonLink(){
    const linkInput = document.querySelector('#baloonLink input')
    command('createLink',false,linkInput.value)
    baloonLink.style.display = 'none'
}
function openBaloonColorBox(){
    baloonColorBox.style.display = 'flex'
  }

  function closeBaloonTextEditor(){
    baloonTextEditor.style.display = "none"
  }
  function openBaloonTextEditor(){
    baloonTextEditor.style.display = "flex"
  }

  function insertYoutube(){
    command('insertHTML',false,`<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/UCysoeahJME?si=JjC58hSqSzgKx40N&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

`)
  }


function initImages() {
    let imgs = frameContent.querySelectorAll('img')
    let inlineSpan = frameContent.querySelectorAll('.inlineSpan')
    imgs.forEach(i=>{

        // var isdiv = document.createElement('div')
        // isdiv.classList.add("isDivClass")
        
        // var isdivBtn = document.createElement('button')
        // isdivBtn.textContent = 'denemememe'
        // isdiv.appendChild(isdivBtn)
        
        // console.log(i.nodeName);
        // var articleBody = frameContent.querySelector('article')

        // articleBody.insertBefore(isdiv,i)


        var currentStyle = i.getAttribute("style");

        if (currentStyle) {
            var updatedStyle = currentStyle + "cursor:pointer;" ;
        } else {
            var updatedStyle = "cursor:pointer;"
        }

    //    var st = i.getAttribute("style")
    //    st.add("cursor:pointer") 

       i.setAttribute("style", updatedStyle)

        i.addEventListener('click',(e)=>{

            deleteThisElem = i
            selectedImageEl = i
            // e.target.getAttribute('src')
            // var newUri = prompt("Yeni resim uri",e.target.getAttribute('src'))
            // if (newUri != null && newUri != '' ) {
            //     e.target.setAttribute('src',newUri)
            // }
            // imgs.forEach(i=>{
            //     i.style.border = "none"
            // })

            // i.style.border = "3px dashed gainsboro"

            console.log(e.view.window.innerWidth);
            console.log(((window.innerWidth - e.view.window.innerWidth) / 2 ) + e.clientX + "px");
          
           // if (e.target.parentElement.nodeName == "IMG") {
                //    var rect = e.target.getBoundingClientRect()
                //    console.log(rect.width);
                // }

                imageEditBox.style.display = 'flex'
                imageEditBox.style.top =  e.clientY  + 'px'
                imageEditBox.style.left = ((window.innerWidth - e.view.window.innerWidth) / 2 ) + e.clientX - 47 + "px"

           const iAttr  = document.querySelector('#imgAttr')

            // if (iAttrB == false) {
            //     //frameContent.body.style.overflowY = 'hidden'
            //     // frameContent.querySelector('article').style.backgroundColor = 'black'
            //     // frameContent.querySelector('#articles').style.backgroundColor = 'black'
            //     // frameContent.querySelector('#contents').style.backgroundColor = 'black'

            //     // i.style.boxShadow = "0 0 15px 5px rgba(0, 0, 0, 0.1818181818)"
            //     iAttr.style.width = "300px" 
            //     iAttr.style.padding = "10px 5px" 
            //     iAttr.style.border = "1px solid rgba(0, 0, 0, 0.1818181818)" 
            //     // iAttr.style.top = e.clientY + 60 + "px";
            //     // iAttr.style.left = ((window.innerWidth - e.view.window.innerWidth) / 2 ) + e.clientX + "px";

            //     iAttr.querySelector("img").src = i.src
            //     iAttrB = true
            // }else{  
            //      //frameContent.body.style.overflowY = 'initial'
            //     // frameContent.body.style.backgroundColor = 'initial'
            //     // frameContent.querySelector('article').style.backgroundColor = 'initial'
            //     // frameContent.querySelector('#articles').style.backgroundColor = 'initial'
            //     // frameContent.querySelector('#contents').style.backgroundColor = 'initial'

            //     // i.style.boxShadow = "none"
            //     iAttr.style.width = "0px" 
            //     iAttr.style.padding = "0px" 
            //     iAttr.style.border = "none" 
            //     iAttrB = false
            // }

          })


    })

    inlineSpan.forEach(i=>{

        var currentStyle = i.getAttribute("style");

        if (currentStyle) {
            var updatedStyle = currentStyle + "cursor:pointer;" ;
        } else {
            var updatedStyle = "cursor:pointer;"
        }

       i.setAttribute("style", updatedStyle)

        i.addEventListener('click',(e)=>{

            deleteThisElem = i
            selectedImageEl = i

            console.log(e.view.window.innerWidth);
            console.log(((window.innerWidth - e.view.window.innerWidth) / 2 ) + e.clientX + "px");
          
            inlineSpanBox.style.display = 'flex'
            inlineSpanBox.style.top =  e.clientY + 90  + 'px'
            inlineSpanBox.style.left = ((window.innerWidth - e.view.window.innerWidth) / 2 ) + e.clientX - 200 + "px"
          })


    })
}

initImages()

function deleteImage(){
 deleteThisElem.remove()
}
function openSelectImageBox(){
    console.log('open image box');
    selectImageBox.style.display = 'block'
}

function closeImageBox(){
    selectImageBox.style.display = 'none'
    console.log('close image box');
}




let alist = frameContent.querySelectorAll('a')
alist.forEach(i=>{
    i.setAttribute("contenteditable","false")
})

function init(){
    frame = document.querySelector('iframe') 
    frameContent = frame.contentDocument || frame.contentWindow.document;
    frameContent.querySelector('body').setAttribute("contenteditable","true")
}

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


initImages()
};

frameContent.body.onclick = function(e){
// console.log(e);


const fontSize = getComputedStyle(event.target).fontSize;
// console.log('Font size of the clicked element:', fontSize);
input.value = fontSize
secondFontInput.innerHTML = fontSize

if (e.target.parentElement.nodeName == "ARTICLE") {
    switch(e.target.tagName) {
        case "P":
            selected.textContent = "Paragraf"
          break;
        case "H1":
          selected.textContent = "H1 Başlık"
          break;
          case "H1":
          selected.textContent = "H1 Başlık"
          break;
          case "H2":
          selected.textContent = "H2 Başlık"
          break;
          case "H3":
          selected.textContent = "H3 Başlık"
          break;
          case "BLOCKQUOTE":
          selected.textContent = "Blocknquote"
          break;
        
        default:
          selected.textContent = "Paragraf"
      }
}else if(e.target.parentElement.nodeName == "OL"){
    selected.textContent = "1. Numaralı liste"
}else if(e.target.parentElement.nodeName == "UL"){
    selected.textContent = "Madde işaretli liste"
}
else if(e.target.parentElement.nodeName == "P"){
    selected.textContent = "Paragraf"
}


// if (e.target.parentElement.nodeName == "IMG") {
//    var rect = e.target.getBoundingClientRect()
//    console.log(rect.width);
// }


}


function ImgName(){
    const imgNum = Math.floor(Math.random() * 25) + 1
    return './assets/uploads/img'+imgNum+'.jpeg';
}

function command(aCommandName, aShowDefaultUI='', aValueArgument=''){
    if(aCommandName == 'insertImage'){
        frameContent.execCommand(aCommandName, aShowDefaultUI, ImgName())
    }else{
        frameContent.execCommand(aCommandName, aShowDefaultUI, aValueArgument)
    }
   
   initImages()
}

command('defaultParagraphSeparator',false,'P')
var allElements = frameContent.querySelectorAll('.editable')
allElements.forEach(el=>el.setAttribute('contenteditable','true'))



 const scaleSelect = document.getElementById('scaleSelect')
 scaleSelect.addEventListener('change',()=>{
    // console.log(frame.style.height);
     //frame.style.transform = `scale(${scaleSelect.value})`
     //console.log(scaleSelect.value);
    // frame.style.transformOrigin = '50% 0';
    // frame.style.height = `calc((100vh - 50px) * (1 / ${scaleSelect.value}))`
    size(scaleSelect.value)
 })

// const pagesSelect = document.getElementById('pagesSelect')
// pagesSelect.addEventListener('change',()=>{

//     frame.src = pagesSelect.value
//     //init()
       
// })

function size(width) { 
    
   frame.width = width
   console.log(width);
}


  
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
var attributesContainerBool = false

var imageBoxBool = false
var videoBoxBool = false
var blockBoxBool = false


var colorSelectContainerBool = false
var backcolorSelectContainerBool = false

var newContentBoxBool = false   


   function opennewContentBox(){
   

   const newcontentBtn = document.getElementById('newcontentBtn')
    if (!newContentBoxBool) {
         iframe.src = "./article.html"
         newcontentBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
         <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
       </svg>`
         // newContentBox.style.display='flex' 
         newContentBoxBool = true
     }else{
        iframe.src = "./index.html"
         newcontentBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-plus-circle-dotted" viewBox="0 0 16 16">
         <path d="M8 0q-.264 0-.523.017l.064.998a7 7 0 0 1 .918 0l.064-.998A8 8 0 0 0 8 0M6.44.152q-.52.104-1.012.27l.321.948q.43-.147.884-.237L6.44.153zm4.132.271a8 8 0 0 0-1.011-.27l-.194.98q.453.09.884.237zm1.873.925a8 8 0 0 0-.906-.524l-.443.896q.413.205.793.459zM4.46.824q-.471.233-.905.524l.556.83a7 7 0 0 1 .793-.458zM2.725 1.985q-.394.346-.74.74l.752.66q.303-.345.648-.648zm11.29.74a8 8 0 0 0-.74-.74l-.66.752q.346.303.648.648zm1.161 1.735a8 8 0 0 0-.524-.905l-.83.556q.254.38.458.793l.896-.443zM1.348 3.555q-.292.433-.524.906l.896.443q.205-.413.459-.793zM.423 5.428a8 8 0 0 0-.27 1.011l.98.194q.09-.453.237-.884zM15.848 6.44a8 8 0 0 0-.27-1.012l-.948.321q.147.43.237.884zM.017 7.477a8 8 0 0 0 0 1.046l.998-.064a7 7 0 0 1 0-.918zM16 8a8 8 0 0 0-.017-.523l-.998.064a7 7 0 0 1 0 .918l.998.064A8 8 0 0 0 16 8M.152 9.56q.104.52.27 1.012l.948-.321a7 7 0 0 1-.237-.884l-.98.194zm15.425 1.012q.168-.493.27-1.011l-.98-.194q-.09.453-.237.884zM.824 11.54a8 8 0 0 0 .524.905l.83-.556a7 7 0 0 1-.458-.793zm13.828.905q.292-.434.524-.906l-.896-.443q-.205.413-.459.793zm-12.667.83q.346.394.74.74l.66-.752a7 7 0 0 1-.648-.648zm11.29.74q.394-.346.74-.74l-.752-.66q-.302.346-.648.648zm-1.735 1.161q.471-.233.905-.524l-.556-.83a7 7 0 0 1-.793.458zm-7.985-.524q.434.292.906.524l.443-.896a7 7 0 0 1-.793-.459zm1.873.925q.493.168 1.011.27l.194-.98a7 7 0 0 1-.884-.237zm4.132.271a8 8 0 0 0 1.012-.27l-.321-.948a7 7 0 0 1-.884.237l.194.98zm-2.083.135a8 8 0 0 0 1.046 0l-.064-.998a7 7 0 0 1-.918 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
       </svg>`
        // newContentBox.style.display='none'
         newContentBoxBool = false
     }
    
}
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


function addAttribute(attr){
    selection = frameContent.getSelection();

    if (!selection.isCollapsed) {
        var range = selection.getRangeAt(0);
        var selectedText = range.toString();
        
        if (selectedText) {

            var parentElement = range.commonAncestorContainer.parentElement;

            if(attr == "id"){
               parentElement.id = prompt('id name','')
            }
            if(attr == "class"){
                parentElement.classList.add(prompt('class name',''))
             }
                
        }

    }
}

const linkBtn = document.getElementById('linkBtn')
function openCreateLinkContainer(){
     if (!createLinkContainerBool) {
         linkBtn.classList.toggle('active')
         createLinkContainer.style.display='flex' 
         createLinkContainerBool = true
     }else{
        linkBtn.classList.toggle('active')
         createLinkContainer.style.display='none'
         createLinkContainerBool = false
     }
}


function createLink(){
    const linkInput = document.getElementById('linkInput')
    command('createLink',false,linkInput.value)
}
function unLink(){
    command('unlink')
}

function openAttributesContainer(){
    if (!attributesContainerBool) {
        attributesContainer.style.display='flex' 
        attributesContainerBool = true
    }else{
        attributesContainer.style.display='none'
        attributesContainerBool = false
    }
}

function openImageBox(){
    if (!imageBoxBool) {
        // imageBox.style.display='flex' 
        // imageBox.style.width = "300px" 
        imageBoxBool = true
    }else{
        // imageBox.style.display='none'
        // imageBox.style.width ='0' 
        imageBoxBool = false
    }
}
function openVideoBox(){
    if (!videoBoxBool) {
        videoBox.style.display='flex' 
        videoBoxBool = true
    }else{
        videoBox.style.display='none'
        videoBoxBool = false
    }
}



const textTypeBtn = document.getElementById('textTypeBtn')
// left
function opentextTypeBox(){
    if (!textTypeContainerBool) {
        textTypeBtn.classList.toggle('active')
        textTypeBox.style.display='flex'
         textTypeContainerBool = true

   }else{

         textTypeBtn.classList.toggle('active')
         textTypeBox.style.display='none'
         textTypeContainerBool = false

    }
}
// center


function toggleFontBackgroundColorContainer(el){
    if (!fontBackgroundColorContainerBool) {
        stylingBox.style.display='block'
        el.classList.toggle('active')
        fontBackgroundColorContainerBool = true
    
    }else{
        stylingBox.style.display='none'
        el.classList.toggle('active')
        fontBackgroundColorContainerBool = false
    }
}
// right
function openbBlockBox(el){
    if (!blockBoxBool) {
        blocksBox.style.display='block' 
        blockBoxBool = true
        el.classList.toggle('active')
    }else{
        blocksBox.style.display='none'
        blockBoxBool = false
        el.classList.toggle('active')
    }
}
var settingState = false
const settingBox = document.getElementById('settingBox')

function openSettings(el) {
    if (!settingState) {
        settingBox.style.display='block' 
        settingState = true
        el.classList.toggle('active')
    }else{
        settingBox.style.display='none'
        settingState = false
        el.classList.toggle('active')
    }
    
}


const colorBtn = document.getElementById('colorBtn')
const backColorBtn = document.getElementById('backColorBtn')
function openColors(){
    if (!colorSelectContainerBool) {
        colorBtn.classList.toggle('active')
        colorSelectContainer.style.display='flex' 
        colorSelectContainerBool = true
        if (backcolorSelectContainerBool) {
            backColorBtn.classList.toggle('active')
            backcolorSelectContainer.style.display='none' 
            backcolorSelectContainerBool = false
        }
    
    }else{
        colorBtn.classList.toggle('active')
        colorSelectContainer.style.display='none'
        colorSelectContainerBool = false
    }
    
}
function openBackColors(){
    if (!backcolorSelectContainerBool) {
        backColorBtn.classList.toggle('active')
        backcolorSelectContainer.style.display='flex' 
        backcolorSelectContainerBool = true

        if (colorSelectContainerBool) {
            colorBtn.classList.toggle('active')
            colorSelectContainer.style.display='none'
            colorSelectContainerBool = false
        }

    }else{
        backColorBtn.classList.toggle('active')
        backcolorSelectContainer.style.display='none'
        backcolorSelectContainerBool = false
    }
    
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

var codeEditorContainer = document.getElementById('codeEditorContainer')

function openCode(){
    codeEditorContainer.style.display= 'flex'
}

function closeCode(){
    codeEditorContainer.style.display= 'none'
}

  const editor = document.getElementById('codeEditor');
  const outputPre = document.getElementById('out');
  const preTag = document.getElementById('preTag');
  const language = document.getElementById('language_select');
  const linenumber = document.getElementById('line_numbers');
  
  language.addEventListener('change',()=>{
    const code = editor.value;
    outputPre.textContent = code;
    if (linenumber.checked) {
        preTag.classList.add('line-numbers')
    } else {
        preTag.classList.remove('line-numbers')
    }
    const language = document.getElementById('language_select').value;
    outputPre.className = `${language}`;
    Prism.highlightElement(outputPre);
  })

  linenumber.addEventListener('change',()=>{
    const code = editor.value;
    outputPre.textContent = code;

    const language = document.getElementById('language_select').value;
    outputPre.className = `${language}`;
    if (linenumber.checked) {
        preTag.classList.add('line-numbers')
    } else {
        preTag.classList.remove('line-numbers')
    }
    Prism.highlightElement(outputPre);
  })
  

  editor.addEventListener('input',()=>{
    const code = editor.value;
    outputPre.textContent = code;

    if (linenumber.checked) {
        preTag.classList.add('line-numbers')
    } else {
        preTag.classList.remove('line-numbers')
    }

    
    const language = document.getElementById('language_select').value;
    outputPre.className = `${language}`;
    Prism.highlightElement(outputPre);
  })

function changeTheme() {
const theme = document.getElementById('theme_select').value;
themeLink.href = `./assets/css/${theme}.css`;
}

  function insertCode() {
     
      const language = document.getElementById('language_select').value;
      const theme = document.getElementById('theme_select').value;

    

      const themeLink = frameContent.getElementById('themeLink');
      if (themeLink) {
          themeLink.href = `./assets/css/${theme}.css`;
      } else {
          const link = frameContent.createElement('link');
          link.rel = 'stylesheet';
          link.id = 'themeLink';
          link.href = `./assets/css/${theme}.css`;
          frameContent.head.appendChild(link);
      }
      console.log(outputPre.innerHTML);
     
      if (linenumber.checked) {
        command("insertHTML",false ,`<pre class="${language} line-numbers" tabindex="0"><code class="${language}">${outputPre.innerHTML}</code></pre>`)
    } else {
        command("insertHTML",false ,`<pre class="${language}" tabindex="0"><code class="${language}">${outputPre.innerHTML}</code></pre>`)
    }

    const article = frameContent.getElementsByTagName('article')[0];
    Prism.highlightAllUnder(article);

      codeEditorContainer.style.display = "none"
  }


function decreaseFontSize() {
    selection = frameContent.getSelection();

    if (!selection.isCollapsed) {
        var range = selection.getRangeAt(0);
        var selectedText = range.toString();
        
        if (selectedText) {

            var parentElement = range.commonAncestorContainer.parentElement;
            var currentFontSize = parseFloat(frameContent.defaultView.getComputedStyle(parentElement).getPropertyValue('font-size'));

            if(parentElement.tagName === "SPAN"){
               parentElement.style.fontSize = (currentFontSize - 2) + "px";
               var count = fontSizeCount.innerText
               fontSizeCount.innerText = (currentFontSize - 2)
            }else{
                var span = frameContent.createElement("span");
                span.innerText = selectedText;
                span.style.fontSize = (currentFontSize - 2) + "px"; // Font boyutunu 2px artır
                range.surroundContents(span);
                var count = fontSizeCount.innerText
               fontSizeCount.innerText = (currentFontSize - 2)

            }
                
        }

    }
}

function increaseFontSize() {
  
    selection = frameContent.getSelection();

    if (!selection.isCollapsed) {
        var range = selection.getRangeAt(0);
        var selectedText = range.toString();
        
        if (selectedText) {

            var parentElement = range.commonAncestorContainer.parentElement;
            var currentFontSize = parseFloat(frameContent.defaultView.getComputedStyle(parentElement).getPropertyValue('font-size'));

            if(parentElement.tagName === "SPAN"){
               parentElement.style.fontSize = (currentFontSize + 2) + "px";
               var count = fontSizeCount.innerText
               fontSizeCount.innerText = (currentFontSize + 2)
            }else{
                var span = frameContent.createElement("span");
                span.innerText = selectedText;
                span.style.fontSize = (currentFontSize + 2) + "px"; // Font boyutunu 2px artır
                range.surroundContents(span);
                var count = fontSizeCount.innerText
               fontSizeCount.innerText = (currentFontSize + 2)

            }
                
        }

    }
}




function withBorder(borderDash ,borderType, borderColor, radius) {
    selection = frameContent.getSelection();

    if (!selection.isCollapsed) {
        var range = selection.getRangeAt(0);
        var selectedText = range.toString();
        
        if (selectedText) {

            var parentElement = range.commonAncestorContainer.parentElement;
            var currentFontSize = parseFloat(frameContent.defaultView.getComputedStyle(parentElement).getPropertyValue('font-size'));

            if(parentElement.tagName === "SPAN"){
               parentElement.style.border = borderDash + "px " + borderType + " " + borderColor ;
               parentElement.style.color =  borderColor ;
               parentElement.style.borderRadius = radius+"px" ;
               parentElement.style.padding = "0 10px" ;
               parentElement.style.width = "fit-content";
               parentElement.style.display = "inline-block" ;


               //color: #8a2be2;display: block;border: 1px solid #8a2be2;border-radius: 20px;padding: 0 10px; width: fit-content;
            }else{
                var span = frameContent.createElement("span");
                span.innerText = selectedText;
                span.style.border = borderDash + "px " + borderType + " " + borderColor ;
                span.style.color =  borderColor ;
                span.style.borderRadius = radius+"px" ;
                span.style.padding = "0 10px" ;
                span.style.width = "fit-content";
                span.style.display = "inline-block" ;
                range.surroundContents(span);

            }
                
        }

    }else{
        var range = selection.getRangeAt(0);
        

            var parentElement = range.commonAncestorContainer.parentElement;
            var currentFontSize = parseFloat(frameContent.defaultView.getComputedStyle(parentElement).getPropertyValue('font-size'));

            // if(parentElement.tagName === "SPAN"){
               parentElement.style.border = borderDash + "px " + borderType + " " + borderColor ;
               parentElement.style.color =  borderColor ;
               parentElement.style.borderRadius = radius+"px" ;
               parentElement.style.padding = "10px 20px" ;
               //parentElement.style.width = "fit-content";
              // parentElement.style.display = "inline-block" ;
            // }
    }
}


var rotateSpantext = document.getElementById('rotateSpantext')

function rotateSpan(deg) {
    selection = frameContent.getSelection();

    if (!selection.isCollapsed) {
        var range = selection.getRangeAt(0);
        var selectedText = range.toString();
        
        if (selectedText) {

            var parentElement = range.commonAncestorContainer.parentElement;
            var currentFontSize = parseFloat(frameContent.defaultView.getComputedStyle(parentElement).getPropertyValue('font-size'));

          
           rotateSpantext.style.transform ="rotateZ("+ deg  + "deg)"


            if(parentElement.tagName === "SPAN"){
               parentElement.style.transform = "rotateZ("+ deg  + "deg)" ;
        
               parentElement.style.width = "fit-content";
               parentElement.style.display = "inline-block" ;
            

               //color: #8a2be2;display: block;border: 1px solid #8a2be2;border-radius: 20px;padding: 0 10px; width: fit-content;
            }else{
                var span = frameContent.createElement("span");
                span.innerText = selectedText;
                span.style.transform = "rotateZ("+ deg + "deg)" ;
                span.style.width = "fit-content";
                span.style.display = "inline-block" ;
                range.surroundContents(span);

            }
                
        }

    }else{
        var range = selection.getRangeAt(0);
        

            var parentElement = range.commonAncestorContainer.parentElement;
            var currentFontSize = parseFloat(frameContent.defaultView.getComputedStyle(parentElement).getPropertyValue('font-size'));

            // if(parentElement.tagName === "SPAN"){
                parentElement.style.transform = "rotateZ("+ deg  + "deg)" ;
        
                parentElement.style.width = "fit-content";
                parentElement.style.display = "inline-block" ;
            // }
    }
}


function shadowSpan(x="4" ,y="5",blur="", spreed="0", shadowColor="gainsboro") {
    selection = frameContent.getSelection();

    if (!selection.isCollapsed) {
        var range = selection.getRangeAt(0);
        var selectedText = range.toString();
        
        if (selectedText) {

            var parentElement = range.commonAncestorContainer.parentElement;
            var currentFontSize = parseFloat(frameContent.defaultView.getComputedStyle(parentElement).getPropertyValue('font-size'));

            if(parentElement.tagName === "SPAN"){
               parentElement.style.boxShadow =  x + 'px ' + y + 'px ' +blur + 'px ' + spreed+ 'px ' + shadowColor;
               parentElement.style.border = "1px solid gainsboro" ;
               parentElement.style.padding = "5px" ;
               parentElement.style.width = "fit-content";
               parentElement.style.display = "inline-block" ;


               //box-shadow: 4px 5px 0 0px gainsboro;padding: 5px;
            }else{
                var span = frameContent.createElement("span");
                span.innerText = selectedText;
                span.style.boxShadow = x + 'px ' + y + 'px ' +blur + 'px ' + spreed+ 'px ' + shadowColor;
                span.style.border = "1px solid gainsboro" ;
                span.style.padding = "5px" ;
                span.style.width = "fit-content";
                span.style.display = "inline-block" ;
                range.surroundContents(span);

            }
                
        }

    }
}

function bgSpan(bgColor="gainsboro") {
    selection = frameContent.getSelection();

    if (!selection.isCollapsed) {
        var range = selection.getRangeAt(0);
        var selectedText = range.toString();
        
        if (selectedText) {

            var parentElement = range.commonAncestorContainer.parentElement;
            var currentFontSize = parseFloat(frameContent.defaultView.getComputedStyle(parentElement).getPropertyValue('font-size'));

            if(parentElement.tagName === "SPAN"){
               parentElement.style.backgroundColor = bgColor;
               parentElement.style.borderRadius = "50px" ;
               parentElement.style.padding = "0px 10px" ;
            //    parentElement.style.width = "fit-content";
            //    parentElement.style.display = "inline-block" ;

            }else{
                var span = frameContent.createElement("span");
                span.innerText = selectedText;
                span.style.backgroundColor = bgColor;
                span.style.borderRadius = "50px" ;
                span.style.padding = "0px 10px" ;
                // span.style.width = "fit-content";
                // span.style.display = "inline-block" ;
                range.surroundContents(span);

            }
                
        }

    }else{
        var range = selection.getRangeAt(0);
        

            var parentElement = range.commonAncestorContainer.parentElement;
            var currentFontSize = parseFloat(frameContent.defaultView.getComputedStyle(parentElement).getPropertyValue('font-size'));

            parentElement.style.backgroundColor = bgColor;
            parentElement.style.borderRadius = "5px" ;
            parentElement.style.padding = "5px 5px" ;
            // parentElement.style.width = "fit-content";
            // parentElement.style.display = "inline-block" ;
    }
}

function gradiendBgSpan(color1,color2,deg="to left") {
    selection = frameContent.getSelection();

    if (!selection.isCollapsed) {
        var range = selection.getRangeAt(0);
        var selectedText = range.toString();
        
        if (selectedText) {

            var parentElement = range.commonAncestorContainer.parentElement;
            var currentFontSize = parseFloat(frameContent.defaultView.getComputedStyle(parentElement).getPropertyValue('font-size'));

            if(parentElement.tagName === "SPAN"){
               parentElement.style.background = "linear-gradient("+deg+","+ color1 +" , " + color2+")";
               parentElement.style.borderRadius = "50px" ;
               parentElement.style.padding = "0px 10px" ;
               parentElement.style.width = "fit-content";
               parentElement.style.display = "inline-block" ;

            }else{
                var span = frameContent.createElement("span");
                span.innerText = selectedText;
                span.style.background = "linear-gradient("+deg+","+ color1 +" , " + color2+")";
                span.style.borderRadius = "50px" ;
                span.style.padding = "0px 10px" ;
                span.style.width = "fit-content";
                span.style.display = "inline-block" ;
                range.surroundContents(span);

            }
                
        }

    }else{
        var range = selection.getRangeAt(0);
        

            var parentElement = range.commonAncestorContainer.parentElement;
            var currentFontSize = parseFloat(frameContent.defaultView.getComputedStyle(parentElement).getPropertyValue('font-size'));

            parentElement.style.background = "linear-gradient("+deg+","+ color1 +" , " + color2+")";
            parentElement.style.borderRadius = "5px" ;
            parentElement.style.padding = "5px 5px" ;
            //parentElement.style.margin = "15px 0px" ;
            //parentElement.style.width = "fit-content";
            //parentElement.style.display = "inline-block" ;
    }
}

function gradiendTextSpan(color1,color2,deg="to left") {
    selection = frameContent.getSelection();

    if (!selection.isCollapsed) {
        var range = selection.getRangeAt(0);
        var selectedText = range.toString();
        
        if (selectedText) {

            var parentElement = range.commonAncestorContainer.parentElement;
            var currentFontSize = parseFloat(frameContent.defaultView.getComputedStyle(parentElement).getPropertyValue('font-size'));

            if(parentElement.tagName === "SPAN"){
                parentElement.style.color = "transparent";
                parentElement.style.backgroundImage = "linear-gradient("+deg+","+ color1 +" , " + color2+")";
                parentElement.style.webkitBackgroundClip = "text";
                parentElement.style.webkitTextFillColor = "transparent";
               parentElement.style.width = "fit-content";
               parentElement.style.display = "inline-block" ;

               //-webkit-background-clip: text;
               //-webkit-text-fill-color: transparent;
              // background-image: linear-gradient(to left, #ff9a9e 33%, #fad0c4 66%);

            }else{
                var span = frameContent.createElement("span");
                span.innerText = selectedText;
                span.style.color = "transparent";
                span.style.backgroundImage = "linear-gradient("+deg+","+ color1 +" , " + color2+")";
                span.style.webkitBackgroundClip = "text";
                span.style.webkitTextFillColor = "transparent";
                span.style.width = "fit-content";
                span.style.display = "inline-block" ;
                range.surroundContents(span);

            }
                
        }

    }else{
        var range = selection.getRangeAt(0);
        

            var parentElement = range.commonAncestorContainer.parentElement;
            var currentFontSize = parseFloat(frameContent.defaultView.getComputedStyle(parentElement).getPropertyValue('font-size'));

            parentElement.style.color = "transparent";
            parentElement.style.backgroundImage = "linear-gradient("+deg+","+ color1 +" , " + color2+")";
            parentElement.style.webkitBackgroundClip = "text";
            parentElement.style.webkitTextFillColor = "transparent";
            //parentElement.style.width = "fit-content";
           //parentElement.style.display = "inline-block" ;
    }
}

function addFontClass(className,array) {
    selection = frameContent.getSelection();

    if (!selection.isCollapsed) {
        var range = selection.getRangeAt(0);
        var selectedText = range.toString();
        
        if (selectedText) {
            var parentElement = range.commonAncestorContainer.parentElement;
            
            if(parentElement.tagName === "SPAN"){
        
            
                array.forEach(name=>{
                   parentElement.classList.remove(name)
                });

                parentElement.classList.add(className);
                selection.removeAllRanges();

            }else{
                var span = frameContent.createElement("span");
                span.innerText = selectedText;
                span.classList.add(className)
                range.surroundContents(span);

            }
                
        }

    }else{
        var range = selection.getRangeAt(0);
        

            var parentElement = range.commonAncestorContainer.parentElement;
            var currentFontSize = parseFloat(frameContent.defaultView.getComputedStyle(parentElement).getPropertyValue('font-size'));

            array.forEach(name=>{
                parentElement.classList.remove(name)
             });

             parentElement.classList.add(className);
             selection.removeAllRanges();
    }
    selection.removeAllRanges();
}



function insertInlineImage(classes){
   // command("insertHTML",false , `<img  src="./assets/uploads/img3.jpeg" alt="resim" class="${classes}" id="draggableImage">`)

const selection = frameContent.getSelection();
 if (selection.rangeCount > 0) {
   const range = selection.getRangeAt(0);
   const img = document.createElement("img");
   //img.classList.add(classes)
   classes.split(' ').forEach(cls => img.classList.add(cls.trim())); 
   img.src="./assets/uploads/img3.jpeg"
   img.alt = "altText";
   //img.innerHTML = html;
   range.insertNode(img);
   //range.surroundContents(span)
 }
}

function insertInlineText(html){
  //  command("insertHTML",false , div )
 // Mevcut seçimi al
 const selection = frameContent.getSelection();
 if (selection.rangeCount > 0) {
   const range = selection.getRangeAt(0);
   const span = document.createElement("span");
   span.classList.add('inlineSpan')
   span.innerHTML = html;
   range.insertNode(span);
   //range.surroundContents(span)
 }

 initImages()
}


function clearAll(){
    selection = frameContent.getSelection();

    if (!selection.isCollapsed) {
        var range = selection.getRangeAt(0);
        var selectedText = range.toString();
        
        if (selectedText) {

            var parentElement = range.commonAncestorContainer.parentElement;
            //var currentFontSize = parseFloat(frameContent.defaultView.getComputedStyle(parentElement).getPropertyValue('font-size'));

            if(parentElement.tagName === "SPAN"){
                parentElement.style = "";
                command('removeFormat')
            }else{
                parentElement.style = "";
                command('removeFormat')
            }
                
        }else{
            var parentElement = range.commonAncestorContainer.parentElement;
            parentElement.style = "";
            command('removeFormat')
        }

    }else{
            var range = selection.getRangeAt(0);
            var parentElement = range.commonAncestorContainer.parentElement;
            parentElement.style = ""
            command('removeFormat')
    }
}