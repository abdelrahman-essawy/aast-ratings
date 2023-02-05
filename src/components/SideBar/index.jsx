"use client"
import React, { Suspense, useEffect } from 'react'
import useApi from '../../hooks/useApi'
import Menu from './Menu'

const SideBar = ({ forEndpoint, fallback, width }) => {
    const { data, create, get, remove, update, isLoading, error } = useApi(forEndpoint)
    return (
        <section className={'flex h-[calc(100vh_-_117px)] w-full'}>
            <div className={`overflow-auto border-r border-zinc-700 h-full w-full`}>
                <Menu
                    data={data}
                    create={create}
                    update={update}
                    remove={remove}
                    error={error}
                    isLoading={isLoading}
                    forEndPoint={forEndpoint}
                />
            </div>
        </section>

    )
}

export default SideBar