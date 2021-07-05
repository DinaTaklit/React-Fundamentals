import React, {useState, useEffect} from 'react'
const url = 'https://api.github.com/users'

export default function FetchGithubUsers() {

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const users = await fetch(url).then(response => response.json())
        setUsers(users)
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <>
            <h2>Github Users</h2>
            <ul className="users">
                {
                    users.map(user => {
                        const {id, login, avatar_url, html_url} = user
                        return (
                            <li key={id}>
                                <img src={avatar_url} alt={login} />
                                <div>
                                    <h3>{login}</h3>
                                    <a href={html_url} target="_blank" rel="noreferrer">profile</a>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}
