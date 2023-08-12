import {makeAutoObservable, toJS} from "mobx";
import moment from "moment";
import {updateExpense} from "../../Services/expense-service";
import {inlinePromise} from '@ruwan.m.s/promise-utils'

export class ExpenseItem {

    public _id?: string
    public title: string = ''
    public description?: string
    public date: Date = new Date();
    public category: string = '';
    public amount: number = 0;

    constructor(data?: object) {
        data && this.pathData(data);
        makeAutoObservable(this);
    }

    pathData(data: object) {
        Object.assign(this, data);
        const {date} = data as any;
        this.date = new Date(date);
    }

    get formattedDate() {
        return moment(this.date).format('DD/MM/YYYY')
    }

    async update() {
        await inlinePromise<{ data: ExpenseItem }>(updateExpense(this));
    }


    setTitle(value: string) {
        this.title = value;
    }

    setDescription(value: string) {
        this.description = value;
    }

    setDate(value: Date) {
        this.date = value;
    }

    setCategory(value: string) {
        this.category = value;
    }

    setAmount(value: number) {
        this.amount = value;
    }

    toJS() {
        return toJS(this)
    }
}