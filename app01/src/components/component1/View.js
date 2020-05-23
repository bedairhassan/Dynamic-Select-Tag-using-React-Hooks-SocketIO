import React, { PureComponent, useState, useEffect } from 'react'

import ServerButton from '../reusable/ServerButton'


import Select from '../reusable/Select'

const View = ({ socket }) => {

    const [selected, selectedSet] = useState(`-`)
    const [data, dataSet] = useState([])

    useEffect(() => socket.on(`RSD`, data => dataSet(data)), [])

    const Clicked = () => dataSet([...Reduce({data, selected})])

    const Reduce = ({ data, selected }) => data.filter(item => item !== selected)

    return (
        <React.Fragment>

            <Select
                data={data}
                onClick={(selected) => selectedSet(selected)
                } />

            <ServerButton
                onClick={Clicked}
                socket={socket}
                helpers={{ buttonName: `Reduce Me` }}
                helpersParent={{
                    eventName: `testEvent`, data: {
                        src: socket.id,
                        clickedData: selected
                    }
                }}
            />

        </React.Fragment>
    )

}

export default View