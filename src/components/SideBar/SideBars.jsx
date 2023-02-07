import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'
import Menu from './Menu'

const SideBar = ({ data, endPoint = 'campuses', paramsForUrl = 'campusId' }) => {

    return (
        <section className={'flex h-[calc(100vh_-_117px)] w-full'}>
            <div className={`overflow-auto border-r border-zinc-700 h-full w-full`}>
                {
                    <Menu
                        data={data}
                        create={'create'}
                        update={'update'}
                        remove={'remove'}
                        error={false}
                        isLoading={false}
                        forEndPoint={endPoint}
                        paramsForUrl={paramsForUrl}
                    />
                }
            </div>
        </section>

    )
}
// const Colleges = (forEndpoint = `colleges`) => {
//     const campusSearchParam = useSearchParams().get('campusId')
//     const { data, create, get, remove, update, isLoading, error } = useApi(forEndpoint + `?campusId=${campusSearchParam}`)
//     return (
//         <section className={'flex h-[calc(100vh_-_117px)] w-full'}>
//             <div className={`overflow-auto border-r border-zinc-700 h-full w-full`}>
//                 {
//                     <Menu
//                         data={data}
//                         create={create}
//                         update={update}
//                         remove={remove}
//                         error={error}
//                         isLoading={isLoading}
//                         forEndPoint={forEndpoint}
//                         paramsForUrl={'collegeId'}
//                         searchParams={campusSearchParam}
//                     />
//                 }
//             </div>
//         </section>

//     )
// }
// return { Campuses, Colleges }


export default SideBar