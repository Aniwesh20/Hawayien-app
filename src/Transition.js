// Replace this code with the actual logic to determine the weather condition
const isSunny = true; // Example: true for sunny, false for other conditions

// Function to change the background color based on weather condition
function changeBackgroundColor(isSunny) {
  const body = document.body;

  if (isSunny) {
    body.style.setProperty("--gradient-start", "#FFD700"); // Set gradient start color
    body.style.setProperty("--gradient-end", "#FFA500");   // Set gradient end color
  } else {
    body.style.setProperty("--gradient-start", "#333");    // Set gradient start color
    body.style.setProperty("--gradient-end", "#555");      // Set gradient end color
  }
}

// Call the function with the weather condition (true for sunny, false for other conditions)
changeBackgroundColor(isSunny);
