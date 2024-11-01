import { TableData } from "../componens/table";

const url = '/tableData';

export const saveTableData = async (tableData: TableData[]): Promise<boolean> => {
    try {
        const data = new FormData();
        data.append('tableData', JSON.stringify(tableData));

        const res = await fetch(url, {
            method: 'POST',
            body: data,
        });

        if (res.status !== 200) {
            console.log('ERROR: could not save tableData');
            console.log('res: ', res);
            return Promise.reject('ERROR: could not save tableData');
        }

        return Promise.resolve(true);
    } catch (error) {
        return Promise.reject(error);
    }
} 

export const getTableData = async (): Promise<TableData[]> => {
    try {
        const res = await fetch(url);

        if (res.status !== 200) {
            console.log('ERROR: could not get tableData');
            console.log('res: ', res);
            return Promise.reject('ERROR: could not get tableData');
        }

        const data = await res.text();

        if (!data || data === '') {
            console.log('ERROR: tableData is empty');
            console.log('res: ', res);
            return Promise.reject('ERROR:  tableData is empty');
    
        }

        const parsed:  TableData[] = JSON.parse(data);
        
        console.log(parsed);

        return Promise.resolve(parsed);
    } catch (error) {
        return Promise.reject(error);
    }
} 