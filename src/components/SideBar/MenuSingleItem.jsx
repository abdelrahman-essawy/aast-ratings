import React, { memo, useRef, useState } from 'react'
import { trigger as triggerUpdate } from '../../hooks/API_Hooks/campusesDelete'
import useApi from '../../hooks/API_Hooks/useApi2'
import useCampusesApiUpdate from '../../hooks/API_Hooks/useApi2'
import DeleteIcon from '../../SVG/DeleteIcon'
import EditIcon from '../../SVG/EditIcon'
import Spinner from '../../utilities/Spinner'
import Router from 'next/router';

// eslint-disable-next-line react/display-name
const MenuItem = memo(({ item, index, update, remove, error }) => {
    function handleClick(itemId) {
        Router.push({
            pathname: '/some-page',
            query: { id: itemId },
        });
    }
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className={`flex justify-between items-center hover:bg-base-100 p-2 active:bg-base-100 transition duration-300 cursor-pointer ${index % 2 === 0 ? 'bg-base-200' : 'bg-base-300'}`}>
            {
                isEditing ?
                    <input
                        autoFocus
                        id={item.id}
                        onKeyDown={(e) => e.key === 'Enter' && update(item.id, e.target.value) && setIsEditing((prev) => !prev)}
                        defaultValue={item.name}
                        className='truncate bg-inherit p-1' />
                    :
                    <p
                        onClick={() => handleClick(item.id)}
                        className='truncate p-1'>{item.name}</p>

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