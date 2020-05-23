import React, { PureComponent } from 'react'

import ServerButton from '../reusable/ServerButton'


import Select from '../reusable/Select'

class View extends PureComponent {
    constructor(props) {
        
        super(props)

        this.state = {
            socket: props.socket,
            // src:props.socket.id,
            data: [],
            selected:`-`
        }

        var tmp=[]
        this.state.socket.on(`RSD`, data => tmp=data)
        this.setState({data:tmp})

        console.log(new Date(),`where is data`)
        console.table(this.state.data)
    }

    // utils.js
    


    Clicked() {

        const Reduce = ({ data, selected }) => data.filter(item => item !== selected)

        // const {data,selected}=this.state

        // console.table(data)// incase destructuring did not work // warn

        // put it in utils.js
        const tmp = [...this.state.data]
        console.table(tmp)
        return

        const ReducedData = tmp.filter(item=>item!==this.state.selected)

        this.setState({data:ReducedData})
    }

    render() {
        return (
            <React.Fragment>

                <Select
                data={this.state.data}
                onClick={(selected)=>{
                    
                    this.setState({selected})

                    console.table(selected)
                }}/>

                <ServerButton
                    onClick={this.Clicked}
                    socket={this.state.socket}
                    helpers={{ buttonName: `Reduce Me` }}
                    helpersParent={{ eventName: `testEvent`, data: { src: this.state.socket.id, clickedData: this.state.selected } }}
                />

            </React.Fragment>
        )
    }
}

export default View

