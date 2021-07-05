import React, {useState} from 'react'

export default function Counter() {
    const [value, setValue] = useState(0)
    const [complexValue, setComplexValue] = useState(0)

    const reset = () => {
        setValue(0)
    }

    const complexIncrease= () => {
        setTimeout(() => {
            //setComplexValue(complexValue +1); // If u click many time still u get same result casue it used the old original value.
            setComplexValue((prevComplexValue) => {
                return prevComplexValue +1
            })
        }, 1000);
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
            <section>
                <h2 style={{margin:"4rem 0"}}> Complex Counter</h2>
                <h3>{complexValue}</h3>

                <button
                    className="btn"
                    onClick={complexIncrease}
                >
                    Increase
                </button>

                <button
                    className="btn"
                    onClick={() => setComplexValue(complexValue-1) }
                >
                    Decrease
                </button>

                <button
                    className="btn"
                    onClick={() => setComplexValue(0)}
                >
                    Reset
                </button>
            </section>
        </>
    )
}
