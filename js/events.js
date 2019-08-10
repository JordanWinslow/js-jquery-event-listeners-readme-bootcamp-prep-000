//define functions here

$(document).ready(function(){

// call functions here
  
});

function getIt() {
  $("p").on("click", alert("Hey!"))
}

function frameIt() {
  $("img").on("load", function(e){
    document.querySelector("img").classList.add("tasty")
  })
}

function pressIt() {
  $("input").on("keydown", function(key){
    if(key.which === "g"){
      alert("You Pressed the g Key!")
    }
  })
}