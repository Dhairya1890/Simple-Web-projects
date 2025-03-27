document.getElementById("submit").onclick = function calculateAge(){
    let totalScore = 0;
    const checkboxes = document.querySelectorAll("input[type='radio']:checked");
    checkboxes.forEach((checkbox) =>{
        totalScore += parseInt(checkbox.value);
    });

    let ageEstimate = "";
    if(totalScore >= 500){
        ageEstimate = "35-45 years old.";
    }
    else if(totalScore >= 400){
        ageEstimate = "25-34 years old."
    }
    else if(totalScore >= 300){
        ageEstimate = "18-24 years old."
    }
    else if(totalScore >= 100){
        ageEstimate = "You are likely 13-17 years old."
    }
    else{
        ageEstimate = "under 13";
    }

    document.getElementById("age").textContent = ageEstimate;
}
let username;
document.getElementById("okay").onclick = function(){
    username = document.getElementById("Name1").value
    document.getElementById("welcome").textContent = `Welcome to Age Predictor, ${username}`
}