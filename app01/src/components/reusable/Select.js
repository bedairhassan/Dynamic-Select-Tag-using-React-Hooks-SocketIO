import React from 'react'

const Select = ({ data, onClick }) =>
    <select onClick={(e) => onClick(e.target.value)}>
        <Items data={data}/>
    </select>

const Item = ({ item }) => <option value={item}>{item}</option>
const Items = ({data})=> data.map(item => <Item item={item} />)

export default Select
