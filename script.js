// Get elements from the DOM
const lengthInput = document.getElementById('length');
const widthInput = document.getElementById('width');
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const calculateButton = document.getElementById('calculate');
const volumetricWeightResult = document.getElementById('volumetric-weight');
const chargeableWeightResult = document.getElementById('chargeable-weight');

// Add event listener to the calculate button
calculateButton.addEventListener('click', calculateChargeableWeight);

function calculateChargeableWeight() {
  // Get input values
  const length = parseFloat(lengthInput.value);
  const width = parseFloat(widthInput.value);
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  // Check if inputs are valid
  if (isNaN(length) || isNaN(width) || isNaN(height) || isNaN(weight)) {
    alert('Please enter valid numbers for all fields.');
    return;
  }

  // Calculate volumetric weight (L x W x H / 5000)
  const volumetricWeight = (length * width * height) / 5000;

  // Determine chargeable weight (the greater of actual weight or volumetric weight)
  const chargeableWeight = Math.max(weight, volumetricWeight);

  // Display results
  volumetricWeightResult.textContent = volumetricWeight.toFixed(2);
  chargeableWeightResult.textContent = chargeableWeight.toFixed(2);
}