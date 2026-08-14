/* =========================
   SURPRISE BUTTON
========================= */

function openSurprise() {

    const card = document.getElementById("birthdayCard");

    card.classList.add("show");

    setTimeout(() => {

        card.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 100);

    createConfetti(40);
}


/* =========================
   GIFT POPUP
========================= */

function openGift() {

    const popup = document.getElementById("popup");

    popup.classList.add("active");

    createConfetti(100);
}


function closePopup() {

    const popup = document.getElementById("popup");

    popup.classList.remove("active");
}


/* =========================
   CONFETTI
========================= */

function createConfetti(amount) {

    const container =
        document.getElementById("confetti-container");

    const shapes = [
        "💙",
        "🩵",
        "🤍",
        "✨",
        "⭐",
        "♡",
        "🫧"
    ];


    for (let i = 0; i < amount; i++) {

        const confetti =
            document.createElement("div");

        confetti.classList.add("confetti");

        confetti.textContent =
            shapes[
                Math.floor(
                    Math.random() * shapes.length
                )
            ];


        confetti.style.left =
            Math.random() * 100 + "vw";


        confetti.style.fontSize =
            (12 + Math.random() * 18) + "px";


        confetti.style.animationDuration =
            (3 + Math.random() * 4) + "s";


        confetti.style.animationDelay =
            Math.random() * 0.8 + "s";


        container.appendChild(confetti);


        setTimeout(() => {

            confetti.remove();

        }, 8000);

    }
}


/* =========================
   CLOSE POPUP WHEN CLICK
   OUTSIDE THE BOX
========================= */

document
    .getElementById("popup")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closePopup();

        }

    });


/* =========================
   LITTLE RANDOM HEARTS
========================= */

function createFloatingHeart() {

    const heart =
        document.createElement("div");

    heart.textContent = "♡";

    heart.style.position = "fixed";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.bottom = "-30px";

    heart.style.fontSize =
        (15 + Math.random() * 20) + "px";

    heart.style.color = "#ffffff";

    heart.style.opacity = "0.5";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "1";

    heart.style.transition =
        "transform 7s linear, opacity 7s linear";

    document.body.appendChild(heart);


    setTimeout(() => {

        heart.style.transform =
            `translateY(-110vh) translateX(${Math.random() * 100 - 50}px)`;

        heart.style.opacity = "0";

    }, 100);


    setTimeout(() => {

        heart.remove();

    }, 7500);
}


/* Create a new floating heart periodically */

setInterval(createFloatingHeart, 1800);
// =========================
// INTERACTIVE LETTER
// =========================

const envelope =
    document.getElementById("envelope");

const letterHint =
    document.getElementById("letterHint");


envelope.addEventListener("click", function () {

    this.classList.toggle("open");

    if (this.classList.contains("open")) {

        letterHint.innerHTML =
            "♡ Your little letter is open ♡";

        createConfetti(25);

    } else {

        letterHint.innerHTML =
            "✦ Tap the envelope to open ✦";

    }

});
