import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import { Table, TableData } from './componens/table';
import { Stats } from './componens/stats';
import { WordsPerDayChart } from './componens/charts/wordsPerDay';
import { TimeWorkedChart } from './componens/charts/timeWorkedPerDay';
import { SprintCard } from './componens/sprintCard';
import { getTableData, saveTableData } from './api/api';
import { Navbar } from './componens/navbar';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

interface Sprint {
  number: number;
  goal: string;
}

export default function App() {

  const header = ['Date', 'Weekday', 'Minutes Worked', 'Duration', 'Words written', 'Extra Words'];
  const minWordsToWrite = 1000;
  const sprint: Sprint = { number: 1, goal: 'Write 1000 words a day' };

  const savedModalRef = useRef<HTMLDialogElement>(null);
  const [modalMsg, setModalMsg] = useState<string>("");

  // const [data, setData] = useState<TableData[]>([]);
  const [data, setData] = useState<TableData[]>([
    {
      date: '28/10/2024',
      writtenWords: '0',
      extraWords: '0',
      minutesWorked: '0'
    },
    {
      date: '29/10/2024',
      writtenWords: '0',
      extraWords: '0',
      minutesWorked: '0'
    },
    {
      date: '30/10/2024',
      writtenWords: '0',
      extraWords: '0',
      minutesWorked: '0'
    },
    {
      date: '31/10/2024',
      writtenWords: '0',
      extraWords: '0',
      minutesWorked: '0'
    },
    {
      date: '1/11/2024',
      writtenWords: '0',
      extraWords: '0',
      minutesWorked: '0'
    },
    {
      date: '2/11/2024',
      writtenWords: '0',
      extraWords: '0',
      minutesWorked: '0'
    },
    {
      date: '3/11/2024',
      writtenWords: '0',
      extraWords: '0',
      minutesWorked: '0'
    },
    {
      date: '4/11/2024',
      writtenWords: '0',
      extraWords: '0',
      minutesWorked: '0'
    },
    {
      date: '5/11/2024',
      writtenWords: '0',
      extraWords: '0',
      minutesWorked: '0'
    },
    {
      date: '6/11/2024',
      writtenWords: '0',
      extraWords: '0',
      minutesWorked: '0'
    },
    {
      date: '7/11/2024',
      writtenWords: '0',
      extraWords: '0',
      minutesWorked: '0'
    },
    {
      date: '8/11/2024',
      writtenWords: '0',
      extraWords: '0',
      minutesWorked: '0'
    },
    {
      date: '9/11/2024',
      writtenWords: '0',
      extraWords: '0',
      minutesWorked: '0'
    }
    ,
    {
      date: '10/11/2024',
      writtenWords: '0',
      extraWords: '0',
      minutesWorked: '0'
    }
  ])

  const fetchData = useCallback(async () => {
    try {

      const tableData = await getTableData();

      console.log(tableData);
      if (tableData) {
        setData(tableData);
      }
    } catch (error) {
      console.log('ERROR fetching tableData data: ', error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const totalExtraWords: number = useMemo<number>(() => {
    let total = 0;

    data?.forEach(td => {
      total += (+td.extraWords);
    })

    return total;
  }, [data]);

  const totalMinsWorked: number = useMemo<number>(() => {
    let total = 0;

    data?.forEach(td => {
      total += (+td.minutesWorked);
    })

    return total;
  }, [data]);

  const wordsPerDay: number[] = useMemo<number[]>(() => {
    const wpd: number[] = [];

    data?.forEach(td => {
      wpd.push(+td.writtenWords);
    })

    return wpd;
  }, [data]);

  const hoursWorked: number[] = useMemo<number[]>(() => {
    const hw: number[] = [];

    data?.forEach(td => {
      hw.push(+td.minutesWorked / 60);
    })

    return hw;
  }, [data]);

  const save = async () => {
    try {
      await saveTableData(data);
      setModalMsg("The data has been saved!");
      savedModalRef.current?.showModal();
    } catch (error) {
      console.log(error);
      setModalMsg(`The data has not been saved! Error: ${error}`);
      savedModalRef.current?.showModal();
    }
  }

  return (
    <div>
      <RouterProvider router={router} />
    </div>
    // <div className="flex flex-row h-screen">
    //   <div className='h-full max-h-screen w-2/12 2xl:w-1/12  bg-base-200'>
    //     <Navbar />
    //   </div>
    //   <div className="flex flex-col justify-content w-10/12 2xl:w-11/12 max-h-screen overflow-x-auto">
    //     {/* <SprintCard sprintNr={sprint.number} goal={sprint.goal} />

    //     <Stats totalExtraWords={totalExtraWords} totalMinsWorked={totalMinsWorked} />
    //     <div className='flex flex-row h-54'>
    //       <TimeWorkedChart className="ml-auto" chartData={hoursWorked} />
    //       <WordsPerDayChart className="mr-auto" chartData={wordsPerDay} />
    //     </div>
    //     <div className='w-full flex justify-end mb-4'>
    //       <button className="btn w-32 btn-outline btn-primary" onClick={save}>Save</button>
    //     </div>
    //     <Table header={header} initialData={data} minWordsToWrite={minWordsToWrite} /> */}
    //     <RouterProvider router={router} />
    //   </div>
    //   <dialog ref={savedModalRef} className="modal">
    //     <div className="modal-box">
    //       <h3 className="text-lg font-bold">Save</h3>
    //       <p className="py-4">{modalMsg}</p>
    //       <div className="modal-action">
    //         <form method="dialog">
    //           <button className="btn btn-primary">OK</button>
    //         </form>
    //       </div>
    //     </div>
    //   </dialog>
    // </div>
  )
}