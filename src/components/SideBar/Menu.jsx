"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import BottomAddButton from './BottomAddButton'
import MenuItems from './MenuItems'
import SkeletonMenu from './SkeletonMenu'


const Menu = ({ data, create, update, remove, error, isLoading, forEndPoint, paramsForUrl, searchParams }) => {

    const [addNewElement, setAddNewElement] = useState(false)

    const handleaddNewElement = () => setAddNewElement(!addNewElement)

    const handleSubmit = (value) => {
        create({ name: value })
        setAddNewElement(!addNewElement)

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
                            addNewElement={addNewElement}
                            create={create}
                            update={update}
                            remove={remove}
                            error={error}
                            handleSubmit={handleSubmit}
                            isLoading={isLoading}
                            setAddNewElement={setAddNewElement}
                            forEndPoint={forEndPoint}
                            paramsForUrl={paramsForUrl}
                            searchParams={searchParams}
                        />
                        :
                        <SkeletonMenu />
                }


                <BottomAddButton handleaddNewElement={handleaddNewElement} />

            </div>
        </section>
    )
}

export default Menu
