import { useState, useEffect } from "react"

export const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const getData = async () => {
        const data = await fetch(url).then(response => response.json())
        setData(data)
        setLoading(false)
    }

    useEffect(() => {
        getData()
    }, [url])

    return [loading, data]
}