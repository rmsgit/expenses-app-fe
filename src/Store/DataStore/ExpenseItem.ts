import {makeAutoObservable} from "mobx";
import moment from "moment";

export class ExpenseItem {

    public title: string = ''
    public description?: string
    public date: Date = new Date();
    public category: string = '';
    public amount: number = 0;

    constructor(data?: object) {
        data && Object.assign(this, data);
        makeAutoObservable(this);
    }

    get formattedDate() {
        return moment(this.date).format('DD/MM/YYYY')
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
}