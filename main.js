document.addEventListener("DOMContentLoaded", () => {
  const elScore1 = document.querySelector(".score1");
  const elScore2 = document.querySelector(".score2");
  const elScoreTitle1 = document.querySelector(".score__title1");
  const elScoreTitle2 = document.querySelector(".score__title2");
  const elBtn1 = document.querySelector(".btn1");
  const elBtn2 = document.querySelector(".btn2");
  const bgDiv1 = document.querySelector(".scores1");
  const bgDiv2 = document.querySelector(".scores2");
  const elInput1 = document.querySelector(".input1");
  const elInput2 = document.querySelector(".input2");

  elBtn1.style.backgroundColor = "rgb(47, 108, 47)";
  elBtn2.style.backgroundColor = "rgb(29, 21, 21)";
  elBtn1.style.color = "aliceblue";
  elBtn2.style.color = "aliceblue";

  const modalElement = document.getElementById("staticBackdrop");
  const modal = new bootstrap.Modal(modalElement);

  let score1 = 0;
  let score2 = 0;
  let playerTurn = 1;
  function updateScore(player, score, scoreTitle, scoreElement, button, bgDiv) {
    const random = Math.floor(Math.random() * 10) + 1;
    score += random;
    scoreTitle.textContent = random;
    scoreElement.textContent = score;
    if (score >= 50) {
      button.disabled = true;
      bgDiv.style.backgroundColor = "rgb(174, 161, 45)";

      document.querySelector(
        ".Modal__title"
      ).textContent = `${player}- siz yutdingiz!`;
      modal.show();
    }
    return score;
  }

  function switchTurn() {
    if (playerTurn === 1) {
      elBtn1.disabled = true;
      elBtn1.style.backgroundColor = "rgb(29, 21, 21)";
      elBtn2.disabled = false;
      elBtn2.style.backgroundColor = "rgb(47, 108, 47)";
      bgDiv1.style.backgroundColor = "";
      bgDiv2.style.backgroundColor = "rgb(47, 108, 47)";
      
      playerTurn = 2;
    } else {
      elBtn2.disabled = true;
      elBtn2.style.backgroundColor = "rgb(29, 21, 21)";
      elBtn1.disabled = false;
      elBtn1.style.backgroundColor = "rgb(47, 108, 47)";
      bgDiv2.style.backgroundColor = "";
      bgDiv1.style.backgroundColor = "rgb(47, 108, 47)";
      playerTurn = 1;
    }
  }

  elBtn1.addEventListener("click", () => {
    switchTurn();
    score1 = updateScore(
      elInput1.value,
      score1,
      elScoreTitle1,
      elScore1,
      elBtn1,
      bgDiv1
    );
    if (elInput1.value === "") {
      alert("1-ishtirokchi ismini kiriting");
      elInput1.style.border = "1px solid red";
    } else {
      elInput1.style.border = "none";
    }
  });

  elBtn2.addEventListener("click", () => {
    score2 = updateScore(
      elInput2.value,
      score2,
      elScoreTitle2,
      elScore2,
      elBtn2,
      bgDiv2
    );
    switchTurn();
    if (elInput2.value === "") {
      alert("2-ishtirokchi ismini kiriting");
      elInput2.style.border = "1px solid red";
    } else {
      elInput2.style.border = "none";
    }
  });

  elBtn2.disabled = true;
  bgDiv1.style.backgroundColor = "green";
});
