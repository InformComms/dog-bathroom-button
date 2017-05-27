require('dotenv').config()
const Gpio = require('onoff').Gpio
const twilio = require('twilio')
const debounce = require('debounce')

const {
  ACCOUNT_SID, 
  AUTH_TOKEN, 
  FROM_PHONE_NUMBER, 
  TO_PHONE_NUMBER,
} = process.env

const button = new Gpio(3, 'in', 'falling')

const phone = new twilio(ACCOUNT_SID, AUTH_TOKEN)

const sendMessage = debounce(() => {
  phone.messages.create({
    from: FROM_PHONE_NUMBER,
    to: TO_PHONE_NUMBER,
    body: 'I need to go to the bathroom!', 
  }) 
}, 10000, true)

button.watch((err) => {
  if (err) {
    throw err
  }
  sendMessage()
})

process.on('SIGINT', () => {
  button.unexport() 
})
