const iconWrap = document.getElementById('iconWrap')

const symbolsArray = [
'&#9824;',
 '&#9827;',
 '&#9829;',
 '&#9830;',
 '&#8592;',
 '&#8593;',
 '&#8594;',
 '&#8595;',
 '&#9728',
 '&#9729',
 '&#9730',
 '&#9731',
 '&#9732',
 '&#9733',
 '&#9734',
 '&#9735',
 '&#9736',
 '&#9737',
 '&#9738',
 '&#9741',
 '&#9743',
 '&#9745',
 '&#9746',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 '&#',
 
]

// symbolsArray.forEach((value,i,arr)=>{
//     const btn = document.createElement('button')

//     btn.addEventListener('click',()=> command('insertHTML',false,value))

//     btn.innerHTML = value

//     iconWrap.appendChild(btn)
// })

for (let index = 0; index < 255; index++) {
    const value = 9728 + index
    const btn = document.createElement('button')

    btn.addEventListener('click',()=> command('insertHTML',false, '&#'+ value + ';'))

    btn.innerHTML = '&#'+ value + ';'

    iconWrap.appendChild(btn)
    
}