/* =========================================================
   BIRTHDAY WEBSITE SCRIPT
========================================================= */


/* =========================================================
   OPEN SURPRISE
========================================================= */

function openSurprise() {

    const card = document.getElementById("birthdayCard");

    if (card) {

        card.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }

}


/* =========================================================
   ENVELOPE
========================================================= */

function toggleEnvelope() {

    const envelope = document.getElementById("envelope");
    const hint = document.getElementById("letterHint");

    if (!envelope) return;

    envelope.classList.toggle("open");

    const isOpen = envelope.classList.contains("open");

    if (hint) {

        if (isOpen) {

            hint.innerHTML = "♡ Your little letter is open ♡";

        } else {

            hint.innerHTML = "✦ Tap the envelope to open ✦";

        }

    }

}


/* =========================================================
   GIFT
========================================================= */

function openGift() {

    const popup = document.getElementById("popup");

    if (!popup) return;

    popup.classList.add("show");

    createConfetti();

}


/* =========================================================
   CLOSE POPUP
========================================================= */

function closePopup() {

    const popup = document.getElementById("popup");

    if (!popup) return;

    popup.classList.remove("show");

}


/* =========================================================
   CONFETTI
========================================================= */

function createConfetti() {

    const container =
        document.getElementById("confetti-container");

    if (!container) return;

    const symbols = [
        "💙",
        "🩵",
        "♡",
        "✦",
        "✨",
        "🫧"
    ];

    for (let i = 0; i < 35; i++) {

        const confetti =
            document.createElement("span");

        confetti.className = "confetti";

        confetti.innerHTML =
            symbols[Math.floor(Math.random() * symbols.length)];

        confetti.style.left =
            Math.random() * 100 + "%";

        confetti.style.animationDelay =
            Math.random() * 1.5 + "s";

        confetti.style.fontSize =
            12 + Math.random() * 15 + "px";

        container.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 4500);

    }

}


/* =========================================================
   CLOSE POPUP WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener("click", function(event) {

    const popup =
        document.getElementById("popup");

    if (!popup) return;

    if (
        event.target === popup &&
        popup.classList.contains("show")
    ) {

        popup.classList.remove("show");

    }

});
