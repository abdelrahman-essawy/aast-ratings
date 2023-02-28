import React, { Suspense } from 'react'
import { LiveStats } from './LiveStats'
import { SkeletonStats } from './SkeletonStats'

export const Stats = () => {

    return <Suspense fallback={<SkeletonStats />}>
        <LiveStats />
    </Suspense>
}
