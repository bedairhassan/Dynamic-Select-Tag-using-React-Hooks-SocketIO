import React from 'react'

const Button = ({onClick,buttonName})=>
<button onClick={()=>onClick()}>{buttonName}</button>

export default Button
