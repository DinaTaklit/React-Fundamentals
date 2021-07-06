import React, {useState} from 'react'

export default function MultipleInputs() {

    const [person, setPerson] = useState({firstName:'', email:'', age:''})
    const [people, setPeople] = useState([])

    const handleChange = (e)=>{
        const {name, value} = e.target 
        setPerson(prevPerson => ({...prevPerson, [name]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Check if there is any empty value in Person object
        const isPersonEmpty = Object.values(person).some(x => x === null || x === ''); 
        if(!isPersonEmpty ){
            const newPerson  = {...person, id: new Date().getTime().toString}
           setPeople(prevPeople => [...prevPeople, newPerson])
           setPerson({firstName: '', email: '', age: ''})
        }
    }
    return (
        <>
            <h2 style={{marginBottom:'2rem'}}>Multiple Inputs</h2>
            <section>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="firstName"> Name:</label>
                        <input 
                            type="text" 
                            id="firstName"
                            name="firstName"
                            placeholder="your name"
                            value={person.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email"> Email:</label>
                        <input 
                            type="email" 
                            id="email"
                            name="email"
                            placeholder="your email"
                            value={person.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="age"> Age:</label>
                        <input 
                            type="age" 
                            id="age"
                            name="age"
                            placeholder="your age"
                            value={person.age}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit"> Add person</button>
                </form>
            </section>
            <section>
                {people.map(person=> {
                    const {id, firstName, email, age} = person
                    return (
                        <div className='item' key={id}>
                            <h3>{firstName}</h3>
                            <p>{age}</p>
                            <p>{email}</p>
                        </div>
                    )
                })}
            </section>
        </>
    )
}
