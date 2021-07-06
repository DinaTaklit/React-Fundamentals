import React,{useState, useReducer} from 'react'
import Modal from './Modal'
import {reducer} from './reducer'

const initialState = {
    people: [], 
    showModal: false, 
    modalContent: ''
}

export default function Index() {

    const [name, setName] = useState('')

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name) {
            const newPerson = {id: new Date().getTime().toString(), name}
            dispatch({type: 'ADD_ITEM', payload: newPerson})
            setName('')
        }
        else {
            dispatch({type:'NO_VALUE'})
        }
    }
    
    const closeModal = () => {
       dispatch({type:'CLOSE_MODAL'}) 
    }

    return (
        <> 
            <h2 style={{marginBottom: '2rem'}}> Use Reducer</h2>
            {state.showModal && <Modal closeModal={closeModal} modalContent={state.modalContent}></Modal>}
            <section>
                <form className="form" onSubmit={handleSubmit}>
                    <div>
                        <input 
                            type="text"
                            value={name}
                            onChange={(e)=>{setName(e.target.value)}} 
                        />
                    </div>
                    <button type="submit">Add Person</button>
                </form>
            </section>

            <section>
                {
                    state.people.map(person => {
                        const {id, name} = person 
                        return (
                            <div className="item" key={id}>
                                <h3>{name}</h3>
                                <button onClick={() => dispatch({type:'REMOVE_ITEM', payload:id})}> Remove</button>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}
