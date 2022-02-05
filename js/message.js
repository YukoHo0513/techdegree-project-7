const user = document.getElementById('search-user');
const message = document.getElementById('message-user');
const button = document.getElementById('send-button');
const inputContainer = document.getElementById('input-container');

button.addEventListener('click', (e)=> {
    e.preventDefault();
    if (user.value === "" && message.value === "") {
        inputContainer.innerHTML = '<div id="message-alert"><p><strong>Alert</strong>: Both fields must be filled out</p></div>'
        searchUl.style.display = "none";
    } else if (user.value === "") {
        inputContainer.innerHTML = '<div id="message-alert"><p><strong>Alert</strong>: User field must be filled out</p></div>'
        searchUl.style.display = "none";
    } else if (message.value === "") {
        inputContainer.innerHTML = '<div id="message-alert"><p><strong>Alert</strong>: Message field must be filled out</p></div>'
        searchUl.style.display = "none";
    } else {
        inputContainer.innerHTML = '<div id="message-alert" class="sent-alert"><p><strong>Alert</strong>: Message was sent</p></div>';
        user.value = "";
        message.value = "";
        searchUl.style.display = "none";
    }

});