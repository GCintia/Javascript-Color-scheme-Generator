 /**MANIPULATING DOM */
const color1 = document.getElementById("color-1")
const color2 = document.getElementById("color-2")
const color3 = document.getElementById("color-3")
const color4 = document.getElementById("color-4")
const color5 = document.getElementById("color-5")

const monodark = document.getElementById("option-mono-dark")
const monolight = document.getElementById("option-mono-light")   
const analog = document.getElementById("option-ana")                
const complem = document.getElementById("option-compl")                
const analogCompl = document.getElementById( "option-ana-compl")              
const triad = document.getElementById(  "option-tri") 

const col1Name = document.getElementById("col1-name")
const col2Name = document.getElementById("col2-name")   
const col3Name = document.getElementById("col3-name")   
const col4Name = document.getElementById("col4-name")   
const col5Name = document.getElementById("col5-name") 
  
const colorInput = document.getElementById("color-input")
const selectEl = document.getElementById("select-el")

document.getElementById("select-el").addEventListener("change", () =>{
     let selectedValue = selectEl.value
    //console.log(selectedValue)
    //console.log("megvaltozott")
    
    /**GETTING COLORS FROM API AND PLACING IT IN DOM 
*/
document.getElementById("select-btn").addEventListener("click", () =>{
    //console.log("Megvan")
    const hexValue = colorInput.value.replace("#","")
    const modeValue = selectEl.value
    //console.log("xxxxx "+modeValue)
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=${modeValue}&count=5 `)
        .then(res => res.json())
        .then(data => { //console.log(data.colors)
            color1.style.backgroundColor = `${data.colors[0].rgb.value}`
            color2.style.backgroundColor  = `${data.colors[1].rgb.value}`
            color3.style.backgroundColor  = `${data.colors[2].rgb.value}`
            color4.style.backgroundColor  = `${data.colors[3].rgb.value}`
            color5.style.backgroundColor  = `${data.colors[4].rgb.value}`
            
            col1Name.textContent = `${data.colors[0].hex.value}`
            col2Name.textContent = `${data.colors[1].hex.value}`
            col3Name.textContent = `${data.colors[2].hex.value}`
            col4Name.textContent = `${data.colors[3].hex.value}`
            col5Name.textContent = `${data.colors[4].hex.value}`
    
})})
})