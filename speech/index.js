const texts = document.querySelector(".texts");
window.SpeechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();
recognition.interimResults = true;
let p = document.createElement("p");
recognition.addEventListener("result", (e) => {
  console.log(e);
  let text = Array.from(e.results, (result) => {
    return result[0].transcript;
  });
  text = text.join("");
  p.innerText = text;
  texts.appendChild(p);
  if (e.results[0].isFinal) {
    if (text.includes("Hello") || text.includes("Hi")) {
      p = document.createElement("p");
      p.classList.add("reply");
      p.innerText = "Hi";
      texts.appendChild(p);
    }
    if (text.includes("打开谷歌")) {
      p = document.createElement("p");
      p.classList.add("reply");
      texts.appendChild(p);
      p.innerText = "帮您打开官网中";
      window.open("https://google.com");
    }
    if (text.includes("turn light")) {
      p = document.createElement("p");
      p.classList.add("reply");
      texts.appendChild(p);
      p.innerText = "帮您打开官网中";
      window.open("https://google.com");
    }
    p = document.createElement("p");
  }
});
console.log(recognition);
recognition.addEventListener("end", () => {
  recognition.start();
});
recognition.start();
