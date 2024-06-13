import { useEffect, useState } from "react";
import * as XLSX from 'xlsx';
import { Topbar, VelocityCard } from "../components";
import { TitleTemplate } from "../Templates";

const DebtorPayment = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const readExcelFile = async () => {
            setLoading(true);
            const response = await fetch("/CFOData.xlsx");
            const arrayBuffer = await response.arrayBuffer();
            const workbook = XLSX.read(arrayBuffer, { type: "array" });
            const worksheet = workbook.Sheets[workbook.SheetNames[6]];
            const jsonData = XLSX.utils.sheet_to_json(worksheet);
            setData(jsonData);
            setLoading(false);
        };
    
        readExcelFile();
    }, []);
    
    const columns = data.length > 0 ? Object.keys(data[0]).map((key) => ({
        name: key,
        selector: (row: { [x: string]: any; }) => row[key],
        sortable: true,
    })) : [];

    return (
        <div className="velocity-contents">
            <Topbar>
                <div className='topbar-title-card'>
                    <TitleTemplate>
                        <p>Debtors Payment Velocity</p>
                    </TitleTemplate>
                </div>
                <div></div>
            </Topbar>
            <div className="velocity-content">     
                <VelocityCard title="Debtors Payment Velocity - Top 15 Customers with High Velocity" data={data} columns={columns} loading={loading} isFromPayment />
                <VelocityCard title="Debtors Payment Velocity - Top 15 Customers with Low Velocity" data={data} columns={columns} loading={loading} isFromPayment />
            </div>
        </div>
    );
};

export default DebtorPayment;
