
let counter = 0;
let phase = 0; 

const counterElement = document.getElementById("tasbih-counter");
const tasbihTextElement = document.querySelector(".tasbih-text");
const tasbihButton = document.getElementById("tasbih-button");
const resetButton = document.getElementById("reset-button");


tasbihButton.addEventListener("click", () => {
    counter++;
    counterElement.textContent = counter;

    
    if (counter % 33 === 0) {
        phase++; 
        if (phase === 1) {
            tasbihTextElement.textContent = "الحمد لله";
        } else if (phase === 2) {
            tasbihTextElement.textContent = "الله أكبر";
        } else {
            phase = 0; 
            tasbihTextElement.textContent = "سبحان الله";
        }
    }
});

resetButton.addEventListener("click", () => {
    counter = 0;
    phase = 0; 
    counterElement.textContent = counter;
    tasbihTextElement.textContent = "سبحان الله";
});
function goToHome() {
     window.location.href = "index.html"; 
}
