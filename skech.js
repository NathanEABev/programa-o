var valor
let result
let mult = result

var colisao = false
var cerrar = 0

var xball = 328
var yball = 176
var dball = 22
var rball = dball/2

var xraquete = 5
var yraquete = 131
var wraquete = 10
var hraquete = 90

var xopraquete = 640
var yopraquete = 131
var vyop

var vyball = 6
var vxball = 6

var mpontos = 0
var oppontos = 0

var sraquete;
var sponto;
var trilha;

function preload() {
  trilha = loadSound("trilha.mp3");
  sponto = loadSound("ponto.mp3");
  sraquete = loadSound("raquetada.mp3");
}

function setup( ) {
  createCanvas(655, 350);
  trilha.loop();
  
  result = confirm('Deseja multiplayer local');
  if(result) {
    let valor = 'Modo multiplayer'
    alert(valor + ' será carregado!')
    alert('Use as teclas W,A e ↑, ↓')

  }
  else {
    let valor = 'Modo singleplayer'
    alert(valor + ' será carregado!')
    alert('Use as teclas W,A')
  }
  mult =result;
}
function draw() {
  background(0, 100, 40);
  bolinha()
  movimento()
  verificacao()
  raquete(xraquete, yraquete)
  mmraquete()
  colisaoraquete(xraquete, yraquete)
  colisaoraquete(xopraquete, yopraquete)
  raquete(xopraquete, yopraquete)
  mopraquete()
  placar ()
  pontos ()
  //verificacaoraquete()
}

function bolinha() {
  circle (xball, yball, dball);
  line (328, 0, 328, 350)
  ellipse (328, 176, 10)
  stroke ('white')
}

function movimento() {
  xball += vxball;
  yball += vyball;
}

function verificacao() {
  if (xball + rball> width || xball - rball < 0) {
        vxball *= -1;
      }
  if (yball + rball > height || yball - rball < 0) {
        vyball *= -1;
    }
}

function raquete(x, y) {
  rect (x, y, wraquete, hraquete)
}

function mmraquete() {
  if(keyIsDown(87)) {
     yraquete -= 10
  }    
  if(keyIsDown(83)) {
      yraquete += 10  
  }
}

function verificacaoraquete(x, y) {
  if (xball - rball < xraquete + wraquete && yball - rball < yraquete + hraquete && yball + rball > yraquete) {
    vxball *= -1;
    sraquete.play()
  }
}

function colisaoraquete(x,y) {
  colisao = collideRectCircle(x, y, wraquete, hraquete, xball, yball, dball)
  if(colisao) {
    vxball *= -1
    sraquete.play()
  }
}

function mopraquete() {
  
  console.log(mult)
  if(mult) {
    if(keyIsDown(UP_ARROW)) {
        yopraquete -= 10
      }
      if(keyIsDown(DOWN_ARROW)) {
        yopraquete += 10
      }
  }
  else{
    vyop = yball - yopraquete - wraquete / 2 - 30
    yopraquete += vyop + cerrar
  }
}

function placar() {
  if(mult) {
  stroke(255)
  textAlign(CENTER)
  textSize(16)
  fill (color(0, 64, 14))
  rect(180, 11, 40, 20)
  fill(255)
  text(mpontos, 200, 26)
  fill (color(0, 64, 14))
  rect(436, 11, 40, 20)
  fill(235)
  text(oppontos, 456, 26)
  }
  else {
  stroke(255)
  textAlign(CENTER)
  textSize(16)
  fill (color(0, 64, 14))
  rect(308, 11, 40, 20)
  fill(255)
  text(oppontos, 328, 26)
  }
}

function pontos() {
  if(xball > 645) {
    mpontos += 1
    sponto.play()
  }
  if(xball < 15) {
    oppontos += 1
    sponto.play()
  }
  
}