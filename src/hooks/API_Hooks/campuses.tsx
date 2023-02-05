import React, { useEffect, useState } from 'react'
import axios from 'axios'
import useSWRMutation from 'swr/mutation'


const BASE_URL = '/api/campuses'



const useCampusesApi = () => {
    const [errorFromAxios, setErrorFromAxios] = useState(null)

    const send = async (method: string, body: any) =>
        await axios.post(BASE_URL, body.arg).catch((err) => {
            setErrorFromAxios(err)
        })

    const { trigger, isMutating } = useSWRMutation(BASE_URL, send, {
        onSuccess: (data, arg, config) => {
        }
    }
    )
    return [trigger, isMutating, errorFromAxios]
}
export default useCampusesApi