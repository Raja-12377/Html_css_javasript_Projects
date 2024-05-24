//selecting popupbox ,popup overlay and button 

var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var abutton=document.getElementById("add-popup-button")


abutton.addEventListener("click",function(){
     
     popupoverlay.style.display="block"
     popupbox.style.display="block"

})

var cancel=document.getElementById("popup-cancel")

cancel.addEventListener("click",function(event){
     event.preventDefault()
     popupoverlay.style.display="none"
     popupbox.style.display="none"
})




//selecting container,popup-add,name-input,actor-input,about-des

var container=document.querySelector(".container")
var popadd=document.getElementById("popup-add")
var nameinput=document.getElementById("name-input")
var actorinput=document.getElementById("actor-input")
var des=document.getElementById("about-des")


popadd.addEventListener("click",function(event){
     event.preventDefault()

     var div=document.createElement("div")
     div.setAttribute("class","book-container")
     div.innerHTML=`<h2> ${nameinput.value} </h2>
                    <h4> ${actorinput.value}</h4>
                     <p> ${des.value}</p>
                    <button onclick="deleteff(event)">Delete</button>`
     container.append(div)
     popupoverlay.style.display="none"
     popupbox.style.display="none"
})


function deleteff(event){
     event.target.parentElement.remove()
}