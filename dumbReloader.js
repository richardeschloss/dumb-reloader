import io from 'socket.io-client';

const socket = io();
function registerIO() {
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