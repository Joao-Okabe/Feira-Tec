function calculateResult() {
    let answers = {
      fireflies: 0,
      fedra: 0,
      hunters: 0,
      survivors: 0
    };

    // Conta as respostas do usuário
    document.querySelectorAll('input[type="radio"]:checked').forEach((input) => {
      answers[input.value]++;
    });

    // Determina a facção com mais respostas
    let maxScore = Math.max(...Object.values(answers));
    let faction = Object.keys(answers).find(key => answers[key] === maxScore);

    let resultText = "";
    switch(faction) {
      case "fireflies":
        resultText = "Você pertence aos Fireflies! Um rebelde que luta pela liberdade e um futuro melhor.";
        break;
      case "fedra":
        resultText = "Você é da FEDRA! Busca manter ordem e segurança, mesmo que isso custe a liberdade.";
        break;
      case "hunters":
        resultText = "Você é um Caçador! A sobrevivência é sua prioridade, e você faz o que for preciso.";
        break;
      case "survivors":
        resultText = "Você é um Sobrevivente! A lealdade e a comunidade são fundamentais para você.";
        break;
      default:
        resultText = "Parece que não há uma facção clara para você. Talvez você seja um solitário no apocalipse.";
    }

    document.getElementById("result").textContent = resultText;
  }