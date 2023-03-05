const counterElement = document.getElementById('counter');

function updateCounter() {
  fetch('/counter')  // replace '/counter' with the URL of your server-side script that returns the counter value
    .then(response => response.text())
    .then(data => {
      const counterValue = parseInt(data);  // convert the response data to an integer
      counterElement.innerText = `Display Value: ${counterValue}`;  // update the counter element with the new value
    });
}

// Call updateCounter() to initialize the counter value
updateCounter();

// Call updateCounter() every 5 seconds to update the counter value
setInterval(updateCounter, 5000);
