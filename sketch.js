let scalling;
let bgColor;
let logoColor;
let textInput;
let mainCanvas;
let saveCanvas;

function preload() {
  fontRegular = loadFont("SpaceGrotesk-Regular.ttf");
}

function setup() {
  frameRate(30);

  // DECIDIR TAMANHO DO CANVAS
  let canvasSize = createVector(0, 0);
  if (windowWidth > 1400) {
    canvasSize.set(windowWidth - 340, (windowWidth - 340) / 2);
  } else {
    canvasSize.set(
      max(windowWidth - 16, 300),
      max((windowWidth - 16) / 2, 150)
    );
  }

  // CRIAR CANVAS
  mainCanvas = createCanvas(canvasSize.x, canvasSize.y, SVG);

  saveCanvas = createGraphics(width, height);

  // ENCAIXAR DESENHO NO TAMANHO DO CANVAS
  scalling = map(width, 0, 1080, 0, 1);

  // CRIAR INTERFACE
  createInterface();

  // DECLARAR VETORES DE COR
  bgColor = createVector(42, 76, 49);
  logoColor = createVector(223, 221, 198);

  // CRIAR LETRAS
  letterS1 = new LetterS();
  letterU1 = new LetterU();
  letterM1 = new LetterM();
  letterA1 = new LetterA();
  letterU2 = new LetterU();
  letterM2 = new LetterM();
  letterA2 = new LetterA();
  accent = new Accent();
}

function draw() {
  drawLogo();
}

function drawLogo() {
  // DESENHAR FUNDO
  background(bgColor.x, bgColor.y, bgColor.z);

  // PARÂMETROS
  let letterHeight = 200 * scalling;
  let thickness = 4.45 * scalling;
  let letterWidth = 54.5 * scalling;
  let letterExpand = sliderWidth.value();
  if (letterExpand > 14) {
    letterExpand += 100;
  }
  let bevel = 12 * scalling;
  let handle = bevel * ((4 / 3) * tan(PI / 8)); // Fórmula para um quarto de círculo
  let distance = 25 * scalling;

  if (textInput.value() != "Adicionar chamada") {
    fill(logoColor.x, logoColor.y, logoColor.z);
    textSize(24 * scalling);
    textFont(fontRegular);
    textAlign(CENTER);
    let subHeader = textInput.value();
    text(
      subHeader.toLowerCase(),
      width / 2,
      (height + letterHeight) / 2 + 40 * scalling
    );
  }

  // CENTRALIZAR LOGO
  push(); // GUARDAR POSIÇÃO INICIAL

  if (letterExpand == 0) {
    translate(
      (width - letterWidth * 8 - thickness * 6) / 2,
      (height - letterHeight) / 2
    );
  } else if (letterExpand > 0 && letterExpand <= 7) {
    translate(
      (width - letterWidth * 7 - letterHeight - thickness * 6) / 2,
      (height - letterHeight) / 2
    );
  } else if (letterExpand > 7 && letterExpand <= 14) {
    translate(
      (width - letterWidth * 7 - letterHeight * 1.35 - thickness * 6) / 2,
      (height - letterHeight) / 2
    );
  } else if (letterExpand > 14) {
    translate(
      (width - letterWidth * 6.5 - letterHeight * 2.35 - thickness * 6) / 2,
      (height - letterHeight) / 2
    );
  }

  // DESENHAR LETRAS
  letterS1.drawS(
    logoColor,
    letterHeight,
    letterWidth,
    letterExpand - 1,
    bevel,
    handle,
    thickness,
    distance
  );
  letterU1.drawU(
    logoColor,
    letterHeight,
    letterWidth,
    letterExpand - 2,
    bevel,
    handle,
    thickness,
    distance
  );
  letterM1.drawM(
    logoColor,
    letterHeight,
    letterWidth * 1.5,
    letterExpand - 3,
    bevel,
    handle,
    thickness,
    distance
  );
  letterA1.drawA(
    logoColor,
    letterHeight,
    letterWidth,
    letterExpand - 4,
    bevel,
    handle,
    thickness,
    distance
  );
  accent.drawAccent(
    logoColor,
    letterHeight,
    letterWidth,
    letterExpand - 5,
    thickness
  );
  letterU2.drawU(
    logoColor,
    letterHeight,
    letterWidth,
    letterExpand - 5,
    bevel,
    handle,
    thickness,
    distance
  );
  letterM2.drawM(
    logoColor,
    letterHeight,
    letterWidth * 1.5,
    letterExpand - 6,
    bevel,
    handle,
    thickness,
    distance
  );
  letterA2.drawA(
    logoColor,
    letterHeight,
    letterWidth,
    letterExpand - 7,
    bevel,
    handle,
    thickness,
    distance
  );

  pop(); // RESETAR TRANSLAÇÃO
}

function downloadPNG() {
  pCanvasSize = createVector(width, height);
  resizeCanvas(1920, 1080);
  pScalling = scalling;
  scalling = 2;
  drawLogo();
  save(saveCanvas, "Sumauma.png");
  scalling = pScalling;
  resizeCanvas(pCanvasSize.x, pCanvasSize.y);
}

function downloadSVG() {
  save("Sumauma.svg"); // Obrigado https://github.com/zenozeng/p5.js-svg
}
