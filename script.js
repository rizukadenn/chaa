/* =====================================================
   MAGICAL PASTEL BLUE BIRTHDAY
===================================================== */


/* =====================================================
   ELEMENTS
===================================================== */

const loader =
  document.getElementById("loader");

const loaderBar =
  document.getElementById("loaderBar");

const loaderPercent =
  document.getElementById("loaderPercent");

const intro =
  document.getElementById("intro");

const introEnvelope =
  document.getElementById("introEnvelope");

const openHint =
  document.getElementById("openHint");

const recipient =
  document.getElementById("recipient");

const typingIntro =
  document.getElementById("typingIntro");

const enterBtn =
  document.getElementById("enterBtn");

const mainSite =
  document.getElementById("mainSite");

const discoverBtn =
  document.getElementById("discoverBtn");

const worldSection =
  document.querySelector(".world-section");

const mainEnvelope =
  document.getElementById("mainEnvelope");

const giftBox =
  document.getElementById("giftBox");

const surpriseModal =
  document.getElementById("surpriseModal");

const modalClose =
  document.getElementById("modalClose");

const effectContainer =
  document.getElementById("effectContainer");

const magicParticles =
  document.getElementById("magicParticles");


/* =====================================================
   LOADING
===================================================== */

let loading = 0;

const loadingTimer =
  setInterval(() => {

    loading +=
      Math.floor(
        Math.random() * 4
      ) + 1;


    if (loading >= 100) {

      loading = 100;

      clearInterval(
        loadingTimer
      );

      loaderBar.style.width =
        "100%";

      loaderPercent.textContent =
        "100%";


      setTimeout(() => {

        loader.classList.add(
          "hidden"
        );

        intro.classList.add(
          "active"
        );

        document.body.style.overflow =
          "hidden";

      }, 700);


      return;
    }


    loaderBar.style.width =
      loading + "%";

    loaderPercent.textContent =
      loading + "%";

  }, 65);


/* =====================================================
   INTRO ENVELOPE
===================================================== */

let envelopeOpened = false;


introEnvelope.addEventListener(
  "click",
  () => {

    if (envelopeOpened) return;

    envelopeOpened = true;


    introEnvelope.classList.add(
      "open"
    );


    openHint.style.opacity =
      "0";


    /* start magical audio */

    startMagicalMusic();


    /* little explosion */

    createHeartRain(
      35
    );


    setTimeout(() => {

      recipient.classList.add(
        "show"
      );


      typeText(
        typingIntro,
        "A little reminder that today is about you, your dreams, and all the beautiful things waiting ahead.",
        35
      );

    }, 850);

  }
);


/* =====================================================
   TYPING EFFECT
===================================================== */

function typeText(
  element,
  text,
  speed = 40
) {

  element.textContent = "";

  let index = 0;


  const timer =
    setInterval(() => {

      element.textContent +=
        text[index];

      index++;


      if (
        index >= text.length
      ) {

        clearInterval(timer);

      }

    }, speed);

}


/* =====================================================
   ENTER MAIN SITE
===================================================== */

enterBtn.addEventListener(
  "click",
  () => {

    createHeartRain(90);

    createConfetti(70);


    intro.classList.add(
      "leave"
    );


    setTimeout(() => {

      mainSite.classList.add(
        "active"
      );

      document.body.style.overflow =
        "auto";


      window.scrollTo({
        top: 0,
        behavior: "instant"
      });


      createMagicParticles(
        35
      );

    }, 750);

  }
);


/* =====================================================
   DISCOVER BUTTON
===================================================== */

discoverBtn.addEventListener(
  "click",
  () => {

    worldSection.scrollIntoView({
      behavior: "smooth"
    });

  }
);


/* =====================================================
   MAGIC PARTICLES
===================================================== */

function createMagicParticles(
  amount = 30
) {

  const symbols = [
    "✦",
    "✧",
    "⋆",
    "♡"
  ];


  for (
    let i = 0;
    i < amount;
    i++
  ) {

    const particle =
      document.createElement(
        "span"
      );


    particle.className =
      "magic-particle";


    particle.textContent =
      symbols[
        Math.floor(
          Math.random() *
          symbols.length
        )
      ];


    particle.style.left =
      Math.random() * 100 + "%";


    particle.style.fontSize =
      (
        8 +
        Math.random() * 13
      ) + "px";


    particle.style.animationDuration =
      (
        9 +
        Math.random() * 10
      ) + "s";


    particle.style.animationDelay =
      (
        Math.random() * 10
      ) + "s";


    magicParticles.appendChild(
      particle
    );

  }

}


/* =====================================================
   HEART RAIN
===================================================== */

function createHeartRain(
  amount = 50
) {

  const symbols = [
    "♡",
    "♥",
    "✦",
    "✧",
    "🩵"
  ];


  for (
    let i = 0;
    i < amount;
    i++
  ) {

    const heart =
      document.createElement(
        "span"
      );


    heart.className =
      "effect-heart";


    heart.textContent =
      symbols[
        Math.floor(
          Math.random() *
          symbols.length
        )
      ];


    heart.style.left =
      Math.random() * 100 + "vw";


    heart.style.top =
      (
        55 +
        Math.random() * 40
      ) + "vh";


    heart.style.fontSize =
      (
        10 +
        Math.random() * 20
      ) + "px";


    heart.style.color =
      "rgba(255,255,255,.9)";


    heart.style.setProperty(
      "--drift",
      (
        -100 +
        Math.random() * 200
      ) + "px"
    );


    effectContainer.appendChild(
      heart
    );


    setTimeout(() => {

      heart.remove();

    }, 2800);

  }

}


/* =====================================================
   CONFETTI
===================================================== */

function createConfetti(
  amount = 60
) {

  const symbols = [
    "✦",
    "✧",
    "♡",
    "⋆",
    "🩵",
    "✨"
  ];


  for (
    let i = 0;
    i < amount;
    i++
  ) {

    const item =
      document.createElement(
        "span"
      );


    item.className =
      "burst";


    item.textContent =
      symbols[
        Math.floor(
          Math.random() *
          symbols.length
        )
      ];


    item.style.left =
      "50vw";

    item.style.top =
      "50vh";


    item.style.fontSize =
      (
        10 +
        Math.random() * 18
      ) + "px";


    item.style.color =
      "white";


    item.style.setProperty(
      "--tx",
      (
        -50 +
        Math.random() * 100
      ) * 5 + "px"
    );


    item.style.setProperty(
      "--ty",
      (
        -50 +
        Math.random() * 100
      ) * 5 + "px"
    );


    effectContainer.appendChild(
      item
    );


    setTimeout(() => {

      item.remove();

    }, 1700);

  }

}


/* =====================================================
   MAIN ENVELOPE
===================================================== */

let letterOpened = false;


mainEnvelope.addEventListener(
  "click",
  () => {

    letterOpened =
      !letterOpened;


    mainEnvelope.classList.toggle(
      "open"
    );


    if (letterOpened) {

      createHeartRain(25);

    }

  }
);


/* =====================================================
   GIFT
===================================================== */

let giftOpened = false;


giftBox.addEventListener(
  "click",
  () => {

    if (giftOpened) return;

    giftOpened = true;


    giftBox.classList.add(
      "open"
    );


    createConfetti(100);

    createHeartRain(45);


    setTimeout(() => {

      surpriseModal.classList.add(
        "active"
      );

    }, 700);

  }
);


/* =====================================================
   MODAL
===================================================== */

function closeSurprise() {

  surpriseModal.classList.remove(
    "active"
  );

}


modalClose.addEventListener(
  "click",
  closeSurprise
);


surpriseModal.addEventListener(
  "click",
  (event) => {

    if (
      event.target ===
      surpriseModal
    ) {

      closeSurprise();

    }

  }
);


document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape"
    ) {

      closeSurprise();

    }

  }
);


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
  document.querySelectorAll(
    ".reveal"
  );


const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach(
        (entry) => {

          if (
            entry.isIntersecting
          ) {

            entry.target.classList.add(
              "visible"
            );

          }

        }
      );

    },
    {
      threshold: .12
    }
  );


revealElements.forEach(
  element => {

    observer.observe(
      element
    );

  }
);


/* =====================================================
   CURSOR SPARKLE
===================================================== */

let lastSparkle = 0;


document.addEventListener(
  "mousemove",
  (event) => {

    const now =
      Date.now();


    if (
      now - lastSparkle < 65
    ) {

      return;

    }


    lastSparkle = now;


    createCursorSparkle(
      event.clientX,
      event.clientY
    );

  }
);


function createCursorSparkle(
  x,
  y
) {

  const sparkle =
    document.createElement(
      "span"
    );


  sparkle.className =
    "cursor-spark";


  sparkle.textContent =
    Math.random() > .5
      ? "✦"
      : "✧";


  sparkle.style.left =
    x + "px";

  sparkle.style.top =
    y + "px";


  sparkle.style.setProperty(
    "--x",
    (
      -10 +
      Math.random() * 20
    ) + "px"
  );


  sparkle.style.setProperty(
    "--y",
    (
      -15 -
      Math.random() * 20
    ) + "px"
  );


  document.body.appendChild(
    sparkle
  );


  setTimeout(() => {

    sparkle.remove();

  }, 850);

}


/* =====================================================
   CLICK SPARKLE
===================================================== */

document.addEventListener(
  "click",
  (event) => {

    for (
      let i = 0;
      i < 7;
      i++
    ) {

      const sparkle =
        document.createElement(
          "span"
        );


      sparkle.className =
        "burst";


      sparkle.textContent =
        i % 2 === 0
          ? "✦"
          : "✧";


      sparkle.style.left =
        event.clientX + "px";

      sparkle.style.top =
        event.clientY + "px";


      sparkle.style.fontSize =
        "14px";


      sparkle.style.color =
        "#ffffff";


      sparkle.style.setProperty(
        "--tx",
        (
          -50 +
          Math.random() * 100
        ) + "px"
      );


      sparkle.style.setProperty(
        "--ty",
        (
          -50 +
          Math.random() * 100
        ) + "px"
      );


      effectContainer.appendChild(
        sparkle
      );


      setTimeout(() => {

        sparkle.remove();

      }, 1600);

    }

  }
);


/* =====================================================
   MAGICAL MUSIC
   No MP3 required.
   Browser audio starts after envelope click.
===================================================== */

let audioContext = null;
let musicStarted = false;
let musicTimer = null;


function startMagicalMusic() {

  if (musicStarted) return;

  musicStarted = true;


  try {

    audioContext =
      new (
        window.AudioContext ||
        window.webkitAudioContext
      )();


    if (
      audioContext.state ===
      "suspended"
    ) {

      audioContext.resume();

    }


    playMusicPattern();


  } catch (error) {

    console.log(
      "Audio unavailable:",
      error
    );

  }

}


function playNote(
  frequency,
  duration,
  volume = .025
) {

  if (!audioContext) return;


  const oscillator =
    audioContext.createOscillator();

  const gain =
    audioContext.createGain();


  oscillator.type =
    "sine";

  oscillator.frequency.value =
    frequency;


  gain.gain.setValueAtTime(
    0,
    audioContext.currentTime
  );


  gain.gain.linearRampToValueAtTime(
    volume,
    audioContext.currentTime + .05
  );


  gain.gain.exponentialRampToValueAtTime(
    .001,
    audioContext.currentTime + duration
  );


  oscillator.connect(gain);

  gain.connect(
    audioContext.destination
  );


  oscillator.start();

  oscillator.stop(
    audioContext.currentTime +
    duration
  );

}


function playMusicPattern() {

  if (!audioContext) return;


  const notes = [

    261.63,
    329.63,
    392.00,
    329.63,

    293.66,
    349.23,
    440.00,
    349.23,

    261.63,
    329.63,
    392.00,
    523.25

  ];


  let index = 0;


  function nextNote() {

    if (
      !audioContext ||
      audioContext.state ===
      "closed"
    ) {

      return;

    }


    playNote(
      notes[index],
      .9,
      .022
    );


    index =
      (index + 1) %
      notes.length;


    musicTimer =
      setTimeout(
        nextNote,
        850
      );

  }


  nextNote();

}


/* =====================================================
   STOP MUSIC WHEN TAB IS HIDDEN
===================================================== */

document.addEventListener(
  "visibilitychange",
  () => {

    if (!audioContext) return;


    if (
      document.hidden
    ) {

      if (musicTimer) {

        clearTimeout(
          musicTimer
        );

      }

    } else {

      if (musicStarted) {

        playMusicPattern();

      }

    }

  }
);
