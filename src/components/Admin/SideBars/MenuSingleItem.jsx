import React, { memo } from 'react'
import useCampusesApiDelete from '../../../hooks/API_Hooks/campusesDelete'
import DeleteIcon from '../../../SVG/DeleteIcon'
import EditIcon from '../../../SVG/EditIcon'
import Spinner from '../../../utilities/Spinner'

// eslint-disable-next-line react/display-name
const MenuItem = memo(({ item }) => {
    const [trigger, isMutating, errorFromAxios] = useCampusesApiDelete()
    const handleDelete = (value) => {
        trigger({ id: value })

    }
    console.log(errorFromAxios);
    return (
        isMutating ? (<div className='w-fit h-fit m-auto mt-2'><Spinner /></div> || errorFromAxios && 'Error')

            :
            <div className='flex justify-between items-center hover:bg-base-100 p-3 rounded-lg active:bg-base-300 transition duration-300 cursor-pointer'>

                <div
                    className='truncate'>
                    {item.name}
                </div>
                <div className='flex just'>
                    <EditIcon className='fill-gray-900 w-6 h-6 cursor-pointer hover:scale-125 p-1 transition duration-200 ease-in-out' />
                    <div
                        onClick={() => handleDelete(item.id)}>

                        <DeleteIcon className='fill-gray-900 w-6 h-6 cursor-pointer hover:scale-125 p-1 transition duration-200 ease-in-out' />
                    </div>

                </div>

            </div>

    )
})

export default MenuItem