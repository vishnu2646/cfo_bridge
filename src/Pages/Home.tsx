import { TableColumn } from 'react-data-table-component';
import { ContentCard, Topbar } from "../components";
import { ContentTemplate, TitleTemplate } from '../Templates';
import { dashboardInfo, data, noSalesDataDataWithTotal, OutstandingCustomerWithTotal } from '../data/data';
import { noSalesDataColumnType, OutstandingCustomerType } from '../Types/types';

const noSalesDataColumn: TableColumn<noSalesDataColumnType>[] = [
	{
		name: 'Customer',
		selector: row => row.customer,
        sortable: true,
	},
	{
		name: 'Partner',
		selector: row => row.partner,
        sortable: true,
	},
	{
		name: 'Balance',
		selector: row => row.balance,
        sortable: true,
        cell: row => row.balance.toLocaleString()
	}
];

const OutstandingCustomerData: TableColumn<OutstandingCustomerType>[] = [
    {
        name: 'Customer',
        selector: row => row.customer,
        sortable: true,
    },
    {
        name: 'Invoice Ref',
        selector: row => row.invoice,
        sortable: true,
    },
    {
        name: 'Balance',
        selector: row => row.balance,
        sortable: true,
        cell: row => row.balance.toLocaleString()
    },
];

const Home = () => {
    return (
        <>
            <Topbar>
                <div className='topbar-title-card'>
                    <TitleTemplate>
                        <p>Outstanding overview</p>
                    </TitleTemplate>
                </div>
                <div className='topbar-right-card'>
                    <ContentTemplate>
                        <span className='title poppins-semibold'>Days Sales <br /> Outstanding (DSO)</span>
                        <span className='count'>37</span>
                    </ContentTemplate>
                </div>
            </Topbar>
            <div className="home-container">
                <div className="home-info-card">
                    {dashboardInfo.map((data, index) => {
                        return (
                            <div key={index}>
                                <img src={data.image} alt="images" />
                                <div>
                                    <span>{data.title}</span>
                                    <span>{data.value}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="home-container-wrapper">
                    <div className="home-container-contents">
                        <ContentCard title="Customer with No Sales in the Past 3 Months but having oustanding" data={noSalesDataDataWithTotal} columns={noSalesDataColumn}/>
                        <ContentCard title="Customers with with Outstanding more than 120 Days" data={OutstandingCustomerWithTotal} columns={OutstandingCustomerData}/>
                    </div>
                    <div className="home-info-content-cards">
                        {data.map((item, index) => {
                            return (
                                <div key={index} className='home-info-content-card'>
                                    {item}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
