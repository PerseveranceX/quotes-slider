let index = 0;
function changeQuote() {
  const citeArr = [
    `Homo Sapien`,
    `Homo Sapien`,
    `Homo Sapien`,
    `Homo Sapien`,
    `Homo Sapien`,
    `Homo Sapien`,
    `Homo Sapien`,
    `Homo Sapien`,
    `Homo Sapien`,
    `Homo Sapien`
  ];
  const qouteBlockArr = [
    `&ldquo; To deny people their human rights is to challenge their very humanity. &rdquo;`,
    `&ldquo; Love and compassion are necessities, not luxuries. Without them, humanity cannot survive. &rdquo;`,
    `&ldquo; Those who are at war with others are not at peace with themselves. &rdquo;`,
    `&ldquo; Liberty, Humanity, Justice, Equality. &rdquo;`,
    `&ldquo; The greatness of humanity is not in being human, but in being humane. &rdquo;`,
    `&ldquo; The true sign of intelligence is not knowledge but imagination, as logic will get you from A to B. Imagination will take you everywhere. &rdquo;`,
    `&ldquo; Do not do to others what angers you if done to you by others. &rdquo;`,
    `&ldquo; Be a good human being, a warm hearted, affectionate person. That is my fundamental belief. &rdquo;`,
    `&ldquo; We are very, very small, but we are profoundly capable of very, very big things. &rdquo;`,
    `&ldquo; No moral value is greater than humanity. &rdquo;`,
  ];
  qouteBlock.classList.add("hide");
  setTimeout(() => {
    cite.innerHTML = citeArr[index];
    qouteBlock.innerHTML = qouteBlockArr[index];
    index++;
    if (index == qouteBlockArr.length) {
      index = 0;
    }
    qouteBlock.classList.remove("hide");
  }, 1000);
}

let interval = setInterval(changeQuote, 7000);

randomquote.addEventListener("click", (eo) => {
  clearInterval(interval);
  changeQuote();
  interval = setInterval(changeQuote, 7000);
});

sound.addEventListener("click", () => {
  let utterance = new SpeechSynthesisUtterance(`${qouteBlock.innerHTML}   by ${cite.innerHTML}`);
  speechSynthesis.speak(utterance);
});

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(qouteBlock.innerHTML);
});

twitter.addEventListener("click", () => {
  let tweetUrl = `https://twitter.com/intent/tweet?url=${qouteBlock.innerHTML}`;
  window.open(tweetUrl, "_blank");
});