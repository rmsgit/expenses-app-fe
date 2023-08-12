import {ExpenseItem} from "./ExpenseItem";
import {makeAutoObservable} from "mobx";
import {inlinePromise} from '@ruwan.m.s/promise-utils'
import {createNewExpense, getExpenses} from "../../Services/expense-service";

export class ExpenseList {
    public items: ExpenseItem[] = [];

    constructor() {

        // this.items = [
        //     new ExpenseItem({
        //         title: 'Coffee',
        //         description: 'A latte from Starbucks.',
        //         amount: 5.99,
        //         date: new Date(),
        //         category: 'Food'
        //     }),
        //     new ExpenseItem({
        //         title: 'Gas',
        //         description: 'Filled up my car at the Shell station.',
        //         amount: 35.00,
        //         date: new Date(),
        //         category: 'Transportation'
        //     }),
        //     new ExpenseItem({
        //         title: 'Groceries',
        //         description: 'Did some shopping at the grocery store.',
        //         amount: 100.00,
        //         date: new Date(),
        //         category: 'Food'
        //     }),
        //     new ExpenseItem({
        //         title: 'Clothing',
        //         description: 'Bought a new pair of jeans.',
        //         amount: 50.00,
        //         date: new Date(),
        //         category: 'Clothing'
        //     }),
        //     new ExpenseItem({
        //         title: 'Entertainment',
        //         description: 'Went to the movies.',
        //         amount: 20.00,
        //         date: new Date(),
        //         category: 'Entertainment'
        //     })
        // ];
        makeAutoObservable(this)
    }


    async loadAll() {
        const [response] = await inlinePromise<{ data: ExpenseItem[] }>(getExpenses())
        if (response) {
            this.items = response.data.map(e => new ExpenseItem(e));
        }
    }

    async crateNew(expense: ExpenseItem) {
        const [response] = await inlinePromise<{ data: ExpenseItem }>(createNewExpense(expense))
        if (response) {
            const newExpense = new ExpenseItem(response.data);
            this.items.push(newExpense);
            return newExpense
        }
    }
}