function calculateResult() {
  let resposta = {
    fedra: 0,
    fireflies: 0,
    wlf: 0,
    serafitas: 0,
    rattlers: 0
  };

  // Conta as respostas do usuário
  document.querySelectorAll('input[type="radio"]:checked').forEach((input) => {
    resposta[input.value]++;
  });

  // Determina a facção com mais respostas
  let maxScore = Math.max(...Object.values(resposta));
  let faction = Object.keys(resposta).find(key => resposta[key] === maxScore);

  let resultText = "";
  let resultImageSrc = "";
  switch(faction) {
    
    case "fedra":
    resultText = "Você é da FEDRA! Busca manter ordem e segurança, mesmo que isso custe a liberdade.";
    resultImageSrc = "images/Fedra.png";
    break;
    
    case "fireflies":
    resultText = "Você pertence aos Vagalumes! Um rebelde que luta pela liberdade e um futuro melhor.";
    resultImageSrc = "images/Vagalumes.png";
    break;
    
    case "wlf":
    resultText = "Você é um membro da W.L.F! A ordem é sua prioridade, e você faz o que for preciso.";
    resultImageSrc = "images/WLF.png";
    break;
    
    case "serafitas":
    resultText = "Você é um Serafita! A lealdade e a comunidade são fundamentais para você.";
    resultImageSrc = "images/Seraphites.png";
    break;
    
    case "rattlers":
    resultText = "Você é um Rattler! A lealdade e a comunidade são fundamentais para você.";
    resultImageSrc = "images/Rattlers.png";
    break;

    default:
      resultText = "Parece que não há uma facção clara para você. Talvez você seja um solitário no apocalipse.";
      resultImageSrc = "";
  }

  // Atualiza o conteúdo do resultado com o texto e a imagem
  document.getElementById("result").textContent = resultText;
  document.getElementById("resultImage").src = resultImageSrc;

  // Exibe o contêiner do resultado
  document.getElementById("resultContainer").style.display = "block";

  window.scrollTo({ top: 0, behavior: 'smooth' });

}