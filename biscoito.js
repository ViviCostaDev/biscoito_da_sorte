


let divBiscoito = document.querySelector("#imgBiscoito")
let resetPlay = document.querySelector("#playReset")
let biscoito = document.querySelector("#biscoito")

let play = document.querySelector("#btnPlay");

let pacoteBiscoito = document.querySelector("#package");

const myArray = [
  "Seu ano será de muita sorte",
  "Hoje é o seu dia de sorte. Você ganhou um milhão!",
  "Você vai conseguir, tenha fé!",
  "Já deu um beijo na sua mãe hoje?",
  "Sabia que quem estuda mais tem mais chance de conseguir?",
  "Você é muito precioso(a)",
  "Agradeça sempre",
  "Diga sempre: eu sou feliz",
  'Você vai ter um filho',
  "Você é perfeito e muito precioso"
];








function biscoitoDaSorte() {
  let divBiscoito = document.querySelector("#imgBiscoito")
  let resetPlay = document.querySelector("#playReset")
  let biscoito = document.querySelector("#biscoito")

  let play = document.querySelector("#btnPlay");

  let pacoteBiscoito = document.querySelector("#package");


  const myArray = [
    "Seu ano será de muita sorte",
    "Hoje é o seu dia de sorte.",
    "Você ganhou um milhão!",
    "Você vai conseguir, tenha fé!",
    "Já deu um beijo na sua mãe hoje?",
    "Quem estuda tem mais chance de conseguir?",
    "Você é muito precioso(a)",
    "Agradeça sempre",
    "Diga sempre: eu sou feliz",
    'Você vai ter um filho',
    "Você é perfeito e muito precioso"
  ];

  document.querySelector("#imgBiscoito").innerHTML = myArray[Math.floor(11 * Math.random())];

  let sorte = document.querySelector("#imgBiscoito").innerHTML = myArray[Math.floor(11 * Math.random())];


   
    if (sorte != myArray) {
    divBiscoito.setAttribute('style', 'display: block')

    biscoito.setAttribute('style', 'display: block')

    resetPlay.setAttribute('style', 'display: block')

    play.setAttribute('style', 'display: none')
    pacoteBiscoito.setAttribute('style', 'display: none')
  }
  else {
   alert('Hummm...Você está sem sorte hoje.')

  }
  
 
}

play.addEventListener('click', function () {
  biscoitoDaSorte()

})

resetPlay.addEventListener('click', function () {
  play.setAttribute('style', 'display: block')
  pacoteBiscoito.setAttribute('style', 'display: block')
  resetPlay.setAttribute('style', 'display: none')
  divBiscoito.setAttribute('style', 'display: none')
  biscoito.setAttribute('style', 'display: none')
 

})