import React, { use } from 'react'
import { Cards } from '../../components/Cards/Cards';
import Search from '../../components/Search/page';
import Section from '../../utilities/StyledComponents/Section';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { MobileSlider } from '../../components/Cards/MobileSlider';
import Start from '../../components/Start';
import { Choose } from '../../components/Start/Choose';

const fetcher = () => fetch(`https://aast-ratings.vercel.app/api/getAll`).then((res) => res.json())

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