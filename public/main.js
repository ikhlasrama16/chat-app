const socket = io()

const totalClients = document.getElementById('clients-total')

socket.on('clients-total', (data) =>{
    totalClients.innerHTML = `Total clients: ${data}`
})