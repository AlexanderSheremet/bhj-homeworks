const xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.responseType = "json";
xhr.send();

xhr.onload = function () {
  const pollTitel = document.querySelector(".poll__title");
  let titelUrl = document.createTextNode(`${xhr.response.data.title}`);
  pollTitel.appendChild(titelUrl);
  const pollAnswers = document.getElementById("poll__answers");
  let answersUrl = xhr.response.data.answers;
  for (let i = 0; i < answersUrl.length; i++) {
    const answerBtn = document.createElement("button");
    answerBtn.classList.add("poll__answer");
    const answerText = document.createTextNode(`${answersUrl[i]}`);
    answerBtn.appendChild(answerText);
    pollAnswers.appendChild(answerBtn);
    answerBtn.addEventListener("click", (e) => {
      alert("Спасибо, ваш голос засчитан!");
    });
  }
};
