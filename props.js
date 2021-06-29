const arr = [
  "Pallavi",
  "Priya",
  "Singh",
  "Pallavi is a good girl.",
  "She has many friends.",
];

const msg = document.getElementById("msg");
const typewords = document.getElementById("mywords");
const btn = document.getElementById("btn");
let startTime, endTime;

// console.log("hi");

const playgame = () => {
  let randomNumber = Math.floor(Math.random() * arr.length);
  msg.innerText = arr[randomNumber];
  let date = new Date();
  startTime = date.getTime();
  btn.innerHTML = "Done";
};

const wordCounter = (count) => {
  let response = count.split(" ").length;
  console.log(response);
  return response;
};

const endGame = () => {
  let date = new Date();
  endTime = date.getTime();
  let totalTime = (endTime - startTime) / 1000;

  typewords.innerText = "Start typing";
  // msg.innerText = totalTime;
  let totalNumberOfWords = typewords.value;
  let wordsCount = wordCounter(totalNumberOfWords);
  // console.log(typewords.value);
  let speed = Math.round((wordsCount / totalTime) * 60);
  let correctWords = compareWords(msg.innerText, totalNumberOfWords);
  msg.innerText =
    "You typed " +
    speed +
    " words per minute and you typed " +
    correctWords +
    "words correctly";
};

compareWords = (str1, str2) => {
  let word1 = str1.split(" ");
  let word2 = str2.split(" ");
  let cnt = 0;
  word1.forEach(function (item, index) {
    if (item == word2[index]) {
      cnt++;
    }
  });
  let error = word1.length - cnt;
  return cnt;
};

btn.addEventListener("click", function () {
  if (this.innerText == "Start") {
    typewords.disabled = false;
    playgame();
  } else if (this.innerHTML == "Done") {
    console.log(this.innerHTML);
    typewords.disabled = true;

    btn.innerText = "Start";
    endGame();
  }
});
