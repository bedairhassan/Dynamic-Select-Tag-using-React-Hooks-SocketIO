import React from 'react'
import Button from './Button'

{/* <ServerButton 
      socket={socket}
      helpers={{buttonName:`Click Me`}}
      helpersParent={{eventName:`testEvent`,data:`helloWorld`}}
      /> */}

const ServerButton = ({helpers,socket,helpersParent,onClick})=>{

    const {buttonName} = helpers

    const Action = ()=>{

        const {eventName,data}=helpersParent
        
        socket.emit(eventName,data)
        
        onClick()
    }

    return (
        <Button onClick={(value)=>Action(value)}
                buttonName={buttonName}
        />
    )
}

export default ServerButton
