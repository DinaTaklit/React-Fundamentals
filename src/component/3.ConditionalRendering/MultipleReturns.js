import React, { useState, useEffect } from 'react'

const url = 'https://api.github.com/users/DinaTaklit'

export default function MultipleReturns() {

    const [isLaoding, setIsLaoding] = useState(true)
    const [isError, setIsError] = useState(false)
    const [user, setUser] = useState("")

    useEffect(() => {
        fetch(url)
            .then(response => {
                if (response.status >= 200 && response.status <= 299) {
                    return response.json()
                }
                else {
                    setIsLaoding(false)
                    setIsError(true)
                    throw new Error(response.statusText)
                }
            })
            .then(user => {
                setUser(user)
                setIsLaoding(false)
            })
    }, [])

    if (isLaoding) {
        return (
            <>
                <h2>Laoding...</h2>
            </>
        )
    }
    else if (isError) {
        return (
            <>
                <h2>Error...</h2>
            </>
        )
    }
   
    return (
        <>    
            <div>
                <img style={{borderRadius:'50%', height:'200px'}} src={user.avatar_url} alt={user.login} />
                <div>
                    <h3>{user.login}</h3>
                    <a href={user.html_url} target="_blank" rel="noreferrer">profile</a>
                </div>
            </div>  
        </>
    )
}
