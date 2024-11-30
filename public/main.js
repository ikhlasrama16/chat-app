const socket = io()

const totalClients = document.getElementById('clients-total')

const messageContainer = document.getElementById('message-container');
const nameInput = document.getElementById('name-input');
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');

messageForm.addEventListener('submit', (e) => {
    e.preventDefault()
    sendMessage()
})

socket.on('clients-total', (data) =>{
    totalClients.innerHTML = `Total clients: ${data}`
})

function sendMessage(){
    console.log(messageInput.value)
    const data = {
        name : nameInput.value,
        message : messageInput.value,
        date: new Date()
    }
    socket.emit('message', data)

    addMessagetoUi(true, data)
    messageInput.value = ''
}

socket.on('chat-message', (data) =>{
    // console.log(data)
    addMessagetoUi(false, data)
})

function addMessagetoUi(isOwnMessage, data) {
    const element = `
        <li class="${isOwnMessage ? "" : ""}">
            <p class="message">
                ${data.message}
                <span>${data.name} ⚪ ${moment(data.dateTime).fromNow()}</span>
            </p>
        </li>
    ` 

    messageContainer.innerHTML += element
}