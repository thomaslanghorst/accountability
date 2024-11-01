import { FC } from 'react';
import { durationString } from './helpers';

interface StatsProps {
  totalExtraWords: number;
  totalMinsWorked: number;
}

export const Stats: FC<StatsProps> = ({ totalExtraWords, totalMinsWorked }) => {
  return (
    <div className='flex justify-center m-8'>
      <div className='stats shadow'>
        {/* total worktime */}
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </div>
          <div className="stat-title text-secondary">Total Time Worked</div>
          <div className="stat-value text-secondary">{durationString(`${totalMinsWorked}`)}</div>
          {/* <div className="stat-desc">21% more than last month</div> */}
        </div>
         {/* total written words */}
         <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </div>
          <div className="stat-title text-primary">Total Extra Words</div>
          <div className="stat-value text-primary">{totalExtraWords}</div>
          {/* <div className="stat-desc">21% more than last month</div> */}
        </div>
      </div>
    </div>
  )
}