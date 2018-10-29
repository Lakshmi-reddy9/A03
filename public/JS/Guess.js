
var nGuesses = 0
var myNumber = 0
myNumber = Math.random() * 100;
myNumber = Math.floor(myNumber);

function GuessNum(guessNumber) {
    var response
    var num = parseInt(guessNumber)
    if (isNaN(num)) {
        document.getElementById('gameResult').innerHTML = "<br>You have to Guess a Number !@#$%";    
        return false;    
    }
    else{
        document.getElementById("gameResult").innerHTML = "";
        document.getElementById("guess").value = num
        nGuesses++
        response = ""
        if (num < myNumber) response = response + "Higher!"
        if (num > myNumber) response = response + "Lower!"
        if (num == myNumber) {
            respone = "Correct!";
            let payerName = $("#playerName").val();
            document.getElementById('gameResult').innerHTML = "<br>Awsome " + payerName + " ! You Guessed it Right....";
        }
        document.getElementById("result").value = response
        document.getElementById("guesses").value = nGuesses
        document.getElementById("guess").focus()
        document.getElementById("guess").select()
        return true
    }
}

function GiveUp() {
    var response
    nGuesses = 0
    document.getElementById('gameResult').innerHTML = "<br>The number was " + myNumber + "...."
}

function Reset() {
    $("#guessForm")[0].reset();
    $("p:last").html("");
}

