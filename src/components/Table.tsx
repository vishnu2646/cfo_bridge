import DataTable from 'react-data-table-component';
import Loading from './Loading';

const Table = ({data, columns, loading}: any) => {
	return <DataTable columns={columns} data={data} progressPending={loading} progressComponent={<Loading />} />
};

export default Table;
