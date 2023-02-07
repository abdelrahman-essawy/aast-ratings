import React, { memo, useEffect, useState } from 'react'
import DeleteIcon from '../../SVG/DeleteIcon'
import EditIcon from '../../SVG/EditIcon'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

// eslint-disable-next-line react/display-name
const MenuItem = memo(({ item, index, update, remove, error, paramsForUrl, searchParams }) => {

    const handleParamsForUrl = (paramsForUrl) => {
        switch (paramsForUrl) {
            case 'campussId':
                return <Link
                    key={item.id}
                    href={`/admin?${paramsForUrl}=${item.id}`}
                    className='truncate p-3 w-full h-full'>{item.name}</Link>
                break
            case 'collegseId':
                return <Link
                    key={item.id}
                    href={`/admin?${newUrl}`}
                    className='truncate p-3 w-full h-full'>{item.name}</Link>
                break
            default:
                return <Link
                    key={item.id}
                    href={`/admin?${paramsForUrl}=${item.id}`}
                    className='truncate p-3 w-full h-full'>{item.name}</Link>
                break
        }
            
    }

    const [isEditing, setIsEditing] = useState(false);

    const [newUrl, setNewUrl] = useState()

    useEffect(() => {
        setNewUrl(`${searchParams}&${paramsForUrl}=${item.id}`)
    }, [searchParams]);

    return (
        <div className={`flex justify-between items-center hover:bg-base-100 active:bg-base-100 transition duration-300 cursor-pointer ${index % 2 === 0 ? 'bg-base-200' : 'bg-base-300'}`}>
            {
                isEditing ?
                    <input
                        key={item.id}
                        autoFocus
                        id={item.id}
                        onKeyDown={(e) => e.key === 'Enter' && update(item.id, e.target.value) && setIsEditing((prev) => !prev)}
                        defaultValue={item.name}
                        className='truncate bg-inherit p-1' />
                    :
                    handleParamsForUrl(paramsForUrl)
            }



            <div className='flex just'>
                <div onClick={() => setIsEditing((prev) => !prev)}>
                    <EditIcon className='fill-gray-900 w-6 h-6 cursor-pointer hover:scale-125 p-1 transition duration-200 ease-in-out' />
                </div>


                <div onClick={() => remove(item.id)}>
                    <DeleteIcon className='fill-gray-900 w-6 h-6 cursor-pointer hover:scale-125 p-1 transition duration-200 ease-in-out' />
                </div>
            </div>

        </div>

    )
})

export default MenuItem