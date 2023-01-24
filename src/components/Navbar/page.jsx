"use client"
import Link from 'next/link'
import React, { lazy,  useEffect, useState } from 'react'
import NoNavbar from './NoNavbar'
const DesktopNavbar = lazy(() => import('./DesktopNavbar' /* webpackChunkName: "desktopNavbar" */))
const MobileNavbar = lazy(() => import('./MobileNavbar' /* webpackChunkName: "mobileNavbar" */))

// eslint-disable-next-line react/display-name
export const Navbar = () => {


    const [width, setWidth] = useState(-10);

    const setWidthBeforeRender = () => {
        setWidth(window.innerWidth);
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth);
        })
    }


    useEffect(() => {
        setWidthBeforeRender();
    }, [])

    const selectNavbar = (thisWidth) => {
        if (thisWidth === -10) {
            return <NoNavbar />
        }
        if (thisWidth > 768) {
            return <DesktopNavbar />
        } else {
            return <MobileNavbar />
        }
    }

    return (
        <div className="bg-base-200 w-full h-16">
                {
                    selectNavbar(width)
                }
        </div>
    )
}