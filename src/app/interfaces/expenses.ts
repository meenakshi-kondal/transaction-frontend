export interface EXPENSE {
    description: string;
    credit?: number;
    debit?: number;
}

export interface EXPENSE_LIST {
    data: {
        description: string;
        date: string;
        debit: number;
        credit: number;
        remaining_balance: number
    },
    message:string;

}