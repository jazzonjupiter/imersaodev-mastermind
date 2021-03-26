var numeroCerto = 420;
var button = document.querySelector ('.button1')
var section = document.querySelector("section");
var h3 = document.querySelector("h3");

function verificar(){
  var chute = document.querySelector ("input").value;
  section.classList.add("active");
  if (numeroCerto == chute) {
    h3.textContent = "Você acertou! Blaze it!";
    h3.classList.remove("error");
  } else if (chute > numeroCerto) {
    h3.classList.add("error");
    h3.textContent = "Você errou! O número é menor.";
  }
else if (chute < numeroCerto){
  h3.classList.add("error");
    h3.textContent = "Você errou! O número é maior.";
}
}
function clickFechar1() {
 section.classList.remove("active");
}

function clickFechar2 (event) {
  console.log(event.target);

  if (event.target.tagName == "section") {
    section.classList.remove("active");
  }
}

section.querySelector("button").onclick = clickFechar1;
section.onclick = clickFechar2;
