import React from 'react'

const Input = ({ onChange, placeholder }) =>
    <input
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder} />

export default Input
