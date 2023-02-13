import React from 'react'

export const Stepper = ({ campusName, collegeName, courseName, className }: { campusName: String, collegeName: String, courseName: String, className: String }) => {

    const steps = [
        {
            name: 'Campus',
            value: campusName
        },
        {
            name: 'College',
            value: collegeName
        },
        {
            name: 'Course',
            value: courseName
        }
    ]

    return (

        <ol className={`flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base flex-wrap md:flex-nowrap !${className}`}>

            {
                steps.map(({ name, value }, index) => {
                    return <li key={index} className={`transition-all duration-200 ease-in-out
                        ${value !== undefined && `text-blue-600 dark:text-blue-500`}
                        ${index !== 2 ? `flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`
                            :
                            `flex items-start w-fit flex-shrink`}`}>
                        <span className={`flex items-center sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500
                        ${index !== 2 && `after:content-['/']
                        transition-all duration-200 ease-in-out`}
                        `}>
                            {
                                value ?
                                    <div className='flex items-center'>

                                        <svg aria-hidden="true" className="w-4 h-4 mr-2 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className='truncate shrink'>

                                            {value}
                                        </span>
                                    </div>
                                    :
                                    <>
                                        <span className="mr-2">{index + 1}</span>
                                        {name}

                                    </>
                            }

                        </span>
                    </li>





                })
            }


        </ol>

    )
}
