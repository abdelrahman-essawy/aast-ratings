import React, { use } from 'react'
import Start from '../../../components/Start';

const fetcher = () => fetch(`https://aast-ratings.vercel.app/api/getAll`).then((res) => res.json())

export const revalidate = 0

const Page = ({params}) => {

    const data = use(fetcher())

    return (
        <>
            <Start data={data} />
            {/* <Choose data={data} /> */}

        </>


    )
}
export default Page