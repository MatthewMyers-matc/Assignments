var messages = [];

function Message(type, user, text) {
  this.type = type;
  this.user = user;
  this.text = text;
}

function addMessage(event) {
  var user, type, classname;
  var messageInput = document.getElementById('message-input');
  var messagesContainerEl = document.getElementById('message-container');

  //determin message type based on button clicked
  switch (event.target.id) {
    case 'send-button':
      user = 'Matt';
      type = 'out';
      className = 'out-message';
      break;
    case 'reply-button':
      user = 'Jane';
      type = 'in';
      className = 'in-message';
      break;
    default:
      user = 'admin';
      type = 'error';
      className = 'error-message';
  }

  if(messageInput.value != ''){
    //construct message and add to message collection

    var message = new Message(type, user, messageInput.value);
    messages.push(message);

    // create element.
    var messageText = document.createTextNode(message.text);
    var messageEl = document.createElement('div');
    messageEl.appendChild(messageText);
    messageEl.className = className;

    //add to DOM
    messagesContainerEl.appendChild(messageEl);

    //reset input
    messageInput.value = '';
  }
}

var init = function() {
  //wire event handlers
  document.getElementById('send-button').onclick = addMessage;
  document.getElementById('reply-button').onclick = addMessage;
}

init();
