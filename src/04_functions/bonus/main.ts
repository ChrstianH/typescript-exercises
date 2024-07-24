const score1 = document.getElementById("score1") ?? new HTMLElement();
const score2 = document.getElementById("score2") ?? new HTMLElement();

const btn1 = document.getElementById("home_plus_1") ?? new HTMLElement();
const btn2 = document.getElementById("home_plus_2") ?? new HTMLElement();
const btn3 = document.getElementById("home_plus_3") ?? new HTMLElement();
const btn4 = document.getElementById("away_plus_1") ?? new HTMLElement();
const btn5 = document.getElementById("away_plus_2") ?? new HTMLElement();
const btn6 = document.getElementById("away_plus_3") ?? new HTMLElement();

const btnReset = document.getElementById("reset") ?? new HTMLElement();

function handleClickEvent(event: MouseEvent) {
  event.preventDefault();
  let num: number = 0;
  let eventTarget = event.target;
  switch (eventTarget) {
    case btn1:
      num = Number(score1.textContent);
      num++;
      score1.textContent = num.toString();
      break;
    case btn2:
      num = Number(score1.textContent);
      num += 2;
      score1.textContent = num.toString();
      break;
    case btn3:
      num = Number(score1.textContent);
      num += 3;
      score1.textContent = num.toString();
      break;
    case btn4:
      num = Number(score2.textContent);
      num++;
      score2.textContent = num.toString();
      break;
    case btn5:
      num = Number(score2.textContent);
      num += 2;
      score2.textContent = num.toString();
      break;
    case btn6:
      num = Number(score2.textContent);
      num += 3;
      score2.textContent = num.toString();
      break;
    case btnReset:
      score1.textContent = "0";
      score2.textContent = "0";
      break;
  }
}

btn1.addEventListener("click", handleClickEvent);
btn2.addEventListener("click", handleClickEvent);
btn3.addEventListener("click", handleClickEvent);
btn4.addEventListener("click", handleClickEvent);
btn5.addEventListener("click", handleClickEvent);
btn6.addEventListener("click", handleClickEvent);
btnReset.addEventListener("click", handleClickEvent);
