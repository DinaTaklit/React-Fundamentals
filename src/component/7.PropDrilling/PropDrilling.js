import React, {useState} from 'react'
import {data} from '../../data'

export default function PropDrilling() {

    const [people, setPeople] = useState(data)
    return (
        <>
            <h2 style={{marginBottom: '3rem'}}>Prop Drilling</h2>
            <section>
                <List people={people}/>
            </section>
        </>
    )
}


const List = ({people}) => {
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
    return (
        <div className='item'>
            <h3>{name}</h3>
            <button onClick={()=> console.log('ok')}>Remove</button>
        </div>
    )
}  