import DataTable, { TableColumn } from 'react-data-table-component';

type DataRow = {
	title: string;
	director: string;
	year: string;
};

const columns: TableColumn<DataRow>[] = [
	{
		name: 'Title',
		selector: row => row.title,
	},
	{
		name: 'Director',
		selector: row => row.director,
	},
	{
		name: 'Year',
		selector: row => row.year,
	},
];

const Table = () => {
  return <DataTable columns={columns} data={[]} />;
};

export default Table;
