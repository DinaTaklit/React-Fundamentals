import React, {useState, useEffect} from 'react'

export default function BasicUseEffect() {
    const [value, setValue] = useState(0)

    useEffect(() => { // used to manage side effects out of the componenet
        if(value > 1){
            document.title =`React Fund ${value}`
        }

    }, [value]) // run every time the value change

    return (
        <>
            <section>
                <h2>Counter</h2>
                <h3>{value}</h3>
                <button className="btn" onClick={() => setValue(value +1)}>Increase</button>
            </section>
        </>
    )
}
