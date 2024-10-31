import { FC } from 'react';

interface SprintProps {
    sprintNr: number;
    goal: string;
}

export const SprintCard: FC<SprintProps> = ({ sprintNr, goal }) => {
    return (
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