import React from 'react'

const Loading = () => {
    return (
        <div class="absolute w-12 h-12 animate-spin rounded-full bg-gradient-to-r from-gray-500 to-base-100 ">
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-base-100 rounded-full " />
        </div>
    )
}
export default Loading