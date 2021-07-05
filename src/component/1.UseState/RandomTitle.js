import React, {useState} from 'react'

export default function RandomTitle() {
    const [title, setTitle] = useState('Random Text');
    const handleClick = () => {
        title === "Random Text" ? setTitle('Hello World'): setTitle("Random Text")
    }
    return (
      <>
        <h2>{title}</h2>
        <button 
            type="button" 
            className="btn"
            onClick={handleClick}
        >
            change title
        </button>
      </>
    )
}
