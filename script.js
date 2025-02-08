document.getElementById("b2").addEventListener("click", function () {
  let b1 = document.getElementById("b1");
  let container = document.getElementById("container");
  // let currentWidth = b1.offsetWidth;
  // let currentHeight = b1.offsetHeight;

  let newWidth = b1.offsetWidth * 1.6; // Increase by ..%
  let newHeight = b1.offsetHeight * 1.6;
  let newContw = container.offsetWidth / 1.6; // Increase by ..%
  let newConth = container.offsetHeight / 1.6;

  if (newWidth >= window.innerWidth || newHeight >= window.innerHeight) {
    newWidth = window.innerWidth;
    newHeight = window.innerHeight;
    b2.style.display = "none";
    container.style.display = "none";
  }
  b1.style.width = newWidth + "px";
  b1.style.height = newHeight + "px";
  container.style.width = newContw + "px";
  container.style.height = newConth + "px";

  if (b1.style.display !== "none") {
    let words = ["Lerng cute neak", "Ot anit me heh", "Yes mor hei"];
    let randomWord = words[Math.floor(Math.random() * words.length)];
    h1.innerText = randomWord;
  }
});
function nextPage() {
  window.location.href = "yes.html";
}
function increaseFontSize() {
  let b1Size = document.getElementById("b1");
  let currentSize = parseInt(window.getComputedStyle(b1Size).fontSize); // Get current size
  if (currentSize > 5) {
    // Prevent text from becoming too small
    b1Size.style.fontSize = currentSize + 10 + "px"; // Reduce by 2px each time
  }
}

function decreaseFontSize() {
  let text = document.getElementById("h1");
  let currentSize = parseInt(window.getComputedStyle(text).fontSize); // Get current size
  if (currentSize > 5) {
    // Prevent text from becoming too small
    text.style.fontSize = currentSize - 2 + "px"; // Reduce by 2px each time
  }
}
