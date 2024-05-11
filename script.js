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

const calculateCharacteristicImpedance = () => {
  // Get input values
  const E_ff = parseFloat(document.getElementById("E_ff").value);
  const H = parseFloat(document.getElementById("h").value);
  const W = parseFloat(document.getElementById("w").value);

  console.log(H, W, E_ff, "baal");
  // Check if any input value is NaN
  if (isNaN(E_ff) || isNaN(H) || isNaN(W)) {
    document.getElementById("characteristicImpedanceResult").innerText =
      "Invalid input";
    return;
  }

  let Zo;

  // Check if W/H >= 1
  if (W / H >= 1) {
    Zo =
      (120 * Math.PI) /
      (Math.sqrt(E_ff) * (W / H + 1.393 + (2 / 3) * Math.log(W / H + 1.444)));
  } else {
    Zo = (60 / Math.sqrt(E_ff)) * Math.log((8 * H) / W + (0.25 * W) / H);
  }

  // Display result
  document.getElementById("characteristicImpedanceResult").innerText = Zo;
};

// Add event listener to the button to trigger the calculation
document
  .getElementById("characteristicImpedanceButton")
  .addEventListener("click", calculateCharacteristicImpedance);
