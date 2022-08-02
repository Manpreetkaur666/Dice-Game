function ImageChange() {     
document.getElementById("startAgnBtn").disabled = false;     
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
let image1 = "dice" + randomNumber1;
let image2 = "dice" + randomNumber2;
document.getElementById("dice1").src = "images/"+image1+".png";
document.getElementById("dice2").src = "images/"+image2+".png";
if(image1==image2){
    document.getElementById("heading").innerHTML = "You Won! Start Again.";
    document.getElementById("playbtn").disabled = true;
    
}
}

function StartAgain() {
    document.getElementById("startAgnBtn").disabled = true;
    document.getElementById("playbtn").disabled = false; 
    document.getElementById("heading").innerHTML = "Dice Game";
    ImageChange();

}


