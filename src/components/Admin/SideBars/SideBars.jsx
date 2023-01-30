import React from 'react'
import Loading from '../../../app/loading'
import Menu from './Menu'
import SkeletonMenu from './SkeletonMenu'

const SideBars = ({ data }) => {
    return (

        data ?
            <Menu data={data} />

            :
            <SkeletonMenu />

    )
}

export default SideBars