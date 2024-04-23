const fontsContainer = document.querySelector('.fontsContainer')
const fontColorContainer = document.querySelector('.fontColorContainer')
const fontBackgroundColorContainer = document.querySelector('.fontBackgroundColorContainer')
const textTypeContainer = document.getElementById('textTypeContainer')
const createLinkContainer = document.getElementById('createLinkContainer')

const attributesContainer = document.querySelector('.attributesContainer')
const imageBox = document.querySelector('.imageBox')
const videoBox = document.querySelector('.videoBox')
const blockBox = document.querySelector('.blockBox')

const colorSelectContainer = document.querySelector('.colorSelectContainer')


const fontSizeCount = document.getElementById('fontsizeCount')

const newContentBox = document.querySelector('.newContentBox')


let frame,frameContent, categoryName

frame = document.querySelector('iframe') 
frameContent = frame.contentDocument || frame.contentWindow.document;
frameContent.querySelector('body').setAttribute("contenteditable","true")

console.log(frameContent.defaultView);


document.execCommand('defaultParagraphSeparator', false, 'p');
frameContent.execCommand('defaultParagraphSeparator', false, 'p');

var iAttrB = false

function initImages() {
    let imgs = frameContent.querySelectorAll('img')

    imgs.forEach(i=>{

        var currentStyle = i.getAttribute("style");

        if (currentStyle) {
            var updatedStyle = currentStyle + "cursor:pointer;" ;
        } else {
            var updatedStyle = "cursor:pointer;"
        }
    //    var st = i.getAttribute("style")
    //    st.add("cursor:pointer") 
  i.setAttribute("style",updatedStyle)

        i.addEventListener('click',(e)=>{

            // e.target.getAttribute('src')
            // var newUri = prompt("Yeni resim uri",e.target.getAttribute('src'))
            // if (newUri != null && newUri != '' ) {
            //     e.target.setAttribute('src',newUri)
            // }

            console.log(e.view.window.innerWidth);
            console.log(((window.innerWidth - e.view.window.innerWidth) / 2 ) + e.clientX + "px");
          

           const iAttr  = document.querySelector('#imgAttr')
            if (iAttrB == false) {
                
                iAttr.style.display = "flex";
                iAttr.style.top = e.clientY + 60 + "px";
                iAttr.style.left = ((window.innerWidth - e.view.window.innerWidth) / 2 ) + e.clientX + "px";

                iAttrB = true
            }else{  
                iAttr.style.display = "none";
                iAttrB = false
            }

            

          })


    })
}

initImages()




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


initImages()
};


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
  var attributesContainerBool = false

  var imageBoxBool = false
  var videoBoxBool = false
   var blockBoxBool = false


   var colorSelectContainerBool = false

   var newContentBoxBool = false   
   function opennewContentBox(){
    if (!newContentBoxBool) {
        newContentBox.style.display='flex' 
        newContentBoxBool = true
    }else{
        newContentBox.style.display='none'
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




function openCreateLinkContainer(){
     if (!createLinkContainerBool) {
         createLinkContainer.style.display='flex' 
         createLinkContainerBool = true
     }else{
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
        imageBox.style.display='flex' 
        imageBoxBool = true
    }else{
        imageBox.style.display='none'
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



// left
function openTextTypeContainer(){
    if (!textTypeContainerBool) {
        textTypeContainer.style.display='flex'
        textTypeContainerBool = true

        fontBackgroundColorContainer.style.display='none'
        fontBackgroundColorContainerBool = false
        blockBox.style.display='none'
        blockBoxBool = false

        createLinkContainer.style.display='none'
        createLinkContainerBool = false
        fontsContainer.style.display='none'
        fontsContainerBool = false
    }else{
        textTypeContainer.style.display='none'
        textTypeContainerBool = false
        createLinkContainer.style.display='none'
        createLinkContainerBool = false
        fontsContainer.style.display='none'
        fontsContainerBool = false
    }
}
// center
function toggleFontBackgroundColorContainer(){
    if (!fontBackgroundColorContainerBool) {
        fontBackgroundColorContainer.style.display='flex'
        fontBackgroundColorContainerBool = true
        blockBox.style.display='none'
        blockBoxBool = false
        textTypeContainer.style.display='none'
        textTypeContainerBool = false 

        createLinkContainer.style.display='none'
        createLinkContainerBool = false
        fontsContainer.style.display='none'
        fontsContainerBool = false
    }else{
        fontBackgroundColorContainer.style.display='none'
        fontBackgroundColorContainerBool = false
    }
}
// right
function openbBlockBox(){
    if (!blockBoxBool) {
        blockBox.style.display='flex' 
        blockBoxBool = true

        textTypeContainer.style.display='none'
        textTypeContainerBool = false
        fontBackgroundColorContainer.style.display='none'
        fontBackgroundColorContainerBool = false

        createLinkContainer.style.display='none'
        createLinkContainerBool = false
        fontsContainer.style.display='none'
        fontsContainerBool = false
    }else{
        blockBox.style.display='none'
        blockBoxBool = false
    }
}


function openColors(){
    if (!colorSelectContainerBool) {
        colorSelectContainer.style.display='flex' 
        colorSelectContainerBool = true
    }else{
        colorSelectContainer.style.display='none'
        colorSelectContainerBool = false
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

    }
}


function rotateSpan(deg) {
    selection = frameContent.getSelection();

    if (!selection.isCollapsed) {
        var range = selection.getRangeAt(0);
        var selectedText = range.toString();
        
        if (selectedText) {

            var parentElement = range.commonAncestorContainer.parentElement;
            var currentFontSize = parseFloat(frameContent.defaultView.getComputedStyle(parentElement).getPropertyValue('font-size'));

            if(parentElement.tagName === "SPAN"){
               parentElement.style.transform = "rotateZ("+ deg + "deg)" ;
        
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
               parentElement.style.borderRadius = "5px" ;
               parentElement.style.padding = "5px 10px" ;
               parentElement.style.width = "fit-content";
               parentElement.style.display = "inline-block" ;

            }else{
                var span = frameContent.createElement("span");
                span.innerText = selectedText;
                span.style.backgroundColor = bgColor;
                span.style.borderRadius = "5px" ;
                span.style.padding = "5px 10px" ;
                span.style.width = "fit-content";
                span.style.display = "inline-block" ;
                range.surroundContents(span);

            }
                
        }

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
               parentElement.style.borderRadius = "5px" ;
               parentElement.style.padding = "5px 10px" ;
               parentElement.style.width = "fit-content";
               parentElement.style.display = "inline-block" ;

            }else{
                var span = frameContent.createElement("span");
                span.innerText = selectedText;
                span.style.background = "linear-gradient("+deg+","+ color1 +" , " + color2+")";
                span.style.borderRadius = "5px" ;
                span.style.padding = "5px 10px" ;
                span.style.width = "fit-content";
                span.style.display = "inline-block" ;
                range.surroundContents(span);

            }
                
        }

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

    }
}

function addFontClass(className,array) {
    selection = frameContent.getSelection();

    if (!selection.isCollapsed) {
        var range = selection.getRangeAt(0);
        var selectedText = range.toString();
        
        if (selectedText) {
            var parentElement = range.commonAncestorContainer.parentElement;
            // var currentFontSize = parseFloat(frameContent.defaultView.getComputedStyle(parentElement).getPropertyValue('font-size'));
            //console.log(parentElement.classList.contains(className));
            if(parentElement.tagName === "SPAN"){
        
                // array.forEach(name=>{
                //     if (parentElement.classList.includes(name)) {
                //         console.log(parentElement.classList.includes(name));
                //         parentElement.classList.toggle(className);
                //     }else{
                        
                //         parentElement.classList.add(className);
                //     }
                // });
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

    }
    selection.removeAllRanges();
}