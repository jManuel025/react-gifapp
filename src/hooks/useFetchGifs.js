import { useState, useEffect } from 'react'
import getGifs from '../helpers/getGifs'

const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    })

    useEffect(() => { // para que no haga la peticion cada vez que se renderice otro comp
        getGifs(category)
            .then(imgs => {
                setstate({
                    data: imgs,
                   loading: false
                })
            })
    }, [category])

    return state
}

export default useFetchGifs
