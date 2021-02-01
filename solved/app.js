var score = 0;

var wrong_sound = new Audio("sounds/wrong.mp3");

var trumpStatements_p = document.getElementById("trump-statement-p");
var scoreBoard_p = document.getElementById("score-board-p");

var yes_btn = document.getElementById("yes-btn");
var no_btn = document.getElementById("no-btn");

// Trump Statement object
class trumpStatement {
    constructor(statement, saidOrNot) {
        this.statement = statement;
        this.saidOrNot = saidOrNot;
    }
}

// Create the Trump Statement Objects
var rocketMan = new trumpStatement("The US has great strength and patience, but if it is forced to defend itself and its allies, we will have no choice but to totally destroy North Korea.  ROCKET MAN is on a suicide mission for himself and for his regime.", true);
var wall = new trumpStatement("I would build a great wall, and nobody builds walls better than me, believe me, and I’ll build them very inexpensively, I will build a great, great wall on our southern border. And I will have Mexico pay for that wall.", true);
var whiteSupremecy = new trumpStatement("I stand back, and stand by. (while referencing white supremacists)", true);
var greatest = new trumpStatement("I’m the greatest President ever with the <em>possible</em> exception of Lincoln.", true);
var chinaLunch = new trumpStatement("China ate your lunch, Joe.", true);
var obamasDogImmigrant = new trumpStatement("Yeah, Obama had a dog. You're right. Both parties should come together to finally create a safe and lawful system of immigration.", true);

var kenyanObama = new trumpStatement("Obama was born in Kenya! Again, immigrants taking our jobs!", false);
var openAmerica = new trumpStatement("Make America Open Up Again. (in reference to Covid-19 lockdowns)", false);
var nukeKorea = new trumpStatement("If North Korea doesn’t stop their nuclear tests, for America’s security, I will have no choice but to nuke them.", false);
var trade = new trumpStatement("President Xi and I had major disagreements over trade. We are working on a trade deal and I will make sure that the deal puts AMERICA FIRST.", false);

// Store all statements in a variable
var statements = [rocketMan, wall, whiteSupremecy, greatest, chinaLunch, obamasDogImmigrant, kenyanObama, openAmerica, nukeKorea, trade];

function right(statementInd) {
    statements.splice(statementInd, 1);
    statementIndex = Math.floor(Math.random() * statements.length);
    trumpStatements_p.innerHTML = statements[statementIndex].statement;
    score++;
    scoreBoard_p.innerHTML = `You have got ${score}/10 correct`;

    // animation
    document.getElementsByTagName("body")[0].classList.add("right");
    setTimeout(function() {
        document.getElementsByTagName("body")[0].classList.remove("right");
    }, 400);
}

function wrong(statementInd) {
    statements.splice(statementInd, 1);
    statementIndex = Math.floor(Math.random() * statements.length);
    trumpStatements_p.innerHTML = statements[statementIndex].statement;

    // animation and sound
    document.getElementsByTagName("body")[0].classList.add("wrong");
    setTimeout(function() {
        document.getElementsByTagName("body")[0].classList.remove("wrong");
    }, 400);
    wrong_sound.play();
}

var statementIndex = Math.floor(Math.random() * statements.length);
trumpStatements_p.innerHTML = statements[statementIndex].statement;

yes_btn.addEventListener("click", function() {
    if(statements.length > 0) {
        if (statements[statementIndex].saidOrNot === true) {
            right(statementIndex);
        } else {
            wrong(statementIndex);
        }
    }

    else if(statements.length === 0) {
        alert(`You got ${score}/10 correct. You have completed the game. No more statements are left. Restarting game...`);
        location.reload();
    }
});

no_btn.addEventListener("click", function() {
    if(statements.length > 0) {
        if (statements[statementIndex].saidOrNot === false) {
            right(statementIndex);
        } else {
            wrong(statementIndex);
        }
    }

    else if(statements.length === 0) {
        alert(`You got ${score}/10 correct. You have completed the game. No more statements are left. Restarting game...`);
        location.reload();
    }
});