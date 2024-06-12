import Sale from '../assets/sales.png';
import Coin from '../assets/coin.png';
import Floder from '../assets/folder.png';
import Closing from '../assets/closing.png';
import Money from '../assets/money.png';

export const dashboardInfo: any[] = [
    {
        image: Coin,
        title: 'Opening Balance',
        value: '(Blank)'
    },
    {
        image: Sale,
        title: 'Sales',
        value: 194700
    },
    {
        image: Money,
        title: 'Receipts / Collections',
        value: 709610
    },
    {
        image: Floder,
        title: 'Credit Note.',
        value: '(Blank)'
    },
    {
        image: Closing,
        title: 'Closing Balance',
        value: -514910
    }
]

export const data: string[] = [
    "The Customer with the Highest Outstanding is 'Apurva Natvar Parikh & Co. Pvt. Ltd. with an Outstanding Balance of Rs.7.53 Lakhs",
    "The Customer with the Highest Sales is Square Business Services Private Limited with a Total Sales of Rs.1.36 Lakhs",
    "The Partner with the Highest Un-Recovered Customer Outstanding is 'Hitesh Kothari totalling to Rs.17.8 Lakhs",
    "The Customer with the Highest Collection is 'Spliceforms Enterprise Solutions Private Limited and the total collection is Rs.2.36 Lakhs"
]

export const NoSalesData = [
    {
        customer: 'Bridgelabz Solutions Pvt Ltd',
        partner: 'Parag Vyavahare',
        balance: 282960
    },
    {
        customer: 'Beyondcolor Surface Solutions Private Limited',
        partner: 'K.Srinivas',
        balance: 118000
    },
    {
        customer: 'Netrika Consulting India Pvt Ltd',
        partner: 'Subramanian G',
        balance: 73750
    }
]

const totalBalance = NoSalesData.reduce((total, item) => total + item.balance, 0);

export const noSalesDataDataWithTotal = [
    ...NoSalesData,
    {
        customer: 'Total',
        partner: '',
        balance: totalBalance
    }
]

interface OutstandingType {
    customer: string,
    invoice: string
    balance: number
}

export const OutstandingCustomer: OutstandingType[] = [
    {
        customer: 'Bridgelabz Solutions Pvt Ltd',
        invoice: '29/Oct/2022-23',
        balance: 168960
    },
    {
        customer: 'Beyondcolor Surface Solutions Private Limited',
        invoice: '19/Dec/2023-24',
        balance: 118000
    },
    {
        customer: 'Bridgelabz Solutions Pvt Ltd',
        invoice: '34/Nov/2022-23',
        balance: 11400
    },
    {
        customer:'Netrika Consulting India Pvt Ltd',
        invoice: '65/Nov/2023-24',
        balance: 73750
    }
]

const totalOutstanding = OutstandingCustomer.reduce((total, item) => total + item.balance, 0);

export const OutstandingCustomerWithTotal = [
    ...OutstandingCustomer,
    {
        customer: 'Total',
        invoice: '',
        balance: totalOutstanding
    }
]

interface CollectionMonth {
    customer: string
    recipt: number
}

const CollectionMonthData: CollectionMonth[] = [
    {
        customer: 'Spliceforms Enterprise Solutions Private Limited',
        recipt: 236000
    },
    {
        customer: 'A-1 Fence Products Company Pvt Ltd',
        recipt: 191000
    },
    {
        customer: 'F C Madras Trust',
        recipt: 132750
    },
    {
        customer: 'Brand Musiq Private Limited',
        recipt: 84960
    },
    {
        customer: 'Devi Construction Company Pvt Ltd',
        recipt: 64900
    },
]

const totalCollectionMonth = CollectionMonthData.reduce((total, item) => total + item.recipt, 0);

export const collectionMonthDataWithTotal = [
    ...CollectionMonthData,
    {
        customer: 'Total',
        recipt: totalCollectionMonth
    }
]

export const collectionMonthData2 = [
    {
        customer: '',
        recipt: ''
    }
]

interface collectionSalesData {
    customer: string;
    sales: number;
}

const collectionMonthSalesData: collectionSalesData[] = [
    {
        customer: 'Square Business Services Private Limited',
        sales: 135700
    },
    {
        customer: 'Setu Advertising Private Limited',
        sales: 59000
    }
]

const totalCollectionMonthSales = collectionMonthSalesData.reduce((sum, item) => sum + item.sales, 0);

export const collectionSalesMonthData: collectionSalesData[] = [
    ...collectionMonthSalesData,
    {
        customer: 'Total',
        sales: totalCollectionMonthSales
    }
]