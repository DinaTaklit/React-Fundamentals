import { useState, useEffect, useCallback } from "react"

export const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    // if we add getData to array of dependencies without using useCallback
    // it will cause infinite loop
    // Rrecreate getData if the url change

    const getData = useCallback(async () => {
        const data = await fetch(url).then(response => response.json())
        setData(data)
        setLoading(false)
    },[url])

    useEffect(() => {
        getData()
    }, [url, getData])

    return [loading, data]
}
