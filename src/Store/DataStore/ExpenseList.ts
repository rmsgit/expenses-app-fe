import {ExpenseItem} from "./ExpenseItem";
import {makeAutoObservable} from "mobx";
import {inlinePromise} from '@ruwan.m.s/promise-utils'
import {createNewExpense, deleteExpense, getExpenses} from "../../Services/expense-service";

export class ExpenseList {
    public items: ExpenseItem[] = [];

    constructor() {
        makeAutoObservable(this)
    }


    async loadExpenses(filers?: { category?: string }) {
        const [response] = await inlinePromise<{ data: ExpenseItem[] }>(getExpenses(filers))
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

    getSumByCategory(category: string): number {
        return this.items
            .filter(i => i.category === category)
            .reduce((total, expence) => {
                total += expence.amount
                return total;
            }, 0)
    }

    async remove(expense: ExpenseItem) {
        if (expense._id) {
            const [response] = await inlinePromise<{ data: ExpenseItem }>(deleteExpense(expense._id))
            if (response) {
                const index = this.items.indexOf(expense);
                this.items.splice(index, 1);
            }
        }
    }
}