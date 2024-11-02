import { FC, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../componens/navbar";

export const Root: FC = () => {

    const savedModalRef = useRef<HTMLDialogElement>(null);
    const [modalMsg, setModalMsg] = useState<string>("");

    return (
        <div className="flex flex-row h-screen">
            <div className='h-full max-h-screen w-2/12 2xl:w-1/12  bg-base-200'>
                <Navbar />
            </div>
            <div className="flex flex-col justify-content w-10/12 2xl:w-11/12 max-h-screen overflow-x-auto">
                {/* <SprintCard sprintNr={sprint.number} goal={sprint.goal} />
  
          <Stats totalExtraWords={totalExtraWords} totalMinsWorked={totalMinsWorked} />
          <div className='flex flex-row h-54'>
            <TimeWorkedChart className="ml-auto" chartData={hoursWorked} />
            <WordsPerDayChart className="mr-auto" chartData={wordsPerDay} />
          </div>
          <div className='w-full flex justify-end mb-4'>
            <button className="btn w-32 btn-outline btn-primary" onClick={save}>Save</button>
          </div>
          <Table header={header} initialData={data} minWordsToWrite={minWordsToWrite} /> */}
                <Outlet />
            </div>
            <dialog ref={savedModalRef} className="modal">
                <div className="modal-box">
                    <h3 className="text-lg font-bold">Save</h3>
                    <p className="py-4">{modalMsg}</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-primary">OK</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}