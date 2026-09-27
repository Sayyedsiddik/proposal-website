const questionBox = document.getElementById("questionBox");
const successBox = document.getElementById("successBox");
const paymentBox = document.getElementById("paymentBox");

const question = document.getElementById("question");
const subText = document.getElementById("subText");
const emoji = document.getElementById("emoji");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let currentQuestion = 0;

const questions = [
    {
        emoji: "💌",
        question: "Will you be my girlfriend? 🥺",
        subText: "Think carefully before answering..."
    },
    {
        emoji: "👀",
        question: "Are you REALLY sure? 😳",
        subText: "Maybe you should reconsider..."
    },
    {
        emoji: "❤️",
        question: "Do you like me? 😏",
        subText: "There is only one correct answer 😂"
    },
    {
        emoji: "🥰",
        question: "Would you like to go on a date with me?",
        subText: "Dinner is on... probably you. 😂"
    },
    {
        emoji: "💍",
        question: "So... are we officially a couple now? ❤️",
        subText: "This is your final answer!"
    }
];


// YES BUTTON
yesBtn.addEventListener("click", function () {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        emoji.textContent = questions[currentQuestion].emoji;
        question.textContent = questions[currentQuestion].question;
        subText.textContent = questions[currentQuestion].subText;

        // Move NO button back to normal position
        noBtn.style.position = "relative";
        noBtn.style.left = "0px";
        noBtn.style.top = "0px";

    } else {

        questionBox.classList.add("hidden");
        successBox.classList.remove("hidden");

    }
});


// NO BUTTON RUNS AWAY 😂
function moveNoButton() {

    const container = document.querySelector(".container");

    const maxX = container.clientWidth - noBtn.offsetWidth - 30;
    const maxY = container.clientHeight - noBtn.offsetHeight - 30;

    const randomX = Math.floor(Math.random() * maxX) - 10;
    const randomY = Math.floor(Math.random() * maxY) - 10;

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}


// Computer
noBtn.addEventListener("mouseover", moveNoButton);

// Phone
noBtn.addEventListener("touchstart", function(event) {
    event.preventDefault();
    moveNoButton();
});


// FINAL PAYMENT SCREEN
function showPayment() {

    successBox.classList.add("hidden");
    paymentBox.classList.remove("hidden");

}