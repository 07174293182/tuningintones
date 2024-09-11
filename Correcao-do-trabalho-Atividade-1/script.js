const bolha = document.querySelector(".bolha")
const pontos = document.querySelector(".pontos")
bolha.addEventListener("click", inicio)
var contar = 0
var acelerar = 3
var pontuação = 0
var id
function inicio(){
  var x = Math.floor(Math.random()*1500)
  var y = Math.floor(Math.random()*900)
  bolha.style.left = x + "px"
  bolha.style.top = y + "px"
  if(pontuação == 0){
  id = setInterval(contador, 1000)
}
 pontuacao++
 pontos.textContent = "Pontos: " + pontuação
}
function contador(){
  contar++
  console.log(contar)
  if(contar == acelerar){
  x = Math.floor(Math.random()*1500)
  y = Math.floor(Math.random()*900)
  bolha.style.left = x + "px"
  bolha.style.top = y + "px"
contar = 0
acelerar--
  }
  if(acelerar == 0){
    renicia()
    acelerar = 3
  }
}
function reinicia(){
  bolha.style.left =  "750px"
  bolha.style.top =  "400px"
  contar = 0 
  pontuação = 0
  pontos.textContent = "pontos: 0"
  clearInterval(id)
}