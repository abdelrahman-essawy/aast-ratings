import React, { memo } from 'react'
import AddIcon from '../../SVG/AddIcon'

// eslint-disable-next-line react/display-name
const BottomAddButton = memo(({ handleAddNewItem }) => {
  return (
    <div onClick={() => handleAddNewItem()}
      className='flex sticky justify-center items-center hover:bg-base-100 p-3 active:bg-base-300 transition duration-300 cursor-pointer bg-base-300 shadow border-t border-gray-600'>
      <AddIcon className='fill-gray-900 w-7 h-7 cursor-pointer p-1 transition duration-200 ease-in-out' />
    </div>
  )
})

export default BottomAddButton