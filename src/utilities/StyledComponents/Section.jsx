import React from 'react'

const Section = ({ children, className }) => {
    return (
        <section className={`max-w-screen-xl p-2 m-auto overflow-x-hidden ${className}`}>
            {children}
        </section>
    )
}

export default Section