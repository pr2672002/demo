// DOM elements
const chatbotMessages = document.getElementById('chatbot-messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Event listener for sending message
sendBtn.addEventListener('click', sendMessage);

// Function to send user message
function sendMessage() {
  // Get user input
  const message = userInput.value.trim();

  // Add user message to chatbot
  if (message !== '') {
    addUserMessage(message);
    // Here you can add your logic to process user input and generate bot response
    // For now, let's just echo the user message as the bot response
    setTimeout(() => addBotMessage(message), 1000); // Simulate bot response after 1 second
    // Clear user input
    userInput.value = '';
  }
}

// Function to add user message to chatbot
function addUserMessage(message) {
  const userMessageElement = document.createElement('div');
  userMessageElement.className = 'user-message';
  userMessageElement.textContent = 'You: ' + message;
  chatbotMessages.appendChild(userMessageElement);
}

// Function to add bot message to chatbot
function addBotMessage(message) {
  const botMessageElement = document.createElement('div');
  botMessageElement.className = 'bot-message';
  botMessageElement.textContent = 'Bot: ' + message;
  chatbotMessages.appendChild(botMessageElement);
}


// JavaScript code for making AJAX requests
fetch('/api/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Handle the data received from the backend
        console.log(data);
    })
    .catch(error => {
        // Handle errors
        console.error('There was a problem with the fetch operation:', error);
    });
