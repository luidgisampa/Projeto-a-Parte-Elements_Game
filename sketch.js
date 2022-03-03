//personagem.
var meninoBase;
var per_imagemTERRA;
var per_imagemFOGO;
var per_imagemAGUA;
var per_imagemAR;

//projeteis personagem.
var terra, terraImagem;
var fogo, powerUpF, fogoImagem;
var agua, powerUpA, aguaImagem;
var ar, powerUpAR, arImagem;

//monstro
var monstro, monstroImagem;

//var alciliares.
var lifePlayer = 15;
var lifeMonster = 200;
var timeforms = 1000;
var bloco_de_Movimentação;
var edges;
var play, gameOver

//cenario.
var chão_verde, chão_verdeImagem;
var chão_invisivel;
var plataformaFlutuante, animaçãoPlataforma;
var cenario, cenarioImagem;
var mato, matoImagem;

function preload() {
  //personagem.
  per_imagemTERRA = loadAnimation("menino telepata terra1.png","menino telepata terra2.png","menino telepata terra3.png","menino telepata terra4.png","menino telepata terra5.png");
  per_imagemFOGO = loadAnimation("menino telepata fogo1.png","menino telepata fogo2.png","menino telepata fogo3.png");

  //projeteis
  terraImagem = loadImage("pedra.png");
  fogoImagem = loadImage("bola de fogo.png");

  //power ups
  powerUpF = loadImage("powerUpfogo.png");

  //cenario.
  animaçãoPlataforma = loadAnimation ("chão flutuante1.png","chão flutuante3.png","chão flutuante4.png","chão flutuante5.png");
  cenarioImagem = loadImage("cenario .png");
  matoImagem = loadImage("mato para esconder o bug1.png");
  chão_verdeImagem = loadImage("bloco verde.png");

  //montros
  monstroImagem = loadImage("monster.png");

}

function setup() {
  //tamanho do background
  createCanvas(1325,600);

  //criando cenario.
  cenario = createSprite(650, 300);
  cenario.addAnimation("cenario", cenarioImagem);
  cenario.scale = 1.0;

  //criando a plataforma.
  plataformaFlutuante = createSprite(250,300);
  plataformaFlutuante.addAnimation("flutuando", animaçãoPlataforma);
  plataformaFlutuante.scale = 1.5;

  //criando o personagem.
  meninoBase = createSprite(255, 245);
  meninoBase.addAnimation("terra", per_imagemTERRA);
  meninoBase.scale = 1.0;

  //resolvendo o bug do bug
  chão_verde = createSprite(255,295, 50, 10);
  chão_verde.addImage("verde", chão_verdeImagem);
  chão_verde.scale = 1.5

  //criando o mato para esconder bugs
  mato = createSprite(255, 250);
  mato.addImage("mato", matoImagem);
  mato.scale = 1.4;

  //criando o monstro
  monstro = createSprite(1250, 300);
  monstro.addImage("monstro", monstroImagem);

  bloco_de_Movimentação = createSprite(100,100);
  bloco_de_Movimentação.visible = false;
  chão_invisivel = createSprite(100,575)
  chão_invisivel.visible = false;

  //edges
  edges = createEdgeSprites();

  //groups
  terraGroup = new Group();

  //adicionais
  
}

function draw() {
  
  if (keyDown("W")&& meninoBase.y >= 50 && plataformaFlutuante.y >= 100) {
    meninoBase.y += -10;
    plataformaFlutuante.y += -10;
    mato.y += -10;
    chão_verde.y += -10;
  }

  if (keyDown("S")&& meninoBase.y <= 600 && plataformaFlutuante.y <= 500) {
    meninoBase.y += 10;
    plataformaFlutuante.y += 10;
    mato.y += 10;
    chão_verde.y +=10;
  }

  if(keyDown("E")) {
      createTerra();
    
  }


  bloco_de_Movimentação.bounceOff(chão_invisivel);

  bloco_de_Movimentação.velocityY += 1;
  
  meninoBase.y = plataformaFlutuante.y -50;
  monstro.y = bloco_de_Movimentação.y;
  
  bloco_de_Movimentação.collide(edges);

  

  drawSprites();
}

function createTerra() {
    if(frameCount % 25 == 0) {
      terra = createSprite(295, 190);
      terra.addImage("terra", terraImagem);

      terra.velocityX = 10;

      terra.x = meninoBase.x +30;
      terra.y = meninoBase.y -30;
    
      terraGroup.add(terra);
  }
}