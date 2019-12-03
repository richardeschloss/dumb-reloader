import io from 'socket.io-client';

console.log('io', io)
const socket = io();
function registerIO() {
  console.log('connected!')
  const evts = {
    fileChanged(msg) {
      document.location.reload()
    }
  }
  
  Object.entries(evts).forEach(([evt, cb]) => {
    socket.on(evt, cb)
  })
}

socket.on('connect', registerIO)