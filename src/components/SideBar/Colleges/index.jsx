import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation';

const CollegesSideBar = () => {
    const { Campuses, Colleges } = SideBars()

    return (
        <Campuses />
    )
}

export default CollegesSideBar