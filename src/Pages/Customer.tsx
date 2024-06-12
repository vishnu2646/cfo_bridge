import { Topbar, VelocityCard } from "../components";
import { TitleTemplate } from "../Templates";

const Customer = ({ locationState, setLocationState }: any) => {
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
                {locationState === 'consistant-customer' && <VelocityCard title="Debtors Payment Velocity - Top 20 Highly Consistent Customers"/>}
                {locationState === 'inconsistant-customer' && <VelocityCard title="Debtors Payment Velocity - Top 20 Highly InConsistent Customers"/>}
                
            </div>
        </>
    );
};

export default Customer;
