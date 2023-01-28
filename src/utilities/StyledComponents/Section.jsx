import React from 'react'

const Section = ({ children }) => {
    return (
        <section className='max-w-screen-xl p-2 m-auto  overflow-x-hidden'>
            {children}
        </section>
    )
}

export default Section