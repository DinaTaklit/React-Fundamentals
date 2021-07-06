import React, {useState} from 'react'

export default function ControlledInputs() {

    const [firstName, setFirstName] = useState("")
    const [email, setEmail] = useState("")
    const [people, setPeople] = useState([])

    const handleSubmit = e =>{
        e.preventDefault()
        if (firstName && email){
            const person = {id:new Date().getTime.toString() ,firstName, email}
            setPeople(prevPeople => [...prevPeople, person])
            setFirstName('')
            setEmail('')
        }
    }
    return (
        <>
            <h2 style={{marginBottom:'2rem'}}>Controlled Inputs</h2>
            <section>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="firstName"> Name:</label>
                        <input 
                            type="text" 
                            id="firstName"
                            name="firstName"
                            placeholder="your name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email"> Email:</label>
                        <input 
                            type="email" 
                            id="email"
                            name="email"
                            placeholder="your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button type="submit"> Add person</button>
                </form>
            </section>
            <section>
                {people.map(person=> {
                    const {id, firstName, email} = person
                    return (
                        <div className='item' key={id}>
                            <h3>{firstName}</h3>
                            <p>{email}</p>
                        </div>
                    )
                })}
            </section>
        </>
    )
}
