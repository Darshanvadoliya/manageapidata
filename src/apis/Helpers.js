import { useEffect, useState } from "react"

export function Getdata(route) {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        try {
            setIsLoading(true)
            fetch(`https://jsonplaceholder.typicode.com/${route}`)
                .then((Response) => Response.json())
                .then((data) => {
                    setData(data)
                    setIsLoading(false)
                })
                .catch((e) => {
                    setIsError(true)
                    setError(e.message);
                    setIsLoading(false)
                })
        } catch (e) {
            setIsError(true)
            setError(e.message);
            setIsLoading(false)
        } 
    },[route])


    return {data, isLoading, isError, error}
}
