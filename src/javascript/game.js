function handleSubmit() {
console.log("You've reached the function");
    let amountCorrect = 0;
    for(let i=0; i<3;i++) {
        var radios = document.getElementsByName('answer'+i);
        for(j=0;j<radios.length;j++) {
            var radio = radios[j];
            if(radio.value == "correct" && radio.checked) {
                amountCorrect++;
            }
        }
    }
    alert("Correct Responses: " + amountCorrect);
}

document.getElementById("submit").onclick=handleSubmit;
//
//const submitButton = document.getElementById("submit")
//submitButton.addEventListener('click', showResults);