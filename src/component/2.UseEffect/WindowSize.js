import React, {useState, useEffect} from 'react'

export default function WindowSize() {

    const [size, setSize] = useState(window.innerWidth)

    const checkSize = () => {
        setSize(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', checkSize)
        // Without a cleanup we will have as many event listner as the window resize, 
        // this is memory consuming, that is why we ned to make the cleanup 
        return () => {
            window.removeEventListener('resize', checkSize)
        }
    })

    return (
        <>
            <h2>Window</h2>
            <h3>{size} px</h3>
        </>
    )
}
