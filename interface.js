function createInterface() {
  let uiWidth = 300;
  let uiHeight = height + 5;
  
  // CRIAR CAIXA DE TEXTO - SLIDER
  let titleSlider = createDiv("Expandir Letras");
  titleSlider.addClass("sectionTitle");
  titleSlider.position((width - uiWidth) / 2, uiHeight + 10);

  // CRIAR SLIDER
  sliderWidth = createSlider(0, 16, 0, int(1));
  sliderWidth.position((width - uiWidth) / 2 - 2, uiHeight + 40);
  sliderWidth.addClass("letterSlider");
  sliderWidth.style("width", `${uiWidth}px`);

  // CRIAR CAIXA DE TEXTO - COR DO FUNDO
  let titleBgColor = createDiv("Logo");
  titleBgColor.addClass("sectionTitle");
  titleBgColor.position((width - uiWidth) / 2, uiHeight + 65);

  // CRIAR CAIXA DE TEXTO - COR DO LOGO
  let titleLogoColor = createDiv("Fundo");
  titleLogoColor.addClass("sectionTitle");
  titleLogoColor.position((width - uiWidth) / 2, uiHeight + 120);

  // CRIAR BOTÕES DE CORES
  let dotColor = [];
  for (let i = 0; i < 30; i++) {
    dotColor[i] = createDiv("");
    dotColor[i].addClass("dotColor");
    dotColor[i].position((width - uiWidth) / 2 + (i % 15) * 20, uiHeight + 87.5 + floor(i / 15) * 55);
    dotColor[i].mousePressed(function () {
      if (i < 15) {
        setLogoColor(i);
      } else {
        setBgColor(i - 15);
      }
    });
    switch (i % 15) {
      case 0:
        dotColor[i].style("background-color", "#38322C");
        break;
      case 1:
        dotColor[i].style("background-color", "#877043");
        break;
      case 2:
        dotColor[i].style("background-color", "#C1A259");
        break;
      case 3:
        dotColor[i].style("background-color", "#BBA679");
        break;
      case 4:
        dotColor[i].style("background-color", "#2A4E33");
        break;
      case 5:
        dotColor[i].style("background-color", "#297C34");
        break;
      case 6:
        dotColor[i].style("background-color", "#607929");
        break;
      case 7:
        dotColor[i].style("background-color", "#64892D");
        break;
      case 8:
        dotColor[i].style("background-color", "#92124E");
        break;
      case 9:
        dotColor[i].style("background-color", "#CD5220");
        break;
      case 10:
        dotColor[i].style("background-color", "#849FAB");
        break;
      case 11:
        dotColor[i].style("background-color", "#DFDDC6");
        break;
      case 12:
        dotColor[i].style("background-color", "#A4322C");
        break;
      case 13:
        dotColor[i].style("background-color", "#2B2C2C");
        break;
      case 14:
        dotColor[i].style("background-color", "#4D4E4C");
        break;
      default:
    }
  }

  
  // CRIAR CAIXA DE TEXTO
  textInput = createInput('Adicionar chamada');
  textInput.position((width - uiWidth) / 2, uiHeight + 175);
  textInput.addClass("input");
  textInput.style("width", `${uiWidth - 8}px`);
  
  // BAIXAR PNG - BOTÃO
  let buttonPng = createDiv("Baixar PNG");
  buttonPng.addClass("sectionTitle");
  buttonPng.addClass("button");
  buttonPng.position((width - uiWidth) / 2, uiHeight + 215);
  buttonPng.mousePressed(downloadPNG);
  
  // BAIXAR SVG - BOTÃO
  let buttonSvg = createDiv("Baixar SVG");
  buttonSvg.addClass("sectionTitle");
  buttonSvg.addClass("button");
  buttonSvg.position((width - uiWidth) / 2, uiHeight + 240);
  buttonSvg.mousePressed(downloadSVG);
}
