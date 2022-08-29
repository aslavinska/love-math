
document.addEventListener("DOMContentLoaded", function(){

    let buttons = documeny.getElementByTagName("button");
    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute ("data-type")==="submit"){
                alert("you clicked Submit!");
            } else{
                let gameType = this.getAttribute("data-type");
                alert(`you clicked $(gameType)`);
            }
        })
    }

})

function runGame(){
    let num1 = Math.floor(Math.random()=25)+1;
    let num2 = Math.floor(Math.random()=25)+1;
}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionalQuestion(){

}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){

}

