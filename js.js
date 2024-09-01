document.getElementById("yesButton").addEventListener("click", showAlert);

function showAlert() {
    alert("I love you, Gleiza Anne Tomas Murillo");
}

var yesButton = document.getElementById("yesButton");
var no = document.getElementById("no");
var valentineImage = document.getElementById("valentineImage");

var noTexts = ["weh?", "sure ka?", "ge ok lang", "di mo ako mahal?", "ahahahaha sakit", "ge dyan kana"];
var imageSources = ["file:///C:/Users/nepacina/Downloads/455085130_1545069256157059_903213063027932807_n.jpg", "file:///C:/Users/nepacina/Downloads/456083534_305789235929731_8738354535614954550_n.jpg", "file:///C:/Users/nepacina/Downloads/455085130_1545069256157059_903213063027932807_n.jpg", "file:///C:/Users/nepacina/Downloads/455085130_1545069256157059_903213063027932807_n.jpg"];

no.addEventListener("click", change);

function change() {
    var randomIndex = Math.floor(Math.random() * noTexts.length);
    var randomText = noTexts[randomIndex];
    no.innerText = randomText;

    var i = Math.floor(Math.random() * 1000) + 1;
    var j = Math.floor(Math.random() * 700) + 1;
    no.style.left = i + "px";
    no.style.top = j + "px";

    var currentWidth = yesButton.offsetWidth;
    var currentHeight = yesButton.offsetHeight
    yesButton.style.width = currentWidth + 30 + "px";
    yesButton.style.height = currentHeight + 10 + "px";

    var randomImageIndex = Math.floor(Math.random() * imageSources.length);
    valentineImage.src = imageSources[randomImageIndex];
}
