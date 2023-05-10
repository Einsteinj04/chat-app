let socket = io()

let form = document.querySelector('.form')
let Chat_text = document.querySelector('.chat_text')
let input = document.querySelector('.text')
let button = document.querySelector('.btn')

form.addEventListener('submit', (e) => {
  // console.log('hi')
  e.preventDefault();
  // console.log(input.value)
  if (input.value) {
    socket.emit('chat-message', input.value)
    input.value = ''
  }
})
socket.on('chat-message', (message) => {
  Chat_text.innerHTML = `<div>${message}</div>`
})