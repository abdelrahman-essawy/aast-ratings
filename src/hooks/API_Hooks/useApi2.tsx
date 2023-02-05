import React, { useEffect, useState } from 'react'
import axios from 'axios'
import useSWRMutation from 'swr/mutation'

const BASE_URL = '/api/'

const useApi = (endPoint) => {
    const [errorFromAxios, setErrorFromAxios] = useState(null)
    const [isMutating, setisMutating] = useState(false)
    const [data, setData] = useState(null)

    const useApiGet = async () => {
        const { trigger, isMutating, data } = useSWRMutation(BASE_URL, () => {
            axios
                .get(BASE_URL + endPoint)
                .catch((err) => { setErrorFromAxios(err) })
            setisMutating(isMutating)
            setData(data)
        })
        const apiGet = () => trigger()
        return apiGet()
    }

    const useApiCreate = async (body: any) => {
        const { trigger, isMutating } = useSWRMutation(BASE_URL, () => {
            axios
                .post(BASE_URL + endPoint, body)
                .catch((err) => { setErrorFromAxios(err) })
            setisMutating(isMutating)
        })
        trigger(body)
    }

    const useApiUpdate = async (body: any) => {
        const { trigger, isMutating } = useSWRMutation(BASE_URL, () => {
            axios
                .put(BASE_URL + endPoint, body)
                .catch((err) => { setErrorFromAxios(err) })
            setisMutating(isMutating)
        })
        trigger(body)
    }

    const useApiDelete = async (body: any) => {
        const { trigger, isMutating } = useSWRMutation(BASE_URL, () => {
            axios
                .delete(BASE_URL + endPoint)
                .catch((err) => { setErrorFromAxios(err) })
            setisMutating(isMutating)
        })
        const apiDelete = () => trigger()
        return apiDelete()
    }

    return { data, useApiGet, useApiCreate, useApiUpdate, useApiDelete, isMutating, errorFromAxios }
}

export default useApi



