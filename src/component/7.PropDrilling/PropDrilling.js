import React, {useState} from 'react'
import {data} from '../../data'

export default function PropDrilling() {

    const [people, setPeople] = useState(data)

    const removeItem = (id) => {
        setPeople(prevPeople => {
            const newPeople = prevPeople.filter(person => person.id !== id)
            return newPeople
        })
    }
    return (
        <>
            <h2 style={{marginBottom: '3rem'}}>Prop Drilling</h2>
            <section>
                <List people={people} removeItem = {removeItem}/>
            </section>
        </>
    )
}


const List = ({people, removeItem}) => {
    return (
        <>
            {
                people.map(person => {
                    return (
                        <Person 
                            key={person.id} 
                            {...person}
                            removeItem = {removeItem}
                        />
                    )
                })
            }
        </>
        
    )
}

const Person = ({id, name, removeItem}) => {
    return (
        <div className='item'>
            <h3>{name}</h3>
            <button onClick={()=> removeItem(id)}>Remove</button>
        </div>
    )
}  