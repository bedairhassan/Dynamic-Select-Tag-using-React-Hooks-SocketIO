import React, { useEffect, useState } from 'react'
import View from './components/component1/View'

var socket = require('socket.io-client')('http://localhost:4000');

function App() {

  const disconnect = () => socket.emit(`disconnect`, { src: socket.id })
  useEffect(() => window.addEventListener('beforeunload', () => disconnect()), [])

  return (

    <React.Fragment>
      <View socket={socket}/>
    </React.Fragment>
  )
}

export default App
