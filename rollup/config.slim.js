import resolve from 'rollup-plugin-node-resolve';

const appName = 'dumbReloader'

export default {
  external: ['socket.io-client'],
  input: `${appName}.js`, 
  output: {
    file: `public/rollup/${appName}.slim.js`,
    format: 'iife',
    globals: {
      'socket.io-client': 'io'
    }
  },
  plugins: [
    resolve()
  ]
};