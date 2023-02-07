"use client"
import { usePathname, useSearchParams } from 'next/navigation'
import React, { Suspense, useEffect, useState } from 'react'
import useApi from '../../hooks/useApi'
import Menu from './Menu'

const SideBars = () => {
    const [collegeSearchParam] = useState(useSearchParams().get('collegeId'))
    const [courseSearchParam] = useState(useSearchParams().get('courseId'))
    const pathname = usePathname();




    const Campuses = (forEndpoint = 'campuses') => {
        const { data, create, get, remove, update, isLoading, error } = useApi(forEndpoint)
        return (
            <section className={'flex h-[calc(100vh_-_117px)] w-full'}>
                <div className={`overflow-auto border-r border-zinc-700 h-full w-full`}>
                    {
                        <Menu
                            data={data}
                            create={create}
                            update={update}
                            remove={remove}
                            error={error}
                            isLoading={isLoading}
                            forEndPoint={forEndpoint}
                            paramsForUrl={'campusId'}
                        />
                    }
                </div>
            </section>

        )
    }
    const Colleges = (forEndpoint = `colleges`) => {
        const campusSearchParam = useSearchParams().get('campusId')
        const { data, create, get, remove, update, isLoading, error } = useApi(forEndpoint + `?campusId=${campusSearchParam}`)
        return (
            <section className={'flex h-[calc(100vh_-_117px)] w-full'}>
                <div className={`overflow-auto border-r border-zinc-700 h-full w-full`}>
                    {
                        <Menu
                            data={data}
                            create={create}
                            update={update}
                            remove={remove}
                            error={error}
                            isLoading={isLoading}
                            forEndPoint={forEndpoint}
                            paramsForUrl={'collegeId'}
                            searchParams={campusSearchParam}
                        />
                    }
                </div>
            </section>

        )
    }
    return { Campuses, Colleges }
}

export default SideBars