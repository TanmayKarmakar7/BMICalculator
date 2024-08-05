function calculateBMI(){
    const height = document.querySelector("#height").value;
    const weight = document.querySelector("#weight").value;

    const heightInMtr = height * 0.01;

    const bmiResult = weight / (heightInMtr * heightInMtr);
    
    document.querySelector("#bmi-result").innerHTML = bmiResult.toFixed(2);

    const results = document.querySelector(".results");
    
    if(height == "" || weight == "" || height == 0 || weight == 0 || bmiResult < 0){
        results.style.display = "none";
    } else {
        results.style.display = "flex";
    }

    const state = document.querySelector("#state");

    if(bmiResult < 18.5){
        state.innerHTML = "Underweight!";
        state.style.color = "dodgerblue";
    } 
    else if(bmiResult >= 18.5 && bmiResult < 25){
        state.innerHTML = "Healthy!";
        state.style.color = "green";
    } 
    else{
        state.innerHTML = "Overweight!";
        state.style.color = "red";
    }

}

const calculateBtn = document.querySelector("#calculate-btn");
const resetBtn = document.querySelector("#reset-btn");

calculateBtn.addEventListener("click", calculateBMI);

resetBtn.addEventListener("click", () => {
    location.reload();
});