import { useEffect, useState } from "react"
import axios from "axios"

export function Getdata(route) {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(`https://jsonplaceholder.typicode.com/${route}`);
                setData(response.data);
                setIsLoading(false);
            } catch (e) {
                setIsError(true);
                setError(e.message);
                setIsLoading(false);
            }
        };
        fetchData();

        // try {
        //     setIsLoading(true)
        //     fetch(`https://jsonplaceholder.typicode.com/${route}`)
        //         .then((Response) => Response.json())
        //         .then((data) => {
        //             setData(data)
        //             setIsLoading(false)
        //         })
        //         .catch((e) => {
        //             setIsError(true)
        //             setError(e.message);
        //             setIsLoading(false)
        //         })
        // } catch (e) {
        //     setIsError(true)
        //     setError(e.message);
        //     setIsLoading(false)
        // } 
    }, [route])


    return { data, isLoading, isError, error }
}
