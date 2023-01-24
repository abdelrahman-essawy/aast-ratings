import React from 'react'

export const CurrentStats = () => {
  return (
      <div class="stats shadow flex w-full">

          <div class="stat place-items-center p-2">
              <div class="stat-title">Lecturers</div>
              <div class="stat-value">31K</div>
          </div>

          <div class="stat place-items-center p-2">
              <div class="stat-title">Reviews</div>
              <div class="stat-value text-primary">4,200</div>
              <div class="stat-desc text-white">↗︎ 40 (2%)</div>
          </div>

      </div>
  )
}
