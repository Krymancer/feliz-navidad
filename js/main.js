const letter = document.getElementById("letter");
const message = document.getElementById("message");
const audio = document.getElementById("audio");
const santas = document.getElementById("santas");

letter.onclick = () => {
  letter.classList.add("open");
  message.innerHTML = 'Feliz Natal e um próspero ano novo!';
  audio.play();
  santas.classList.remove("hidden");
}