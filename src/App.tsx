import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Customer, Debtor, DebtorPayment, Home } from './Pages';
import './App.css';

function App() {
    const location = useLocation();
    const [locationState, setLocationState] = useState<String>('');
    
    useEffect(() => {
        switch (location.pathname) {
            case '/debtor-collection': 
                setLocationState('debtor-collection');
                break;
            case '/debtor-sales':
                setLocationState('debtor-sales');
                break;
            case '/debtor-payment':
                setLocationState('debtor-payment');
                break;
            case '/consistant-customer':
                setLocationState('consistant-customer');
                break;
            case '/inconsistant-customer':
                setLocationState('inconsistant-customer');
                break;
            default:
                setLocationState('');
                break;
        }
    }, [location.pathname]);
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/debtor-collection' element={<Debtor locationState={locationState} setLocationState={setLocationState} />} />
                <Route path='/debtor-sales' element={<Debtor locationState={locationState} setLocationState={setLocationState}/>} />
                <Route path='/debtor-payment' element={<DebtorPayment />} />
                <Route path='/consistant-customer' element={<Customer locationState={locationState} setLocationState={setLocationState} />} />
                <Route path='/inconsistant-customer' element={<Customer locationState={locationState} setLocationState={setLocationState} />} />
            </Routes>
        </>  
    );
}

export default App;
