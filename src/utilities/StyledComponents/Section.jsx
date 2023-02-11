import React from 'react'

const Section = ({ children, className }) => {
    return (
        <section className={`max-w-screen-xl m-auto ${className}`}>
            {children}
        </section>
    )
}

export default Section