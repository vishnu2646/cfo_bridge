export type noSalesDataColumnType = {
	customer: string;
	partner: string;
	balance: string;
};

export type OutstandingCustomerType = {
    customer: string;
    invoice: string
    balance: number
}

export type CollectionMonthType = {
    customer: string;
    recipt: number;
}

export type CollectionMonthSaleType = {
    customer: string;
    sales: number;
}