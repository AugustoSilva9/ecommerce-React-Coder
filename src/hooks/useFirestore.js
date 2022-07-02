import { useState, useEffect } from "react";
 

export const useFirestore = (asyncFn, dependencias = []) => {
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        setLoading(true)

        asyncFn().then(response => {
            setData(response)
        }).catch(error => {
            setError(error)
        }).finally(() => {
            setLoading(false)
        })
        
    }, dependencias)

    return {
        loading,
        data,
        error
    }
}