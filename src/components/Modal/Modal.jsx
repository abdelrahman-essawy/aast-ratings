import React from 'react'

export const Modal = () => {
    const rules = [
        'Use a constructive and non-confrontational tone.',
        `Be respectful of the teacher's time and effort, and acknowledge any positive aspects of their teaching.`,
        `Remember that your feedback can have a positive impact on the teacher's development and the education of future students.`
    ]
    return (
        <>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">No worries, no personal data will be collected.</h3>
                    <ul className="py-4 list-disc ml-4">
                        {rules.map((rule, index) => (
                            <li className='py-2' key={index}>{rule}</li>
                        ))}

                    </ul>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn">Ok</label>
                    </div>
                </div>
            </div>
        </>
    )
}
