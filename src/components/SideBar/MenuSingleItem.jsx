import React, { memo, useEffect, useState } from 'react'
import DeleteIcon from '../../SVG/DeleteIcon'
import EditIcon from '../../SVG/EditIcon'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

// eslint-disable-next-line react/display-name
const MenuItem = memo(({ element, index, update, remove, error, paramsForUrl, searchParams }) => {

    const handleParamsForUrl = (paramsForUrl) => {
        switch (paramsForUrl) {
            case 'campusId':
                return <div
                    key={element.id}
                    // href={`/admin?${paramsForUrl}=${element.id}`}
                    onClick={() => console.log(element.id)}
                    className='truncate p-3 w-full h-full'>{element.name}</div>
                break
            case 'collegseId':
                return <Link
                    key={element.id}
                    href={`/admin?${newUrl}`}
                    className='truncate p-3 w-full h-full'>{element.name}</Link>
                break
            default:
                return <Link
                    key={element.id}
                    href={`/admin?${paramsForUrl}=${element.id}`}
                    className='truncate p-3 w-full h-full'>{element.name}</Link>
                break
        }

    }

    const [isEditing, setIsEditing] = useState(false);

    const [newUrl, setNewUrl] = useState()

    useEffect(() => {
        setNewUrl(`${searchParams}&${paramsForUrl}=${element.id}`)
    }, [searchParams]);

    return (
        <div className={`flex justify-between items-center hover:bg-base-100 active:bg-base-100 transition duration-300 cursor-pointer ${index % 2 === 0 ? 'bg-base-200' : 'bg-base-300'}`}>
            {
                isEditing ?
                    <input
                        key={element.id}
                        autoFocus
                        id={element.id}
                        onKeyDown={(e) => e.key === 'Enter' && update(element.id, e.target.value) && setIsEditing((prev) => !prev)}
                        defaultValue={element.name}
                        className='truncate bg-inherit p-1' />
                    :
                    handleParamsForUrl(paramsForUrl)
            }



            <div className='flex just'>
                <div onClick={() => setIsEditing((prev) => !prev)}>
                    <EditIcon className='fill-gray-900 w-6 h-6 cursor-pointer hover:scale-125 p-1 transition duration-200 ease-in-out' />
                </div>


                <div onClick={() => remove(element.id)}>
                    <DeleteIcon className='fill-gray-900 w-6 h-6 cursor-pointer hover:scale-125 p-1 transition duration-200 ease-in-out' />
                </div>
            </div>

        </div>

    )
})

export default MenuItem