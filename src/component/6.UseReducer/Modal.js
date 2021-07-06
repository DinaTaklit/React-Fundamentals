import React,  {useEffect} from 'react'

export default function Modal({modalContent, closeModal}) {
    
    useEffect(() => {
        setTimeout(() => {closeModal()}, 2000)
    })

    return (
        <>
            <div className="modal">
                <p>
                    {modalContent}
                </p>
            </div>
        </>
    )
}
