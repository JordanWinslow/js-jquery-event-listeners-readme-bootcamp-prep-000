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
  document.querySelector("input").addEventListener("keydown", function(e){
    console.log(e.key)
    if(e.key === "g"){
      alert("You Pressed the g Key!")
    }
  })
}

pressIt();