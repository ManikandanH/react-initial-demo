import React, { useState } from 'react'
import Sample from '../Sample'


const Input = (props) => {
    const [inputValue, setInputValue] = useState('')
    const { passToParent } = props

    const handleChange = event => {
        setInputValue(event.target.value)
        passToParent(inputValue + event.target.value)
    }

    return (
        <div>
            <input onChange={handleChange} type="text" value={inputValue} />
        </div>
    )
}

export default Input



// '' + 'm' = m