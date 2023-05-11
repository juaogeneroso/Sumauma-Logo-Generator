class Accent {
  constructor() {}

  drawAccent(_cl, _lH, _lW, _lE, _tc) {
    let cl = _cl; // Logo Color
    let lH = _lH; // Letter Height
    let lW = _lW; // Letter Width
    let lE = _lE; // Letter Expand
    let tc = _tc; // Thickness

    // ESTILO
    fill(cl.x, cl.y, cl.z);
    noStroke();

    // EXPANDIR LETRA
    if (lE == 0) {
      lW = lH;
    } else if (lE - 7 == 0) {
      lW = 1.35 * lH;
    } else if (lE - 115 == -4) {
      lW *= 1.5;
    }
    // lE > 100 são 2 casos especiais, onde -N é a posição da letra

    // FORMA
    beginShape();

    vertex(0, -tc * 1.9);
    vertex(lW, -tc * 2.8);
    vertex(lW, -tc);
    vertex(0, -tc);

    endShape(CLOSE);
  }
}
