const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = Number(document.getElementById("height").value);
  const weight = Number(document.getElementById("weight").value);
  const result = document.getElementById("results");
  const less = document.getElementById("less");
  const middle = document.getElementById("middle");
  const high = document.getElementById("high");
  let bmi = weight / (height / 100) ** 2;
  if (!height || !weight) {
    // console.log("plz enter the valid number");
    result.innerText = "plz enter the valid number";
  } else {
    result.innerText = `Your BMI is ${bmi.toFixed(2)}`;
  }
  if (bmi.toFixed(2) <= 18.5) {
    less.innerText = "Under Weight";
  }
  else if (bmi.toFixed(2) == 18.5 && bmi.toFixed(2)==24.9) {
    middle.innerText = "Normal range";
  }
  else  {
    high.innerText = "Greater than";
  }
  console.log(bmi);
});
