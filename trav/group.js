document.getElementById("send-button").addEventListener("click", sendMessage);

document.getElementById("message-input").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});

function sendMessage() {
  var messageInput = document.getElementById("message-input");
  var message = messageInput.value.trim();

  if (message !== "") {
    var chatBox = document.getElementById("chat-box");
    var messageElement = document.createElement("div");
    messageElement.textContent = message;
    messageElement.classList.add("message");
    chatBox.appendChild(messageElement);

    // Clear input field after sending message
    messageInput.value = "";

    // Scroll to bottom of chat box
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}
