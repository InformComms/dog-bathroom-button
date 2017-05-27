const Gpio = require('onoff').Gpio

const button = new Gpio(3, 'in', 'falling')
console.log(button) 

button.watch((err) => {
  if (err) {
    throw err
  }
  console.log('hit')
})

process.on('SIGINT', () => {
  button.unexport()
})
