document.getElementById("startBtn").addEventListener("click", function () {
    window.location.href = "reasons.html";
});

// Floating Hearts
const heartsContainer = document.querySelector(".hearts");

setInterval(() => {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (15 + Math.random() * 20) + "px";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    },10000);

},500);