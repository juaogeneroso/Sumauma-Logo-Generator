class LetterM {
  constructor() {}

  drawM(_cl, _lH, _lW, _lE, _bv, _hd, _tc, _di) {
      
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
    if (lE == 0) {
      lW = lH + lW / 3;
    } else if (lE - 7 == 0) {
      lW = 1.35 * lH + lW / 3;
    }  else if (lE - 114 == -2) {
      lW = .675 * lH + lW / 3;
    }
    // lE > 100 são 2 casos especiais, onde -N é a posição da letra
    // lW / 3 compensa a diferença de largura entre o M e as demais letras
    
    // FORMA
    beginShape();
    
    vertex(0, 0);

    vertex(lW - bv, 0);

    bezierVertex(
      lW - bv + hd, 0,
      lW, bv - hd,
      lW, bv
    );

    vertex(lW, lH);
    
    // DESENHAR LINHA INTERNA
    vertex(2 * lW / 3 + tc / 2, lH)
    vertex(2 * lW / 3 + tc / 2, di)
    vertex(2 * lW / 3 - tc / 2, di)
    vertex(2 * lW / 3 - tc / 2, lH)
    vertex(lW / 3 + tc / 2, lH)
    vertex(lW / 3 + tc / 2, di)
    vertex(lW / 3 - tc / 2, di)
    vertex(lW / 3 - tc / 2, lH)
    
    // CONTINUAR RETÂNGULO
    vertex(0, lH);

    vertex(0, 0);
    
    endShape();
    
    let mv = lW + tc;
    translate(mv, 0);
  }
}
