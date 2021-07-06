import React, {useState, useContext} from 'react'
import {data} from '../../data'

const PersonContext = React.createContext()
// two component : Provider / Consumer

export default function ContextApi() {

    const [people, setPeople] = useState(data)

    const removeItem = (id) => {
        setPeople(prevPeople => {
            const newPeople = prevPeople.filter(person => person.id !== id)
            return newPeople
        })
    }
    return (
        <PersonContext.Provider value={{removeItem, people}}>
            <h2 style={{marginBottom: '3rem'}}>Context API / Use Context</h2>
            <section>
                <List/>
            </section>
        </PersonContext.Provider>
    )
}


const List = () => {
    const {people} = useContext(PersonContext)
    return (
        <>
            {
                people.map(person => {
                    return (
                        <Person 
                            key={person.id} 
                            {...person}
                        />
                    )
                })
            }
        </>
        
    )
}

const Person = ({id, name}) => {
    const {removeItem} = useContext(PersonContext)
    return (
        <div className='item'>
            <h3>{name}</h3>
            <button onClick={()=> removeItem(id)}>Remove</button>
        </div>
    )
}  