const editor = document.getElementById("editor")
const iframe = document.getElementById("iframe") //
const iconSize = 24

var frameContent = iframe.contentDocument || iframe.contentWindow.document;
frameContent.querySelector('body').setAttribute("contenteditable","true")
console.log(frameContent);
//iframe.body.setAttribute("contenteditable","true") //
//document.body.style.paddingTop = "100px"
editor.setAttribute("contenteditable","false")


const editorBar = document.createElement("div")
editorBar.id = "editBar"

const boldBtn = document.createElement("button")
boldBtn.addEventListener("click",()=>{command("bold")})
boldBtn.innerHTML = 
`
<svg xmlns="http://www.w3.org/2000/svg" width="${iconSize}" height="${iconSize}" fill="currentColor" class="bi bi-type-bold" viewBox="0 0 16 16">
<path d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z"/>
</svg>
`

const italikBtn = document.createElement("button")
italikBtn.addEventListener("click",()=>{command("italic")})
italikBtn.innerHTML = 
`
<svg xmlns="http://www.w3.org/2000/svg" width="${iconSize}" height="${iconSize}" fill="currentColor" class="bi bi-type-italic" viewBox="0 0 16 16">
  <path d="M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z"/>
</svg>
`

const underlineBtn = document.createElement("button")
underlineBtn.addEventListener("click",()=>{command("underline")})
underlineBtn.innerHTML = 
`
<svg xmlns="http://www.w3.org/2000/svg" width="${iconSize}" height="${iconSize}" fill="currentColor" class="bi bi-type-underline" viewBox="0 0 16 16">
  <path d="M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57s-2.687-1.08-2.687-2.57zM12.5 15h-9v-1h9z"/>
</svg>
`

const leftBtn = document.createElement("button")
leftBtn.addEventListener("click",()=>{command("justifyLeft")})
leftBtn.innerHTML = 
`
<svg xmlns="http://www.w3.org/2000/svg" width="${iconSize}" height="${iconSize}" fill="currentColor" class="bi bi-text-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
</svg>
`

const centerBtn = document.createElement("button")
centerBtn.addEventListener("click",()=>{command("justifyCenter")})
centerBtn.innerHTML = 
`
<svg xmlns="http://www.w3.org/2000/svg" width="${iconSize}" height="${iconSize}" fill="currentColor" class="bi bi-text-center" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
</svg>
`

const rightBtn = document.createElement("button")
rightBtn.addEventListener("click",()=>{command("justifyRight")})
rightBtn.innerHTML = 
`
<svg xmlns="http://www.w3.org/2000/svg" width="${iconSize}" height="${iconSize}" fill="currentColor" class="bi bi-text-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
</svg>
`

const ulBtn = document.createElement("button")
ulBtn.addEventListener("click",()=>{command("insertUnorderedList")})
ulBtn.innerHTML = 
`
<svg xmlns="http://www.w3.org/2000/svg" width="${iconSize}" height="${iconSize}" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg>
`

const olBtn = document.createElement("button")
olBtn.addEventListener("click",()=>{command("insertOrderedList")})
olBtn.innerHTML = 
`
<svg xmlns="http://www.w3.org/2000/svg" width="${iconSize}" height="${iconSize}" fill="currentColor" class="bi bi-list-ol" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5"/>
  <path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635z"/>
</svg>
`

const logoutBtn = document.createElement("button")
logoutBtn.classList.add("logout")
logoutBtn.addEventListener("click",()=>{alert("LOGOUT")})
logoutBtn.innerHTML = 
`
<svg xmlns="http://www.w3.org/2000/svg" width="${iconSize}" height="${iconSize}" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
</svg>
`
const saveBtn = document.createElement("button")
saveBtn.classList.add("save")
saveBtn.addEventListener("click",()=>{
 console.log(frameContent.documentElement);
 frameContent.querySelector('body').setAttribute("contenteditable","false")
  var data =  frameContent.documentElement.innerHTML
  ajax(data)
  frameContent.querySelector('body').setAttribute("contenteditable","true")
})
saveBtn.innerHTML = 
`
<svg xmlns="http://www.w3.org/2000/svg" width="${iconSize}" height="${iconSize}" fill="currentColor" class="bi bi-floppy" viewBox="0 0 16 16">
  <path d="M11 2H9v3h2z"/>
  <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z"/>
</svg>
`


editorBar.appendChild(saveBtn)
editorBar.appendChild(boldBtn)
editorBar.appendChild(italikBtn)
editorBar.appendChild(underlineBtn)
editorBar.appendChild(leftBtn)
editorBar.appendChild(centerBtn)
editorBar.appendChild(rightBtn)
editorBar.appendChild(ulBtn)
editorBar.appendChild(olBtn)
editorBar.appendChild(logoutBtn)


//editor.appendChild(editorBar)

function command(aCommandName, aShowDefaultUI='', aValueArgument=''){
    frameContent.execCommand(aCommandName, aShowDefaultUI, aValueArgument)
 }

 function ajax(data) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
      frameContent.getElementById("demo").innerHTML =
      this.responseText;
      console.log(this.responseText);
      frameContent.querySelector('body').setAttribute("contenteditable","true")
    }
  };
 
  xhttp.open("POST", "harun.php" ,true);
  xhttp.setRequestHeader("Content-Type", "text/html; charset=UTF-8");
  xhttp.send(data);
}

//"harun.php?q="+