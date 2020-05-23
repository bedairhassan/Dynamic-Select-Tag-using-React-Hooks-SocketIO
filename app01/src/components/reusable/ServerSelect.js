import React, { useEffect, useState } from 'react'
import Select from './Select'

function ServerSelect({onClick,helpersParent,socket}) {

    useEffect(()=>{
        const {eventName}=helpersParent
        socket.on(eventName,data=>dataSet(data))
    },[])

    const [data,dataSet]=useState([])

    return (
        <React.Fragment>
            <Select
            data={data}
            onClick={value=>onClick(value)}
            />
        </React.Fragment>
    )
}

export default ServerSelect
