import {navbar} from './script/navbar.js'

 let navbarBox = document.getElementById('navbar_outer')
 navbarBox.innerHTML = navbar()





document.getElementById("result").style.display="none";
document.getElementById("result1").style.display="none";
document.getElementById("result2").style.display ="none";

document.paysy1.onclick = function(){
let findva = document.querySelector("#paysy1").checkq.value;
if(findva=="check1"){
    document.getElementById("result").style.display="block";
}else{
    document.getElementById("result").style.display="none";
}
if(findva=="check2"){
    document.getElementById("result1").style.display="block";
}else{
    document.getElementById("result1").style.display="none";
} 
if(findva=="check3"){
    document.getElementById("result2").style.display="block";
}else{
    document.getElementById("result2").style.display ="none";
}

}




let arr = JSON.parse(localStorage.getItem("productpage")) || [];
let arr2=JSON.parse(localStorage.getItem("finalcheck"))||[];
printpro(arr)
function printpro(arr){
    let bag=0;
arr.forEach(function(ele){
let div=document.createElement("div");
let div1=document.createElement("div");
let img=document.createElement("img");
img.setAttribute("src",ele.imag);
let div2=document.createElement("div");
div2.setAttribute("class","brandname")
let p1=document.createElement("p");
p1.innerText=ele.brand;
let p2=document.createElement("p");
p2.innerText=ele.procolor;
let div3=document.createElement("div");
div3.setAttribute("class","lastprice")
let p3=document.createElement("p");
p3.innerText="₹"+ele.price;
bag=bag+Number(ele.price);
div1.append(img);
div2.append(p1,p2);
div3.append(p3);
div.append(div1,div2,div3);
document.querySelector("#showprod").append(div)
});
totalpri(bag);
};


function totalpri(bag){
  let finalpri= "₹"+bag.toFixed(2);
document.getElementById("totalprice").innerText=finalpri;
document.getElementById("totalp").innerText=finalpri;
}
let arr1=[];

let findbutton=document.getElementById("finkey");
findbutton.addEventListener("click",function(){
    let fivalue=document.getElementById("va1").value;
let fivalue1=document.getElementById("va1").value;
let fivalue2=document.getElementById("va1").value;
let fivalue3=document.getElementById("va1").value;
if(fivalue=="" && fivalue1=="" && fivalue2=="" && fivalue3==""){
alert("Fill All Card Details");
}else{
    arr.forEach(function(ele){
        arr2.push(ele);
    localStorage.setItem("finalcheck",JSON.stringify(arr2));
    })
    localStorage.setItem("productpage",JSON.stringify(arr1));
    window.location.href = "success.html";
}
});
