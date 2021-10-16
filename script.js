const btn = document.getElementById("btn-emoji-switcher");
const emojis = [
  "😀",
  "😃",
  "😄",
  "😁",
  "😆",
  "😅",
  "🤣",
  "😂",
  "🙂",
  "🙃",
  "😉",
  "😊",
  "😇",
  "🥰",
  "😍",
  "🤩",
  "😘",
  "😗",
  "😚",
  "😙",
];

btn.addEventListener("mouseover", () => {
  btn.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
});
