import React,{useState} from 'react'
import Modal from './Modal'

export default function Index() {

    const [name, setName] = useState('')
    const [people, setPeople] = useState([])
    const [showModal, setShowModal] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const newPeople = [...people, {id: new Date().getTime().toString(), name}]
        setPeople(newPeople)
        setName('')
        setShowModal(true)
    }
    
    const removePeople = (id) => {
        const newPeople = people.filter(person => person.id !== id)
        setPeople(newPeople)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <> 
            <h2 style={{marginBottom: '2rem'}}> Use Reducer</h2>
            {showModal && <Modal closeModal={closeModal} modalContent={'Modal'}></Modal>}
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
                    people.map(person => {
                        const {id, name} = person 
                        return (
                            <div className="item" key={id}>
                                <h3>{name}</h3>
                                <button onClick={() => removePeople(id)}> Remove</button>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}
