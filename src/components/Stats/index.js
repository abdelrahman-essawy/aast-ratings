import React, { Suspense, use } from 'react'
import Spinner from '../../utilities/Spinner'
import { LiveStats } from './liveStats'
import { SkeletonStats } from './skeletonStats'

export const Stats = () => {

    return <Suspense fallback={<SkeletonStats />}>
        <LiveStats />
    </Suspense>
}
