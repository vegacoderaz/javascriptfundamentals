function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Function to change the background color
function changeBackgroundColor() {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
}

const myButton = document.getElementById('myButton');

myButton.addEventListener('click', function() {
  // Code to run when the button is clicked
  console.log('Button clicked');
  changeBackgroundColor();
});