import Link from 'next/link'
import React, { useState } from 'react'
import BottomAddButton from './BottomAddButton'
import MenuItems from './MenuItems'
import SkeletonMenu from './SkeletonMenu'


const Menu = ({ data, create, update, remove, error, isLoading, forEndPoint }) => {

    const [addNewItem, setAddNewItem] = useState(false)

    const handleAddNewItem = () => setAddNewItem(!addNewItem)

    const handleSubmit = (value) => {
        create({ name: value })
        setAddNewItem(!addNewItem)

    }

    const searchArray = (array, query) => {
        return array[0] && array?.filter(item =>
            Object.values(item).some(value =>
                value.toString().toLowerCase().includes(query.toLowerCase())
            )
        );
    }


    return (
        <section className={'w-full h-full'} >
            <div className="flex flex-col h-full overflow-x-hidden">

                <Link href="/" className="block px-2 py-3 text-xs font-medium text-zinc-400 hover:text-zinc-200 capitalize">
                    {forEndPoint}
                </Link>


                {
                    data ?
                        <MenuItems
                            data={data}
                            searchArray={searchArray}
                            addNewItem={addNewItem}
                            create={create}
                            update={update}
                            remove={remove}
                            error={error}
                            handleSubmit={handleSubmit}
                            isLoading={isLoading}
                            setAddNewItem={setAddNewItem}
                            forEndPoint={forEndPoint}
                        />
                        :
                        <SkeletonMenu />
                }


                <BottomAddButton handleAddNewItem={handleAddNewItem} />

            </div>
        </section>
    )
}

export default Menu
