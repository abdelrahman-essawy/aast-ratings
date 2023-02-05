import React from 'react'

const DataSection = () => {
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* <!-- head --> */}

                <thead>
                    <tr>
                        <th>
                            <label className='flex justify-center items-center'>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>College</th>
                        <th>Courses</th>
                        <th>Rating</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody className='text-start !h-16'>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    {/* <div className="mask mask-squircle w-12 h-12"> */}
                                    {/* <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" /> */}
                                    {/* </div> */}
                                </div>
                                <div className='!ml-0'>
                                    <div className="font-bold text-sm">Yancy Tear</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Wyman-Ledner
                        </td>
                        <td>Indigo</td>
                        <td>Indigo</td>
                        <td>Indigo</td>

                    </tr>
                </tbody>


            </table>
        </div>
    )
}

export default DataSection