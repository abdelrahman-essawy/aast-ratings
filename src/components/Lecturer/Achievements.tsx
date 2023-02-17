import React from 'react'

export const Achievements = ({ achievements }: { achievements: any }) => {
  return (
    <div className="bg-base-300 rounded-lg p-4">
      <h2 className="card-title mb-3">Achievements</h2>

      {
        achievements?.length > 0 ?
          <div className="grid grid-cols-2 gap-1">
            {
              achievements?.map(({ id, name, description, createdAt }) => (
                <div key={id} className="flex flex-col">
                  <span className="text-md opacity-50">{name}</span>
                  <span className="text-md opacity-50">{description}</span>
                  <span className="text-md opacity-50">{createdAt}</span>
                </div>
              ))

            }
          </div>

          :
          <span className="text-md opacity-50">No achievements</span>


      }







    </div>
  )
}
