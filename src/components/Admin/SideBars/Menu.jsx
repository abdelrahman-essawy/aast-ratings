import Link from 'next/link'
import React, { useState } from 'react'
import AddIcon from '../../../SVG/AddIcon'
import Spinner from '../../../utilities/Spinner'
import MenuItem from './MenuSingleItem'
import useSWRMutation from 'swr/mutation'
import axios from 'axios'
import useCampusesApi from '../../../hooks/API_Hooks/campuses'
import useCampusesApiDelete from '../../../hooks/API_Hooks/campusesDelete'
import { motion } from 'framer-motion'
import Search from '../../Search/page'
import BottomAddButton from './BottomAddButton'
import MenuItems from './MenuItems'


const Menu = ({ dataFromParent }) => {
    const [trigger, isMutating, errorFromAxios] = useCampusesApi()
    const [addNewItem, setAddNewItem] = useState(false)

    const handleAddNewItem = () =>  setAddNewItem(!addNewItem)
    
    const handleSubmit = (value) => {
        trigger({ name: value })
        setAddNewItem(!addNewItem)

    }

    const searchArray = (array, query) => {
        return array.filter(item =>
            Object.values(item).some(value =>
                value.toString().toLowerCase().includes(query.toLowerCase())
            )
        );
    }


    return (
        <section className={'w-56 h-full'} >
            <div className="flex flex-col h-full overflow-x-hidden">
                
                <Link href="/" className="block px-2 py-3 text-xs font-medium text-zinc-400 hover:text-zinc-200">
                    All Campuses
                </Link>

                <MenuItems
                    dataFromParent={dataFromParent}
                    searchArray={searchArray}
                    addNewItem={addNewItem} i
                    sMutating={isMutating}
                    errorFromAxios={errorFromAxios}
                    handleSubmit={handleSubmit}
                />

                <BottomAddButton handleAddNewItem={handleAddNewItem} />

            </div>
        </section>
    )
}

export default Menu
