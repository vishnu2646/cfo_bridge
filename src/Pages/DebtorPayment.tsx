import { Topbar, VelocityCard } from "../components";
import { ContentTemplate, TitleTemplate } from "../Templates";

const DebtorPayment = () => {
    return (
        <div className="velocity-contents">
            <Topbar>
                <div className='topbar-title-card'>
                    <TitleTemplate>
                        <p>Debtors Payment Velocity</p>
                    </TitleTemplate>
                </div>
                <div className='topbar-right-card'>
                    <ContentTemplate>
                    </ContentTemplate>
                </div>
            </Topbar>
            <div className="velocity-content">     
                <VelocityCard title="Debtors Payment Velocity - Top 15 Customers with High Velocity" />
                <VelocityCard title="Debtors Payment Velocity - Top 15 Customers with Low Velocity"/>
            </div>
        </div>
    );
};

export default DebtorPayment;
