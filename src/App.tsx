import { useMemo, useState } from 'react';
import './App.css';
import { Table, TableData } from './componens/table';
import { Stats } from './componens/stats';
import { WordsPerDayChart } from './componens/charts/wordsPerDay';
import { TimeWorkedChart } from './componens/charts/timeWorkedPerDay';
import { SprintCard } from './componens/sprintCard';

interface Sprint {
  number: number; 
  goal: string;
}

export default function App() {

  const header = ['Date', 'Weekday', 'Minutes Worked', 'Duration', 'Words written', 'Extra Words'];
  const minWordsToWrite = 1000;
  const sprint: Sprint = {number: 1, goal: 'Write 1000 words a day'};

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
      hw.push(+td.minutesWorked/60);
    })

    return hw;
  }, [data]);

  const onSaveData = (newData: TableData[]) => {
    console.log('SAVING DATA: ', newData);
    setData(newData);
  }

  return (

    <div className="container flex flex-col justify-content mx-auto">
      <SprintCard sprintNr={sprint.number} goal={sprint.goal} />

      <Stats totalExtraWords={totalExtraWords} totalMinsWorked={totalMinsWorked} />
      <div className='flex flex-row h-54'>
        <WordsPerDayChart className="ml-auto" chartData={wordsPerDay} />
        <TimeWorkedChart className="mr-auto" chartData={hoursWorked} />
      </div>

      <Table header={header} initialData={data} minWordsToWrite={minWordsToWrite} onSaveData={onSaveData} />
    </div>
  )
}