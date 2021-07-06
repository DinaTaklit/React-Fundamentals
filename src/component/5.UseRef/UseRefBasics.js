import React, {useEffect, useRef} from 'react'

export default function UseRefBasics() {

    const refContainer = useRef(null)
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(refContainer.current.value)
    }
    useEffect(() => {
        console.log(refContainer.current)
        refContainer.current.focus()
    })

    return (
        <>
            <h2> User Ref Basiscs </h2>
            <section>
                <form className='form' onSubmit={handleSubmit}>
                    <div>
                        <input type="text" ref={refContainer} />
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}
