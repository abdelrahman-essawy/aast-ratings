import React, { useId } from 'react'

export const StarsRadio = ({ callback }: { callback: Function }) => {
    const id = useId()
    return (
        <div className="rating">
            {
                [...Array(5)].map((_, i) => (
                    (i + 1) === 1 ?
                        <input key={i + 1} type="radio" name={id} className="mask mask-star" value={i + 1} onChange={(e) => callback(e.target.value)} defaultChecked />
                        :
                        <input key={i + 1} type="radio" name={id} className="mask mask-star" value={i + 1} onChange={(e) => callback(e.target.value)} />
                ))

            }
        </div>
    )
}
