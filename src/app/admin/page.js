import React, { use } from 'react'
import { Sidebar } from '../../components/Admin'
import Section from '../../utilities/StyledComponents/Section'


const fetchCampuses = async () => {
    try {
        return (
            await fetch('https://aast-ratings.vercel.app/api/campuses', { next: { revalidate: 10 } })
        ).json()
    } catch (e) {
        return console.log(e)
    }

}

const page = () => {

    const campuses = use(fetchCampuses())
    return (
        <Sidebar />

    )
}
export default page