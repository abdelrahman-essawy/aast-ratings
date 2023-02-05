import React, { memo, useRef } from 'react'
import { trigger as triggerUpdate } from '../../hooks/API_Hooks/campusesDelete'
import useApi from '../../hooks/API_Hooks/useApi2'
import useCampusesApiUpdate from '../../hooks/API_Hooks/useApi2'
import DeleteIcon from '../../SVG/DeleteIcon'
import EditIcon from '../../SVG/EditIcon'
import Spinner from '../../utilities/Spinner'

// eslint-disable-next-line react/display-name
const MenuItem = memo(({ item, index, update, remove, error }) => {

    const ref = useRef()

    return (
        <div className={`flex justify-between items-center hover:bg-base-100 p-2 active:bg-base-100 transition duration-300 cursor-pointer ${index % 2 === 0 ? 'bg-base-200' : 'bg-base-300'}`}>

            <input
                ref={ref}
                id={item.id}
                onKeyDown={(e) => e.key === 'Enter' && update(item.id, e.target.value)}
                defaultValue={item.name}
                className='truncate bg-inherit p-1' />

            <div className='flex just'>
                <div onClick={() => { ref.current.focus() }}>
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