import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom'
import { data } from '../../data';


const Person = () => {

    const [name, setName] = useState('')
    const {id} = useParams()

    useEffect(() => {
        const person = data.find(person => person.id === parseInt(id))
        setName(person.name)
    }, [])

    return (
      <div>
        <h2>{name}</h2>
        <Link className="btn" to="/people"> Back to People</Link>
      </div>
    );
};
  
export default Person;