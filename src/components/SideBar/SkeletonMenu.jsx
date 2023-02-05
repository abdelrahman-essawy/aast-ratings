import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import UpperSearchBar from './UpperSearchBar'

const SkeletonMenu = () => {

    return (
        <section
            className={`w-full h-full`} >
            <div className="flex flex-col h-full overflow-x-hidden w-full">
                <UpperSearchBar />

                <div className='divider mb-0'></div>

                <div className="flex-1 overflow-x-hidden w-full">
                    <div className={`p-4 bg-base-200`}>
                        <div style={{ width: 90 }} className={`h-3 bg-gray-600 rounded-full animate-pulse mt-1`} />
                    </div>
                    <div className={`p-4 bg-base-300 `}>
                        <div style={{ width: 77 }} className={`h-3 bg-gray-600 rounded-full animate-pulse mt-1`} />
                    </div>
                    <div className={`p-4 bg-base-200`}>
                        <div style={{ width: 104 }} className={`h-3 bg-gray-600 rounded-full animate-pulse mt-1`} />
                    </div>
                    <div className={`p-4 bg-base-300 `}>
                        <div style={{ width: 115 }} className={`h-3 bg-gray-600 rounded-full animate-pulse mt-1`} />
                    </div>
                    <div className={`p-4 bg-base-200`}>
                        <div style={{ width: 64 }} className={`h-3 bg-gray-600 rounded-full animate-pulse mt-1`} />
                    </div>
                    <div className={`p-4 bg-base-300 `}>
                        <div style={{ width: 130 }} className={`h-3 bg-gray-600 rounded-full animate-pulse mt-1`} />
                    </div>
                    <div className={`p-4 bg-base-200`}>
                        <div style={{ width: 94 }} className={`h-3 bg-gray-600 rounded-full animate-pulse mt-1`} />
                    </div>
                    <div className={`p-4 bg-base-300 `}>
                        <div style={{ width: 100 }} className={`h-3 bg-gray-600 rounded-full animate-pulse mt-1`} />
                    </div>
                    <div className={`p-4 bg-base-200`}>
                        <div style={{ width: 87 }} className={`h-3 bg-gray-600 rounded-full animate-pulse mt-1`} />
                    </div>
                    <div className={`p-4 bg-base-300 `}>
                        <div style={{ width: 110 }} className={`h-3 bg-gray-600 rounded-full animate-pulse mt-1`} />
                    </div>

                </div>

            </div>
        </section>
    )
}

export default SkeletonMenu
