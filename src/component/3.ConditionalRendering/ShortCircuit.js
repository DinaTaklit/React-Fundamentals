import React, {useState} from 'react'

export default function ShortCircuit() {

    const [text, setText] = useState("")
    const firstValue = text || 'first text'
    const secondValue = text && 'second value'
    const [isError, setIsError] = useState(false)

    return (
        <>
            <h2>Short Circuit</h2>
            <h3> First Value:  {firstValue} </h3>
            <h3> Second Value:  {secondValue} </h3>

            <button className="btn" onClick={() => setIsError(!isError)}>
                Toggle Error
            </button>

            {isError && <h4>Error...</h4>}
            {isError ? <h4>There is an error</h4>: <h4>  <span> There is no error</span></h4>}

        </>
    )
}
