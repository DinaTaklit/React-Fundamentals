import React, {useState} from 'react'

export default function Counter() {
    const [value, setValue] = useState(0)

    const reset = () => {
        setValue(0)
    }
    
    return (
        <>
            <section>
                <h2 style={{margin:"0 0 4rem"}}> Regular Counter</h2>
                <h3>{value}</h3>

                <button
                    className="btn"
                    onClick={() => setValue(value+1) }
                >
                    Increase
                </button>

                <button
                    className="btn"
                    onClick={() => setValue(value-1) }
                >
                    Decrease
                </button>

                <button
                    className="btn"
                    onClick={reset}
                >
                    Reset
                </button>
            </section>

        </>
    )
}
