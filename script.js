// Get the line element
var line = document.getElementById('line');

// Set the initial rotation angle and center point of the line
var rotationAngle = 0;
var centerX = line.offsetWidth / 2;
var centerY = line.offsetHeight / 2;

// Function to rotate the line
function rotateLine() {
  rotationAngle += 1; // Increase the rotation angle

  // Apply the rotation using CSS transform property
  line.style.transform = 'rotate(' + rotationAngle + 'deg)';

  // Request the next animation frame
  requestAnimationFrame(rotateLine);
}

// Start rotating the line
rotateLine();

