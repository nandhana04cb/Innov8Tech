<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>FlashKey</title>
    <link rel="stylesheet" href="style.css" />
</head>

<body>
    <h1 class="page-title">FlashKeys</h1>   
    <nav class="navbar">
        <ul>
            <li><a href="#" id="show-tips">Tips</a></li>
            <li><a href="#"id="show-about">About</a></li>
            <li><a href="#" id="show-contact">Contact Us</a></li>
        </ul>
    </nav>
    <!-- Inside the body tag -->
<div id="tips-popup" class="tips-popup">
    <div class="tips-content">
        <span id="close-tips" class="close">&times;</span>
        <h2>Tips for Typing</h2>
        <ul id="tips-list">
            <li>Practice regularly to improve your typing speed.</li>
            <li>Maintain proper posture while typing to prevent strain.</li>
            <li>Take breaks to rest your hands and eyes during long typing sessions.</li>
            <!-- Add more tips as needed -->
        </ul>
    </div>
</div>
<!-- Inside the body tag, after the tips popup -->
<div id="about-popup" class="about-popup">
    <div class="about-content">
        <span id="close-about" class="close">&times;</span>
        <h2>About FlashKeys</h2>
        <p>
            This project, FlashKeys, is a typing speed checking website designed to help users improve their typing skills.
            It provides users with a random paragraph to type within a certain time limit, calculates their typing speed,
            and offers tips to enhance their performance.
        </p>
        <!-- Add more information about the project as needed -->
    </div>
</div>
<!--<div id="contact-popup" class="popup">
    <div class="popup-content">
        <span id="close-contact" class="close">&times;</span>
        <h2>Contact Us</h2>
        <p>If you have any questions or inquiries, feel free to contact us at <a href="mailto:22b781@gmail.com">Kanishka</a>.</p>
         Add more content as needed 
    </div>
</div>-->
<div id="contact-popup" class="popup">
    <div class="popup-content">
        <span class="close">&times;</span>
        <h3>Contact Us</h3>
        <p>Email: example@example.com</p>
        <p>Phone: +123456789</p>
        <!-- Add more contact information as needed -->
    </div>
</div> 
    <div class="container">
        
        <input type="text" class="input-field">
        <div class="content-box">
            <div class="text-of-typing">
                <p></p>
            </div>
            <div class="content">
                <ul class="result">
                    <li class="time">
                        <p>Time</p>
                        <span>60s</span>
                    </li>
                    <li class="errors">
                        <p>Errors</p>
                        <span>0</span>
                    </li>
                    <li class="wpm">
                        <p>WPM</p>
                        <span>0</span>
                    </li>
                    <li class="cpm">
                        <p>CPM</p>
                        <span>0</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="feedback-container">
            <div class="feedback"></div>
        </div>
        <button>Regenerate</button>
    </div>
    <!--<div class="feedback"></div>-->
    <script src="paragraph1.js"></script>
    <script src="apps.js"></script>
</body>

</html>
/*project name : Flash key (Typing speed checking website ) */
*{
    margin : 0;
    padding : 0;
    box-sizing : border-box;
    font-family: Arial, Helvetica, sans-serif;
}
body{
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #1a1313;
}
h1{
    text-align: center;
    margin-top: 20px;
    position: fixed;
    top: 0;
    left: 40px;
    width: auto;
    color: #ffffff;
    font-family: 'Courier New', Courier, monospace;
    padding: 10px 0;
    z-index: 1000;
    font-size: 60px;
}
.navbar{
    position: fixed;
    top: 0;
    right: 0;
    text-align: right;
    text-decoration: none;
    margin-top: 45px;
    margin-right: 20px;
    
}
.tips-popup {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    z-index: 1000; /* Ensure it's above other elements */
}

/* Show tips popup when active */
.tips-popup.show {
    display: block;
}

/* Styling for close button */
.close {
    position: absolute;
    top: 5px;
    right: 10px;
    cursor: pointer;
    font-size: 20px;
    color: #666;
}

.close:hover {
    color: #000;
}
/* Ensure about popup is hidden by default */
.about-popup {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    z-index: 1000; /* Ensure it's above other elements */
}

/* Show about popup when active */
.about-popup.show {
    display: block;
}
.popup {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    z-index: 1000;
}

.popup-content {
    text-align: center;
}

.close {
    position: absolute;
    top: 5px;
    right: 10px;
    cursor: pointer;
    font-size: 20px;
    color: #666;
}

.close:hover {
    color: #000;
}

h3 {
    margin-bottom: 10px;
}

p {
    margin-bottom: 10px;
}

a {
    color: #007bff; /* Link color */
}
.navbar ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    font-size: 20px;
}
.navbar li{
    display: inline;
    margin-left: 15px;
}
.navbar a{
    text-decoration: none;
    color: white;
    font-weight: bold;
}

main {
    min-height: 100vh;
}
.container {
    background: linear-gradient(160deg, rgb(199, 113, 87), rgb(0,0,0));
    color: #fff;
    width: 800px;
    border-radius: 10px;
    padding: 30px;
    position: relative;
    text-shadow: 0 0 2px rgba(0,0,0,0.5);
    box-shadow: 0 0 10px rgb(0,0,0, 1);
}
.container .input-field{
    z-index: -999;
    opacity : 0;
    position : absolute;
}
.content-box .text-of-typing{
    max-height: 255pt;
    max-width: 600pt;
    overflow-y: auto;
}
.content-box .text-of-typing ::-webkit-scrollbar {
    width : 0;
}
.content-box .text-of-typing p{
    text-align : justify;
    font-size : 23px;
    letter-spacing : 1px;
    word-break : break-all;
}
.content-box{
    display : flex; 
    align-items : center;
    justify-content: space-between;
}
.content-box .content{
    display : flex;
    align-items: center;
    flex-direction : column;
    width : 17%;
    text-align: center;
    line-height : 32px;

}
.content{
    margin-left: 50px;
    width: 1500px;
}
.content .result {
    padding : 19px;
    border-radius : 10px;
    background : linear-gradient(160deg, rgb(199, 113, 87), rgb(82, 33, 33));
    display : block; 
    text-shadow : 0 0 2px rgba(0, 0, 0, 0, 5);
    box-shadow : 0 0 10px rgb(0, 0, 0, 0, 5);

    
}
.content .result li{
    border-bottom: 1px solid #ccc;
    list-style  : none;

}
.content .result li :last-child {
    border-bottom : none;

}
.result li.time,
.result li.errors,
.result li.wpm, 
.result li.cpm {
    font-weight : 600;
} 
.container button{
    width : 30%;
    position : center; 
    height : 25%;
    border : none;
    margin-left: 180px;
    background-color : #000;
    color : #fff;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    background : linear-gradient(160deg, rgb(199, 113, 87), rgb(82, 33, 33));

}
.container button:hover {
    background : rgb(82, 33, 33);

}
.text-of-typing p span.correct {
    color : rgb(15,235,15);
}
.text-of-typing p span.incorrect {
    color : rgb(236, 25, 25);
}
.text-of-typing p span.active{
    color : #979494;
}
.text-of-typing p span.active::before{
    content: "";
    left: 0;
    bottom : 0;
    height : 3pt;
    width: 100%;
    background: #9af902;
    animation: blink 1s ease-in-out infinte;
    opacity: 0;
}
/* Add these styles to your existing CSS file */
.feedback-container {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    width: 100%;
    margin-bottom: 50px;
}

.feedback {
    margin-top: 10px;
    padding: 10px;
    text-align: bottom;
    font-size: 18px;
    color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

@keyframes blink{
    50%{
        opacity : 1;

    }
}
.text-of-typing p span{
    position: relative;
}
const text = document.querySelector('.text-of-typing p');
const inputField = document.querySelector('.container .input-field');
const errorDisplay = document.querySelector('.errors span');
const timeDisplay = document.querySelector('.time span');
const wpmDisplay = document.querySelector('.wpm span');
const cpmDisplay = document.querySelector('.cpm span');
const button = document.querySelector('button');

let charIndex = 0; // Initialize the character index
let errorCount = 0; // Initialize the error count
let timer;
let maxTime = 60; // Initialize the maximum time
let timeLeft = maxTime; // Initialize the time left
let isTyping = 0;

function ParaSelection() {
    let randomIndex = Math.floor(Math.random() * paragraphs.length);
   
    text.innerHTML = "";

    paragraphs[randomIndex].split("").forEach((span) => {
        let spanTag = <span>${span}</span>;
        text.innerHTML += spanTag;
    });
    text.querySelectorAll('span')[0].classList.add('active');

    document.addEventListener('keydown', () => inputField.focus());
    text.addEventListener('click', () => inputField.focus());
}

ParaSelection();

function typing() {
    const characters = text.querySelectorAll('span');
   
    let typedCharacter = inputField.value.split("")[charIndex];

    if (charIndex < characters.length - 1 && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(timerFunction, 1000);
            isTyping = true;  
        }
   
        if (typedCharacter == null) { // If user typed backspace
            charIndex--;
   
            if (characters[charIndex].classList.contains('incorrect')) {
                errorCount--;
            }
   
            characters[charIndex].classList.remove('correct', 'incorrect');
        } else {
            if (characters[charIndex].innerText === typedCharacter) {
                characters[charIndex].classList.add('correct');
            } else {
                errorCount++;
                characters[charIndex].classList.add('incorrect');
            }
            charIndex++;
        }
   
        characters.forEach(span => span.classList.remove('active'));
        characters[charIndex].classList.add('active');
   
        errorDisplay.innerText = errorCount;
   
        cpmDisplay.innerText = charIndex - errorCount; // CPM will not count errors
   
        let wpm = Math.round((((charIndex - errorCount) / 5) / (maxTime - timeLeft)) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
        wpmDisplay.innerText = wpm;
    } else {
        inputField.value = "";
        clearInterval(timer);
    }
}

inputField.addEventListener('input', typing);

function timerFunction() {
    if (timeLeft > 0) {
        timeLeft--;
        timeDisplay.innerText = timeLeft;
    } else {
        clearInterval(timer);
    }
}

function reset() {
    ParaSelection();
    inputField.value = "";
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = 0;
    errorCount = 0;
    isTyping = 0;
    timeDisplay.innerText = timeLeft;
    errorDisplay.innerText = errorCount;
    wpmDisplay.innerText = 0;
    cpmDisplay.innerText = 0;
}

button.addEventListener('click', reset);

function provideFeedback() {
    let wpm = parseInt(wpmDisplay.innerText); // Parse WPM value from string to integer
    if (timeLeft<=0) {
    if (wpm < 30) {
        return "It's okay try harder :)";
    } else if (wpm >= 30 && wpm < 60) {
        return "Yeah!!! You are improving";
    } else if (wpm >= 60 && wpm < 90) {
        return "You are doing great....Keep going";
    } else if (wpm >= 90) {
        return "You've done it...Good job!";
    }
}
  return "LOADING...";
}

function updateFeedback() {
    const feedback = provideFeedback();
    // Update the feedback element with the feedback message
    document.querySelector('.feedback').innerText = feedback;
}

function updatePerformance() {
    updateFeedback();
}

// Call updatePerformance function whenever typing performance changes
inputField.addEventListener('input', updatePerformance);

const showTipsButton = document.getElementById('show-tips');
const tipsPopup = document.getElementById('tips-popup');
const closeTipsButton = document.getElementById('close-tips');

showTipsButton.addEventListener('click', function() {
    tipsPopup.classList.toggle('show');
});

closeTipsButton.addEventListener('click', function() {
    tipsPopup.classList.remove('show');
});
const aboutButton = document.getElementById('show-about');
//Popup for About
const aboutPopup = document.getElementById('about-popup');
const closeAboutButton = document.getElementById('close-about');

aboutButton.addEventListener('click', function() {
    aboutPopup.classList.toggle('show');
});

closeAboutButton.addEventListener('click', function() {
    aboutPopup.classList.remove('show');
});
//Popup for Contact Us
const showContactButton = document.getElementById('contact-us');
const contactPopup = document.getElementById('contact-popup');
const closeContactButton = document.querySelector('.popup-content .close');

showContactButton.addEventListener('click', function() {
    contactPopup.classList.toggle('show');
});

closeContactButton.addEventListener('click', function() {
    contactPopup.classList.remove('show');
});
