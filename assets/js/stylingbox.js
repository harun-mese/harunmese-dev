
const container = document.querySelector(".stylingBox");
const icon = document.getElementById("stylingHandler");

   // document.addEventListener("DOMContentLoaded", function() {
        let isDragging = false;
       // let offsetX, offsetY;
    
        icon.addEventListener("mousedown", () => {
            isDragging = true;
        });
    
        document.addEventListener("mousemove", (e)=> {
            if (isDragging) {
                    container.style.left = e.clientX  - 150 + "px";
                    container.style.top = e.clientY - 10 + "px";
            }
        });
    
        document.addEventListener("mouseup", function() {
            isDragging = false;
        });

        
   // });
    

    // const closeStylingBox = document.getElementById('closeStylingBox')
    // closeStylingBox.addEventListener('click',()=>{
    //     //container.style.display = 'none'
    // })