import React, { useEffect, useState } from 'react'
import axios from 'axios'
import useSWRMutation from 'swr/mutation'


const BASE_URL = '/api/campuses'



const useCampusesApiDelete = () => {
    const [errorFromAxios, setErrorFromAxios] = useState(null)

    const send = async (method: string, body: any) =>
        await axios.delete(BASE_URL, body.arg).catch((err) => {
            setErrorFromAxios(err)
        })

    const { trigger, isMutating } = useSWRMutation(BASE_URL, send)
    return [trigger, isMutating, errorFromAxios]
}
export default useCampusesApiDelete