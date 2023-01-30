import React from 'react'
import DeleteIcon from '../../../SVG/DeleteIcon'
import EditIcon from '../../../SVG/EditIcon'

const MenuItem = ({ campus }) => {
    return (
        <div className='flex justify-between items-center hover:bg-base-100 p-3 rounded-lg active:bg-base-300 transition duration-300 cursor-pointer'>
            <div
                onClick={() => console.log(campus.id)}>
                {campus.name}
            </div>
            <div className='flex just'>

                <EditIcon className='fill-gray-900 w-6 h-6 cursor-pointer hover:scale-125 p-1 transition duration-200 ease-in-out' />
                <DeleteIcon className='fill-gray-900 w-6 h-6 cursor-pointer hover:scale-125 p-1 transition duration-200 ease-in-out' />

            </div>
        </div>

    )
}


export default MenuItem