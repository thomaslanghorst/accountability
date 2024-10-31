import { TableData } from "../componens/table";

const url = '/tableData';

export const saveTableData = async (data: TableData[]): Promise<boolean> => {

    try {
        const data = new FormData();
        data.append('tableData', JSON.stringify(data));

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