//POP UP BUTTON ADD AND CANCEL
var pop=document.querySelector(".pop")
var popoverlay=document.querySelector(".popbox")
var popbut=document.querySelector(".popupbut")
popbut.addEventListener("click",function(){
    pop.style.display="block"
    popoverlay.style.display="block"
})
var canbut=document.getElementById("canbut")
canbut.addEventListener("click",function(event){
    event.preventDefault()
})
canbut.addEventListener("click",function(){
    pop.style.display="none"
    popoverlay.style.display="none"
})

//ADDING INPUT 
var conn=document.querySelector(".con")
var addb=document.getElementById("addbut")
var booktit=document.getElementById("booktitle")
var author=document.getElementById("bookauthor")
var des=document.getElementById("para")
 
addb.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book")
    div.innerHTML=`<h2>${booktit.value}</h2>
    <H5>${author.value}</H5>
    <P>${des.value}</P>
    <button onclick='deletee(event)'>DELETE</button>` 
    conn.append(div)
    pop.style.display="none"
    popoverlay.style.display="none"
})
function deletee(event){
    event.target.parentElement.remove()

}
