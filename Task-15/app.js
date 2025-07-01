const emojiElement = document.getElementById("emoji");
const countShowElement = document.getElementById("count");
const decrementElement = document.getElementById("decrement");
const resetElement = document.getElementById("reset");
const incrementElement = document.getElementById("increment");

let count = 0;

function updateEmojiAndColor(countValue) {
  countShowElement.textContent = countValue;
  if(countValue>0){
    emojiElement.textContent ="😁";
    document.body.style.backgroundColor = `hsl(120, ${Math.min(100,countValue * 10)}%, 80%)`;
  }
  else if(countValue < 0){
    emojiElement.textContent ="😥";
    document.body.style.backgroundColor = `hsl(0, ${Math.min(100,Math.abs(countValue * 10))}%, 80%)`
  }
  else{
    emojiElement.textContent ="😊";
  }
}

incrementElement.addEventListener("click", () => {
  count++;
  updateEmojiAndColor(count);
});

decrementElement.addEventListener("click", () => {
    count--;
    updateEmojiAndColor(count);
  });

resetElement.addEventListener("click", () => {
    count = 0;
    updateEmojiAndColor(count); 
  });