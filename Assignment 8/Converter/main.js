let kiloInput = document.getElementById("kgsInput");
let feetInput = document.getElementById("feetInput");
let centiInput = document.getElementById("centiInput");
let CelsiusInput = document.getElementById("CelsiusInput");

let poundOutput = document.getElementById("lbsOutput");
let cmsOutput = document.getElementById("cmsOutput");
let inchOutput = document.getElementById("inchOutput");
let FahrenheitOutput = document.getElementById("FahrenheitOutput");

let btnWeight = document.getElementById("btnWeight");
let btnMeasure = document.getElementById("btnMeasure");
let btncenti = document.getElementById("btncenti");
let btnCelsius = document.getElementById("btnCelsius");

btnWeight.addEventListener("click", () => {
    let kgs = kiloInput.value;
    poundOutput.innerText = kgs * 2.20462;
});

btnMeasure.addEventListener("click", () => {
    let measure = feetInput.value;
    cmsOutput.innerText = measure * 30.48;
});

btnTemperature.addEventListener("click", () => {
    let cel = CelsiusInput.value;
    FahrenheitOutput.innerText = cel * (9/5) + 32;
});

btncenti.addEventListener("click", () => {
    let cm = centiInput.value;
    inchOutput.innerText = cm * 0.3937;
});