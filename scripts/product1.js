import {getData,filter1} from "../component/filter1.js"       // by avinash
getData()




let brand=document.querySelector("#brand")  // by avinash

document.querySelector("#brandbut2").addEventListener("click", function(){
    
    document.querySelector("#brandbut2").innerHTML=` <button id="brandbut1"><p><i class="arrowup"></i></p></button>`      //by avinash
    
    // if(`<button id="brandbut1"><p><i class=="arrowdown"></i></p></button>`){
    //     document.querySelector("#brandbut2").innerHTML=` <button id="brandbut1"><p><i class="arrowup"></i></p></button>`
    // }else{
    //     document.querySelector("#brandbut2").innerHTML=` <button id="brandbut1"><p><i class="arrowdown"></i></p></button>`
    // }
    
let div=document.createElement("div")      // by avinash

div.innerHTML=
`
<form>
<input type="checkbox" id="brand1"  name="brand1">
<label for="brand1">AKG (1)</label><br>
<input type="checkbox" id="brand2" name="brand2">
<label for="brand2">Altiat (9)</label><br>
<input type="checkbox" id="brand3" name="brand3">
<label for="brand3">Audio- Technica (2)</label><br>
<input type="checkbox" id="brand4" name="brand4">
<label for="brand4">Beyerdynamic (6)</label><br>
<input type="checkbox" id="brand5" name="brand5">
<label for="brand5">Grado (1008)</label><br>
<input type="checkbox" id="brand6" name="brand6">
<label for="brand6">HiFiMAN(456)</label><br>
<input type="checkbox" id="brand7" name="brand7">
<label for="brand7">Meze (234)</label><br>
<input type="checkbox" id="brand8" name="brand8">
<label for="brand8">Monoprice (35)</label><br>
<input type="checkbox" id="brand9" name="brand9">
<label for="brand9">Senheiser (1)</label><br>
<input type="checkbox" id="brand10" name="brand10">
<label for="brand10">Shure (9)</label><br>
<input type="checkbox" id="brand11" value="sony" name="brand11">
<label for="brand11">Sony (2)</label><br>
<input type="checkbox" id="brand12" name="brand12">
<label for="brand12">V-MODA (6)</label><br>
</form>
`
brand.append(div)
document.getElementById('brand11').addEventListener("click", function() {
    
    filter1()
})
// document.querySelector('form').addEventListener('change',()=>{
//     if(document.querySelector('form').value=="sony"){
//         filter1()
//     }
// })
// brand.append(div)
document.querySelector("#brandbut1").addEventListener("click",()=>{
    brand.innerHTML=null;
    window.location.reload();
})
})



let cat=document.createElement("div")
document.querySelector("#productbut2").addEventListener("click", function(){
    document.querySelector("#productbut2").innerHTML=` <button id="productbut1"><p><i class="arrowup"></i></p></button>`

    let div=document.querySelector("#product")
    cat.innerHTML=null;
    cat.innerHTML=`
    <input type="checkbox" id="wired" name="wired">Wired Headphone
  <br>
    `
    div.append(cat)
    document.querySelector("#productbut1").addEventListener("click",()=>{
        cat.innerHTML=null;
        window.location.reload();
    })
})
let div1=document.createElement("div")
document.querySelector("#pricebut2").addEventListener("click", () => {
    document.querySelector("#pricebut2").innerHTML=` <button id="pricebut1"><p><i class="arrowup"></i></p></button>`

    let price=document.querySelector("#price")
    div1.innerHTML=null;
    div1.innerHTML=`<button id="htl">High to low</button>
    <button id="lth">Low to high</button>`
    price.append(div1)
    document.querySelector("#pricebut1").addEventListener("click",()=>{
        price.innerHTML=null;
        window.location.reload();
    })
})


let avail=document.createElement("div")
document.querySelector("#availbut2").addEventListener("click",function() {
    document.querySelector("#availbut2").innerHTML=` <button id="availbut1"><p><i class="arrowup"></i></p></button>`

    let div=document.querySelector("#available")
  avail.innerHTML=null;
  avail.innerHTML=`<input type="checkbox" id="c1" name="c1">
  <label for="c1">In Stock </label><br>
  <input type="checkbox" id="c2" name="c2">
  <label for="c2">Out of Stock</label><br>`
div.append(avail)
document.querySelector("#availbut1").addEventListener("click",()=>{
    avail.innerHTML=null;
    window.location.reload();
})
})