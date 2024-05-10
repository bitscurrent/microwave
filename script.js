const calculateFrequency = (speed, wavelength) => {
  return speed / wavelength;
};

const calculateWavelength = (speed, frequency) => {
  return speed / frequency;
};

const handleCalculation = () => {
  const speed = parseFloat(document.getElementById("speed").value);
  const wavelength = parseFloat(document.getElementById("wavelength").value);
  const frequency = parseFloat(document.getElementById("frequency").value);

  let result = "";
  if (!isNaN(speed) && !isNaN(wavelength)) {
    const calculatedFrequency = calculateFrequency(speed, wavelength);
    result = `Calculated Frequency: ${calculatedFrequency.toFixed(2)} Hz`;
  } else if (!isNaN(speed) && !isNaN(frequency)) {
    const calculatedWavelength = calculateWavelength(speed, frequency);
    result = `Calculated Wavelength: ${calculatedWavelength.toFixed(2)} m`;
  } else {
    result =
      "Please provide valid input for speed along with wavelength or frequency.";
  }

  document.getElementById("result").innerText = result;
};

document
  .getElementById("calculate")
  .addEventListener("click", handleCalculation);

// const calculateEffectiveDielectricConstant = (Er, H, W) => {
//   let Eff;

//   if (W / H >= 1) {
//     Eff = (Er + 1) / 2 + ((Er - 1) / 2) * Math.pow(1 + 12 * (H / W), -0.5);
//   } else {
//     Eff =
//       (Er + 1) / 2 +
//       ((Er - 1) / 2) *
//         (Math.pow(1 + 12 * (H / W), -0.5) + 0.04 * Math.pow(1 - W / H, 2));
//   }

//   document.getElementById("dielectricResult").innerText = Eff;
// };

// // Example usage:
// // const Er = 5; // Relative permittivity
// // const H = 5; // Height
// // const W = 2; // Width

// const effectiveDielectricConstant = calculateEffectiveDielectricConstant(
//   Er,
//   H,
//   W
// );

// document
//   .getElementById("dielectricCalculateButton")
//   .addEventListener("click", calculateEffectiveDielectricConstant);
// console.log("Effective Dielectric Constant:", effectiveDielectricConstant);

const calculateEffectiveDielectricConstant = () => {
  // Get the values of the input fields
  const H = parseFloat(document.getElementById("H").value);
  const W = parseFloat(document.getElementById("W").value);
  const Er = parseFloat(document.getElementById("Er").value);

  let Eff;

  if (W / H >= 1) {
    Eff = (Er + 1) / 2 + ((Er - 1) / 2) * Math.pow(1 + 12 * (H / W), -0.5);
  } else {
    Eff =
      (Er + 1) / 2 +
      ((Er - 1) / 2) *
        (Math.pow(1 + 12 * (H / W), -0.5) + 0.04 * Math.pow(1 - W / H, 2));
  }

  document.getElementById("dielectricResult").innerText = Eff;
};

// Add event listener to the button to trigger the calculation
document
  .getElementById("dielectricCalculateButton")
  .addEventListener("click", calculateEffectiveDielectricConstant);
