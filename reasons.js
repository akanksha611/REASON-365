const reasons = [
"Because your smile is my favorite thing in the world. ❤️",
"Because you always make me feel loved. 🥹",
"Because talking to you makes my day better.",
"Because you understand me.",
"Because you are my safe place. ❤️"
];

let index = 0;

const number = document.getElementById("number");
const reason = document.getElementById("reason");
const button = document.getElementById("nextBtn");

button.addEventListener("click", function () {

    index++;

    if (index < reasons.length) {
        number.innerText = index + 1;
        reason.innerText = reasons[index];
    } else {
        window.location.href = "letter.html";
    }

});