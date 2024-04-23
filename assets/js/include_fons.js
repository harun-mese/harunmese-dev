const fontsWrapper = document.getElementById('fontsContainer')

const fonstClassNameArray = [
    'tilt-neon-h4m',
    'wallpoet-regular',
    'coiny-regular',
    'rubik-glitch-pop-regular',
    'bungee-inline-regular',
    'rubik-moonrocks-regular',
    'gloria-hallelujah-regular',
    'rubik-bubbles-regular',
    'silkscreen-regular',
    'silkscreen-bold',
    'amatic-sc-regular',
    'amatic-sc-bold',
    'edu-qld-beginner-h4m',
    'big-shoulders-stencil-text-h4m',
    'expletus-sans-h4m',
    'tilt-prism-h4m',
    'stick-no-bills-h4m',
    'tourney-h4m',
    'pixelify-sans-h4m',
    'gluten-h4m',
    'climate-crisis-h4m',
    'workbench-h4m',
    'sixtyfour-h4m',
    'kablammo-h4m',
    'nabla-h4m',
    'foldit-h4m',
    'honk-h4m',
    'bungee-spice-regular',
    'kode-mono-h4m',
    'orbitron-h4m',
    'permanent-marker-regular',
    'caveat-h4m',
    'seymour-one-regular',
    'tac-one-regular',
    'lugrasimo-regular',
    'pacifico-regular',
    'dancing-script-h4m',
    'quicksand-h4m',
    'platypi-h4m',
    'roboto-mono-h4m',
    'jersey-10-charted-regular',
    'jacquard-12-charted-regular',
    'jacquard-24-regular',
    'jersey-25-regular',
    'jersey-10-regular',
    'poppins-thin',
    'poppins-regular',
    'poppins-thin-italic',
    'poppins-extralight-italic'
]

fonstClassNameArray.forEach((value,i,arr)=>{
    const btn = document.createElement('button')
    btn.classList.add(value)
    btn.textContent = "Yazıyorum"
     btn.addEventListener('click',()=>{
        addFontClass(value,arr)
     })

    fontsWrapper.appendChild(btn)
})