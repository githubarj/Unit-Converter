const convertBtn = document.getElementById("convert-btn");
const numInput = document.getElementById("num-input");
const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");
const icon = document.getElementById("icon");

//dark them and light theme
icon.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "sun.png";
  } else {
    icon.src = "moon.png";
  }
});

convertBtn.addEventListener("click", function () {
  const number = numInput.value;
  const fAns = (number * 3.281).toFixed(2);
  const mAns = (number / 3.281).toFixed(2);
  length.textContent = `${number} meters = ${fAns} feet | ${number} feet = ${mAns} meters`;

  const gAns = (number / 3.785).toFixed(2);
  const lAns = (number * 3.785).toFixed(2);
  volume.textContent = `${number} liters = ${gAns} gallons | ${number} gallons = ${lAns} liters`;

  const pAns = (number * 2.204).toFixed(2);
  const kAns = (number / 2.204).toFixed(2);
  mass.textContent = `${number} kilos = ${pAns} pounds | ${number} pounds = ${kAns} kilos`;
});
