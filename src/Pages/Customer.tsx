import { useEffect, useState } from "react";
import * as XLSX from 'xlsx';
import { Topbar, VelocityCard } from "../components";
import { TitleTemplate } from "../Templates";

const Customer = ({ locationState, setLocationState }: any) => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const readExcelFile = async () => {
            setLoading(true);
            const response = await fetch("/CFOData.xlsx");
            const arrayBuffer = await response.arrayBuffer();
            const workbook = XLSX.read(arrayBuffer, { type: "array" });
            const worksheet = workbook.Sheets[workbook.SheetNames[5]];
            const jsonData = XLSX.utils.sheet_to_json(worksheet);
            setData(jsonData);
            setLoading(false)
        };
    
        readExcelFile();
    }, []);
    
    const columns = data.length > 0 ? Object.keys(data[0]).map((key) => ({
        name: key,
        selector: (row: { [x: string]: any; }) => row[key],
        sortable: true,
    })) : [];

    return (
        <>
            <Topbar>
                <div className='topbar-title-card'>
                    <TitleTemplate>
                        {locationState === 'consistant-customer' && <p>Debtors Payment Velocity - Consistent Customers</p>}
                        {locationState === 'inconsistant-customer' && <p>Debtors Payment Velocity - InConsistent Customers</p>}   
                    </TitleTemplate>
                </div>
                <div></div>
            </Topbar>
            <div style={{ marginTop: '20px' }}>
                {locationState === 'consistant-customer' && <VelocityCard title="Debtors Payment Velocity - Top 20 Highly Consistent Customers" data={data} columns={columns} loading={loading} />}
                {locationState === 'inconsistant-customer' && <VelocityCard title="Debtors Payment Velocity - Top 20 Highly InConsistent Customers" data={data} columns={columns} loading={loading} />}   
            </div>
        </>
    );
};

export default Customer;
