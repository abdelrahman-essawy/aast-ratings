import React from 'react'
import Loading from '../../../app/loading'
import Menu from './Menu'
import SkeletonMenu from './SkeletonMenu'

const SideBars = ({ dataFromParent }) => {
    return (

        dataFromParent ?
            <Menu dataFromParent={dataFromParent} />

            :
            <SkeletonMenu />

    )
}

export default SideBars