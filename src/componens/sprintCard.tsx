import { FC } from 'react';
import { durationString } from './helpers';

interface SprintProps {
    sprintNr: number;
    goal: string;
}

export const Sprint: FC<SprintProps> = ({ sprintNr, goal }) => {
    return (
        // <div className='flex justify-center m-8'>
        //     <div className='card bg-base-400 shadow-xl'>
        //         <div className="card-body">
        //             <h2 className="card-title">Shoes!</h2>
        //             <p>If a dog chews shoes whose shoes does he choose?</p>
        //         </div>

        //         <span className="text-5xl w-100 text-center text-accent mt-8">Sprint {sprintNr}</span>
        //         <span className="text-xl w-100 text-center text-accent mt-2">Goal: {goal}</span>
        //     </div>
        // </div>
          <div className='flex justify-center m-2'>
        <div className="card bg-base-300 w-96 shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-5xl text-accent uppercase">Sprint {sprintNr}</h2>
                <span className="text-xl w-100 text-center text-accent mt-2 ">Goal: {goal}</span>
            </div>
        </div>
                </div>
    )
}