import React, { use } from 'react'
import Start from '../../components/Start';

const fetcher = () => fetch(`https://aast-ratings.vercel.app/api/getAll`, { next: { revalidate: 60 } }).then((res) => res.json())

const Page = () => {

    const data = use(fetcher())

    return (
        <>
            <Start data={data} />
            {/* <Choose data={data} /> */}
        </>


    )
}
export default Page