class LetterA {
  constructor() {}

  drawA(_cl, _lH, _lW, _lE, _bv, _hd, _tc, _di) {
    let cl = _cl; // Logo Color
    let lH = _lH; // Letter Height
    let lW = _lW; // Letter Width
    let lE = _lE; // Letter Expand
    let bv = _bv; // Bevel
    let hd = _hd; // Handle
    let tc = _tc; // Thickness
    let di = _di; // Line Distance

    // ESTILO
    fill(cl.x, cl.y, cl.z);
    noStroke();

    // EXPANDIR LETRA
    if (lE == 0 || lE - 115 == -3) {
      lW = lH;
    } else if (lE - 7 == 0) {
      lW = 1.35 * lH;
    } else if (lE - 114 == -3) {
      lW = 1.675 * lH;
    } else if (lE - 114 == -6) {
      lW *= 1.5;
    }
    // lE > 100 são 2 casos especiais, onde -N é a posição da letra

    // FORMA
    beginShape();

    vertex(bv, 0);

    vertex(lW - bv, 0);

    bezierVertex(lW - bv + hd, 0, lW, bv - hd, lW, bv);

    vertex(lW, lH);

    vertex(bv, lH);

    bezierVertex(bv - hd, lH, 0, lH - bv + hd, 0, lH - bv);

    // DESENHAR LINHA INTERNA
    vertex(0, lH * (0.5 - di / (1.5 * lH)) + tc + bv);
    bezierVertex(
      0,
      lH * (0.5 - di / (1.5 * lH)) + tc + bv - hd,
      bv - hd,
      lH * (0.5 - di / (1.5 * lH)) + tc,
      bv,
      lH * (0.5 - di / (1.5 * lH)) + tc
    );
    vertex(bv, lH * (0.5 - di / (1.5 * lH)) + tc);
    vertex(lW / 2 + tc / 2, lH * (0.5 - di / (1.5 * lH)) + tc);
    vertex(lW / 2 + tc / 2, di);
    vertex(lW / 2 - tc / 2, di);
    vertex(lW / 2 - tc / 2, lH * (0.5 - di / (1.5 * lH)));
    vertex(0, lH * (0.5 - di / (1.5 * lH)));

    // CONTINUAR RETÂNGULO
    vertex(0, bv);

    bezierVertex(0, bv - hd, bv - hd, 0, bv, 0);

    // DESENHAR LINHA INTERNA
    beginContour();
    vertex(lW / 2 + tc / 2, lH * (0.5 + di / (1.5 * lH)) - tc);
    vertex(lW / 2 - tc / 2, lH * (0.5 + di / (1.5 * lH)) - tc);
    vertex(lW / 2 - tc / 2, lH - di);
    vertex(lW / 2 + tc / 2, lH - di);
    endContour();

    endShape();

    let mv = lW + tc;
    translate(mv, 0);
  }
}
