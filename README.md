# Dumb Reloader

This project is pretty much forked directly from Damien Arrachequesne's (@darrachequesne) [socket.io-client webpack example](https://github.com/socketio/socket.io/tree/2.0.3/examples/webpack-build)

Updated to use modern ES features. This uses Webpack 4 now.

Extended to also use rollup. 

# Objective

"I bundled the same dumb app with Webpack and Rollup...these are the differences"

All this app does is listen for an emitted socket.io event "fileChanged". If it receives the event, it reloads the page. (Not shown here: the backend which listens for the file changes and emits the "fileChanged" event)
