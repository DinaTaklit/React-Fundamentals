import React, {useState, useEffect} from 'react'

export default function ShowHide() {

    const [show, setShow] = useState(false)

    return (
        <>
            <h2>Show and Hide a component</h2>
            <button style={{marginBottom:"2rem"}} className="btn" onClick={() => setShow(!show)}>
                Show/Hide
            </button>
            {show && <Item/>}
        </>
    )
}

const Item = () => {

    const [size, setSize] = useState(window.innerWidth)

    const checkSize = () => {
        setSize(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', checkSize)
        return () => {
            window.removeEventListener('resize', checkSize)
        }
    }, [])

    return (
        <>
            <h2>Item</h2>
            <h3>Window Size</h3>
            <h4> {size} px</h4>
        </>
    )
}