let scalling;
let bgColor;
let logoColor;

function setup() {
  createCanvas(min((max(windowWidth, 300)), 1080), min(windowWidth / 2, 540), SVG);

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

  // CENTRALIZAR
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
}

function downloadSVG() {
  save("Sumauma.svg"); // Obrigado https://github.com/zenozeng/p5.js-svg
}