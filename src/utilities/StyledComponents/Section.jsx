import React from 'react'

const Section = ({ children }) => {
    return (
        <section className='max-w-screen-xl p-2 m-auto'>
            {children}
        </section>
    )
}

export default Section