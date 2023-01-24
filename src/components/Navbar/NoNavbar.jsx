import Link from 'next/link'
import React, { memo } from 'react'

// eslint-disable-next-line react/display-name
const NoNavbar = memo(() => {
    console.log('NoNavbar')
    return  <div className="bg-base-200 w-full"/>

})

export default NoNavbar