import DataTable from 'react-data-table-component';

const Table = ({data, columns}: any) => {
	return <DataTable columns={columns} data={data} />
};

export default Table;
