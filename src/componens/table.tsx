import moment from 'moment';
import { FC, useEffect, useState } from 'react';
import { durationString } from './helpers';

export interface TableData {
    date: string;
    writtenWords: string;
    extraWords: string,
    minutesWorked: string;
}

interface TableProps {
    header: string[];
    initialData?: TableData[];
    minWordsToWrite: number;
}

export const Table: FC<TableProps> = ({ header, initialData, minWordsToWrite }) => {

    const [data, setData] = useState<TableData[] | undefined>(initialData);

    useEffect(() => {
        setData(initialData);
    }, [initialData]);

    const onChange = (rowIdx: number, identifier: string, value: string) => {
        if (data) {
            const newData = [...data];
            newData[rowIdx][identifier as keyof TableData] = value;

            if (identifier === 'writtenWords') {
                // update extraWords
                newData[rowIdx].extraWords = `${(+(data[rowIdx].writtenWords))-minWordsToWrite}`
            }

            setData([...newData])
        }
    }

    return (
        <div className="overflow-x-auto">
            <table className="table table-xs">
                {/* header */}
                <thead>
                    <tr>
                        {header.map((value, index) => (
                            <th key={`header-${index}`}>{value}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((row, rowIdx) => (
                        <tr key={`row-${rowIdx}`}>
                            <td>{moment(row.date, 'DD/MM/YYYY').format('DD.MM.YYYY')}</td>
                            <td>{moment(row.date, 'DD/MM/YYYY').format('dddd')}</td>
                            <td>
                                <input
                                    type="number" // TODO: use correct type
                                    placeholder="Type here"
                                    className="input input-bordered input-sm w-full max-w-xs"
                                    value={row.minutesWorked}
                                    onChange={(e) => onChange(rowIdx, 'minutesWorked',  e.currentTarget.value)}
                                />
                            </td>
                            <td>{durationString(row.minutesWorked)}</td>
                            <td>
                                <input
                                    type="text" // TODO: use correct type
                                    placeholder="Type here"
                                    className="input input-bordered input-sm w-full max-w-xs"
                                    value={row.writtenWords}
                                    onChange={(e) => onChange(rowIdx, 'writtenWords', e.currentTarget.value)}
                                />
                            </td>
                            <td className={`${+row.extraWords >= 0 ? 'text-green-500' : 'text-red-500'}`}>{row.extraWords}</td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
        </div>
    )
}