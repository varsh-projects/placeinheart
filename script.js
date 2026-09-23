/* =====================================================
   A PLACE IN MY HEART ♡
   FRIENDSHIP WEBSITE
===================================================== */


/* =====================================================
   01 — FRIEND DATABASE
===================================================== */

/*
   IMPORTANT:

   The letters/messages below are temporary placeholders.

   Later we will replace them with the REAL personalized
   content for each of your 8 friends.
*/


const friends = {

    varsha: {

        name: "Varsha",

        code: "moon",

        letter: `
            To my dearest Varsha,
            
            yeah we have fought a lot but none of that can bring us down our love for eachother is morethan anything...
            
            that everyone knows even my family knows how much i love you... even if i get
            1000 of peoples around me..i will still carve for you to be with me...i will love you always,
            i don't know how many people left you but i will never join that list...

            ♡
        `,

        matter:
            "You matter to me because you restored my belief in friendship and became my safe haven.",
        friendship:
            "Our friendship is an unbreakable bond that we always find our way back to, no matter what.",

        promise:
            "to always be your shoulder to cry on and your calm harbor, even in my darkest moments."

    },


    seethalakshmi: {

        name: "Seetha",

        code: "star",

        letter: `
         To my dear Seetha, 
         what started as a simple act of helping 
         during that college trip grew into the most beautiful, 
         comforting bond...You are the person I adore most, 
         the quiet space where I can be myself and feel truly seen.
          this place is always for you...
            ♡
        `,

        matter:
            "You matter to me as the ultimate listener who make me feel heard and safe no matter what.",

        friendship:
            "Our friendship is an unspoken sanctuary of trust and gentle understanding.",

        promise:
            "I promise to always be your steady support and a safe harbor whenever you face any pain."

    },


    princy: {

        name: "Princy",

        code: "lavender",

        letter: `
           To my dearest Princy, 
           you are my angel and the most beautiful soul I have ever known.
           Even on my darkest days, your presence brings light and makes me smile.
           Though we bicker over the smallest things and tease each other endlessly, 
           my love for you runs deep. Never doubt your worth or feel insecure;
           your heart is as pure and stunning as the moon I adore.
           You will always be precious to me,
           and no matter what happens,
           I will hold you close and care for you forever.

            ♡
        `,

        matter:
            "You matter to me as an absolute angel who brings light into my darkest days and reminds me how precious I am simply by being herself.",

        friendship:
            "Our friendship is a playful, beautiful bond where we can tease each other one second and hold each other up the next.",

        promise:
            "I promise to always hold you, care for you, and stay by your side through every storm, even if the whole world falls apart."

    },


    ani: {

        name: "Ani",

        code: "sunshine",

        letter: `
            Dear Ani,

            Some people somehow feel familiar,but still lives at a distance you are one of that,
            to me the way we share things always felt in a way of twins always presious
            the days we spent together will alwys be my most lovable memory...even if the whole 
            world stood against you i will alwys be your side...

            You have your own place here.

            ♡
        `,

        matter:
            "You are more important to this little story than you know.",

        friendship:
            "Every friendship has its own kind of chaos, and ours has its own.",

        promise:
            "Keep being exactly the person who made this friendship special."

    },


    ishu: {

        name: "Ishu",

        code: "dream",

        letter: `
            Dear Ishu,

            Sometimes people enter our lives unexpectedly
            and slowly become someone we are grateful for...
            and you entered my life like it was so easy and..
            you made my see the world diffrently... you totally chnged everything..
            you restored my love, my hope almost my everything you have a total postivity...
            you will alwys be my RM i wish to alwys be you kook...
                                          
            ♡
        `,

        matter:
            "Your kindness has a way of making people feel less alone.",

        friendship:
            "Some friendships become comforting little corners of life.",

        promise:
            "I hope this friendship always has room for more smiles."

    },


    kavi: {

        name: "Kavi",

        code: "cloud",

        letter: `
            Dear Kavi,

            You never know not even i too don't know why and how i feel comfortable with you,
            but i feel too comfortable with you that i told you about my love life gave my number so easily,
            i was never so easy for any one even to my love it took me 4 months to give my number but you are something special,
            u are never a bburden you can achive as much as you can just be easy on yourself...
            you will always be loved by me...forever we are young...

            ♡
        `,

        matter:
            "You are enough just being you nothing is worth more than you love",

        friendship:
            "Our friendship is one more little chapter in this beautiful chaos.",

        promise:
            "May there always be more conversations and more memories."

    },


    anushma: {

        name: "Anu",

        code: "rose",

        letter: `
            To my angel Anishma, 
            
            you came into my life like a blessing, 
            
            transitioning from a shared love of videos to a real-life bond 
            that saved me when I felt entirely alone. 
            Your promise to hold and protect me when others leave is my...greatest comfort,
            and your care makes me want to cherish you forever.

            ♡
        `,

        matter:
            "You matter to me because you were my anchor and safe harbor during my loneliest days.",

        friendship:
            "Our friendship is a beautiful sanctuary of absolute comfort, trust, and unspoken understanding.",

        promise:
            "I promise to always be your walking diary and hold you close whenever you need warmth and care."

    },


    shalini: {

        name: "Shalini",

        code: "starlight",

        letter: `
         To my dear love,
         i have hurted you a lot of time i know how much i was angry with you but still...my love always wins over.
         
         love is never been my thing until i met you you were alwys my godess, still you are...
         
         all those kiss and hugs were my love, and when i kissed you i really loved everything..
         
         i all the world around this universe i would come in your arms,
         
         "if loving means death let me die in your arms for all my life, if loving you is burning in the fire of hell
         let me turn into ashes in you fire...i will alwys love you more than anything and everything...🫠❤️😘" 

            ♡
        `,

        matter:
            "You are not something i can have that doesn't mean i can't love.",

        friendship:
            "every love starts with a friendship but we hide it in the name of freindship",

        promise:
            "Even after this anger i will run to you cuz my love for you is more than anything that even my anger feels to small."

    }

};


/* =====================================================
   02 — VARIABLES
===================================================== */

let currentFriend = null;

let currentFriendKey = null;

let score = 0;

let openedCards = 0;

let gameInterval = null;


/* =====================================================
   03 — ELEMENTS
===================================================== */

const music =
    document.getElementById("bgMusic");

const nameInput =
    document.getElementById("nameInput");

const codeInput =
    document.getElementById("codeInput");

const errorMessage =
    document.getElementById("errorMessage");


/* =====================================================
   04 — ENTER BUTTON
===================================================== */

document
    .getElementById("enterButton")
    .addEventListener("click", enterHeart);


/* Allow ENTER key */

nameInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        enterHeart();

    }

});


codeInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        enterHeart();

    }

});


/* =====================================================
   05 — ENTER HEART
===================================================== */

function enterHeart() {

    const name =
        nameInput.value
            .trim()
            .toLowerCase();

    const code =
        codeInput.value
            .trim()
            .toLowerCase();


    errorMessage.textContent = "";


    /* ---------------------------------------------
       WRONG NAME
    --------------------------------------------- */

    if (!friends[name]) {

        showError(
            "Sorry... you entered the wrong place of heart. ♡"
        );

        shakeInput();

        return;

    }


    /* ---------------------------------------------
       WRONG PERSONAL CODE
    --------------------------------------------- */

    if (friends[name].code !== code) {

        showError(
            "The name is right... but the key isn't. 🔐"
        );

        shakeInput();

        return;

    }


    /* ---------------------------------------------
       CORRECT FRIEND
    --------------------------------------------- */

    currentFriendKey = name;

    currentFriend = friends[name];


    /* Start music after user interaction */

    music.volume = 0.35;

    music.play().catch(function() {

        console.log("Music could not autoplay.");

    });


    /* Put friend's name */

    document
        .getElementById("friendName")
        .textContent =
        currentFriend.name;


    /* Move to welcome */

    changeScreen(
        "entryScreen",
        "welcomeScreen"
    );

}


/* =====================================================
   06 — ERROR
===================================================== */

function showError(message) {

    errorMessage.textContent = message;

}


/* =====================================================
   07 — INPUT SHAKE
===================================================== */

function shakeInput() {

    nameInput.classList.remove("shake");

    codeInput.classList.remove("shake");


    setTimeout(function() {

        nameInput.classList.add("shake");

        codeInput.classList.add("shake");

    }, 10);

}


/* =====================================================
   08 — WELCOME → LETTER
===================================================== */

document
    .getElementById("openLetterButton")
    .addEventListener("click", function() {

        changeScreen(
            "welcomeScreen",
            "letterScreen"
        );

    });


/* =====================================================
   09 — OPEN ENVELOPE
===================================================== */

document
    .getElementById("envelope")
    .addEventListener("click", showLetter);


/* =====================================================
   10 — SHOW LETTER
===================================================== */

function showLetter() {

    const envelope =
        document.getElementById("envelope");

    const hint =
        document.getElementById("envelopeHint");

    const letter =
        document.getElementById("letter");


    /* Hide envelope */

    envelope.style.display = "none";

    hint.style.display = "none";


    /* Show letter */

    letter.classList.remove("hidden");

    letter.style.display = "block";


    /* Start typing */

    typeLetter(
        currentFriend.letter,
        document.getElementById("letterText")
    );

}


/* =====================================================
   11 — TYPEWRITER LETTER
===================================================== */

function typeLetter(text, element) {

    let index = 0;


    element.textContent = "";


    /* Hide button until typing finishes */

    const continueButton =
        document.getElementById("continueButton");

    continueButton.classList.add("hidden");


    const typing =
        setInterval(function() {

            element.textContent +=
                text.charAt(index);

            index++;


            if (index >= text.length) {

                clearInterval(typing);


                /* Show button */

                continueButton.classList.remove(
                    "hidden"
                );

            }

        }, 25);

}


/* =====================================================
   12 — LETTER → LITTLE THINGS
===================================================== */

document
    .getElementById("continueButton")
    .addEventListener("click", function() {

        setupLittleThings();

        changeScreen(
            "letterScreen",
            "littleThingsScreen"
        );

    });


/* =====================================================
   13 — LITTLE THINGS SETUP
===================================================== */

function setupLittleThings() {

    openedCards = 0;


    /* Reset cards */

    document
        .querySelectorAll(".little-card")
        .forEach(function(card) {

            card.classList.remove("open");

        });


    /* Add personalized messages */

    document
        .getElementById("matterMessage")
        .textContent =
        currentFriend.matter;


    document
        .getElementById("friendshipMessage")
        .textContent =
        currentFriend.friendship;


    document
        .getElementById("promiseMessage")
        .textContent =
        currentFriend.promise;


    /* Hide completion */

    document
        .getElementById("littleThingsComplete")
        .classList.add("hidden");

}


/* =====================================================
   14 — LITTLE THINGS CARDS
===================================================== */

document
    .querySelectorAll(".little-card")
    .forEach(function(card) {

        card.addEventListener("click", function() {

            /* Prevent clicking same card twice */

            if (card.classList.contains("open")) {

                return;

            }


            card.classList.add("open");

            openedCards++;


            /* All three opened */

            if (openedCards === 3) {

                setTimeout(function() {

                    document
                        .getElementById(
                            "littleThingsComplete"
                        )
                        .classList.remove("hidden");

                }, 700);

            }

        });

    });


/* =====================================================
   15 — LITTLE THINGS → GAME
===================================================== */

document
    .getElementById("gameButton")
    .addEventListener("click", function() {

        startGame();

        changeScreen(
            "littleThingsScreen",
            "gameScreen"
        );

    });


/* =====================================================
   16 — START GAME
===================================================== */

function startGame() {

    score = 0;


    document
        .getElementById("score")
        .textContent = score;


    document
        .getElementById("secretDoorButton")
        .classList.add("hidden");


    document
        .getElementById("gameArea")
        .innerHTML = "";


        

    /* Create hearts continuously */

    clearInterval(gameInterval);


    gameInterval =
        setInterval(createHeart, 700);

}


/* =====================================================
   17 — CREATE HEART
===================================================== */

function createHeart() {

    const gameArea =
        document.getElementById("gameArea");


    const heart =
        document.createElement("div");


    heart.classList.add("game-heart");


    /* 💗 Always filled pink heart */

    heart.textContent = "♥";


    /* Random horizontal position */

    heart.style.left =
        Math.random() * 90 + "%";


    /* Start from bottom */

    heart.style.bottom = "0px";


    /* Random size */

    heart.style.fontSize =
        (24 + Math.random() * 18) + "px";


    /* Random animation speed */

    heart.style.animationDuration =
        (2 + Math.random() * 1.5) + "s";


    /* Click */

    heart.addEventListener("click", function() {

        catchHeart(heart);

    });


    gameArea.appendChild(heart);


    /* Remove after animation */

    setTimeout(function() {

        if (heart.parentNode) {

            heart.remove();

        }

    },450000);

}


/* =====================================================
   18 — CATCH HEART
===================================================== */

function catchHeart(heart) {

    heart.remove();


    score++;


    document
        .getElementById("score")
        .textContent = score;


    /* WIN */

    if (score >= 10) {

        clearInterval(gameInterval);


        setTimeout(function() {

            document
                .getElementById(
                    "secretDoorButton"
                )
                .classList.remove("hidden");

        }, 500);

    }

}


/* =====================================================
   19 — GAME → SECRET DOOR
===================================================== */

document
    .getElementById("secretDoorButton")
    .addEventListener("click", function() {

        changeScreen(
            "gameScreen",
            "secretScreen"
        );

    });


/* =====================================================
   20 — FRIEND SECRET SCENES
===================================================== */

const secretScenes = {

    Varsha: {

        title: "If we were together...",

        text:
        "I imagine us sitting somewhere after college, " +
        "talking about everything that happened that day. " +
        "Maybe you'd tell me something that was bothering you, " +
        "and I'd remind you that you never have to question " +
        "your place in my life.",

        ending:
        "Just an ordinary evening... but one I'd never want to forget. ♡"

    },


    Seethalakshmi: {

        title: "Just one ordinary college day...",

        text:
        "I imagine us sitting together between classes, " +
        "talking about completely random things and laughing " +
        "at something that probably wouldn't even make sense " +
        "to anyone else.",

        ending:
        "Nothing extraordinary. Just a simple day with a friend. ♡"

    },


    Princy: {

        title: "A little moment with you...",

        text:
        "I imagine us walking around college after class, " +
        "talking, teasing each other and somehow turning " +
        "a completely normal day into something worth remembering.",

        ending:
        "Maybe the best memories are the ones we never planned. ♡"

    },


    Ani: {

        title: "If we had a whole day together...",

        text:
        "I imagine us sitting somewhere quiet and talking " +
        "for hours about random thoughts, silly things, " +
        "dreams and everything in between.",

        ending:
        "Some friendships just feel strangely familiar. ♡"

    },


    Ishu: {

        title: "If you were sitting beside me...",

        text:
        "I imagine one of those days when everything feels " +
        "a little too much, and you simply sit beside me. " +
        "No big explanation needed. Just your presence making " +
        "the whole day feel a little lighter.",

        ending:
        "Some people become comfort without even trying. ♡"

    },


    Kavi: {

        title: "One random day with you...",

        text:
        "I imagine us spending a whole day together, " +
        "laughing over random things, sharing stories " +
        "and making fun out of even the most boring moments.",

        ending:
        "An ordinary day made special because you were there. ♡"

    },


    Anu: { 

        title: "A memory we haven't made yet...",

        text:
        "just a day with you where you talk all yoiu want , " +
        "roming around in places and laughing our heart out " +
        "that probably wouldn't make sense to anyone else.",

        ending:
        "Maybe some imaginary memories deserve to become real ones someday. ♡"

    },


    Shalini: {

        title: "A day of us",

        text:
        " oru nala apartment soft painted wall oda soft cozy ahh oru greay sofa abd balcony fulla plants and anga oru unjal"+
        
        "neyum nanum antha unjal ukantu una en lap la ukara vachu back hug panitu clam ahh tea kudichitu just few words betweetn us" +
        
        "just us soft music potu pinadi soft evening la comfortable ahh"+
        "i wish to hold like that for life long all smiling all loveing "+
        "un cheecks la apo apo kiss panitu una apdiyea en embrace liyea vachu pathukanum",


        ending:
        "Just one little moment where everything feels happy again. ♡"

    }

};


/* =====================================================
   21 — OPEN SECRET DOOR
===================================================== */

document
    .getElementById("openSecretButton")
    .addEventListener("click", function() {

        const friend = secretScenes[currentFriend.name];

        if (!friend) {

            console.log(
                "No secret scene found for:",
                currentFriend.name
            );

            return;
        }


        document.getElementById("sceneTitle").innerText =
            friend.title;


        document.getElementById("sceneText").innerText =
            friend.text;


        document.getElementById("sceneEnding").innerText =
            friend.ending;


        changeScreen(
            "secretScreen",
            "sceneScreen"
        );

    });

/* =====================================================
   22 — SCENE → FINAL PAGE
===================================================== */

document
    .getElementById("continueFromScene")
    .addEventListener("click", function() {

        prepareFinalPage();

        changeScreen(
            "sceneScreen",
            "finalScreen"
        );

    });


/* =====================================================
   23 — FINAL PAGE
===================================================== */

function prepareFinalPage() {

    document
        .getElementById("finalFriendName")
        .textContent =
        currentFriend.name;

}


/* =====================================================
   24 — RESTART
===================================================== */

document
    .getElementById("restartButton")
    .addEventListener("click", function() {

        location.reload();

    });


/* =====================================================
   23 — SCREEN TRANSITION
===================================================== */

function changeScreen(oldScreen, newScreen) {

    const oldElement =
        document.getElementById(oldScreen);

    const newElement =
        document.getElementById(newScreen);


    oldElement.classList.remove("active");


    setTimeout(function() {

        newElement.classList.add("active");

    }, 500);

}


/* =====================================================
   24 — EXTRA KEYBOARD SUPPORT
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        /* ESC does nothing intentionally */

        if (event.key === "Escape") {

            return;

        }

    }
);