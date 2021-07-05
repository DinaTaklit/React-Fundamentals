import React, {useState} from 'react'
import {data} from '../../data'

export default function PeopleArray() {
    const [people, setPeople] = useState(data);
    const removeItem=(id) => {
        const newPeople = people.filter(item => item.id !== id)
        setPeople(newPeople)
    }
    return (
        <>
            {
                people.map(person => {
                    const {id, name} = person
                    return (
                        <div key={id} className="item">
                            <h2>{name}</h2>
                            <button className="btn" onClick={() => removeItem(id)}> Remove</button>
                        </div>
                    )
                })
            }
            <button className="btn" onClick={() => setPeople([])}>Clear Items</button>
        </>
    )
}
