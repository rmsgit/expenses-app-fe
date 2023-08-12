import {makeAutoObservable} from "mobx";
import {ExpenseList} from "./ExpenseList";
import {CategoryList} from "./CategoryList";

export class DataStore {

    public expenseList: ExpenseList = new ExpenseList();
    public categoryList: CategoryList = new CategoryList();

    constructor() {
        makeAutoObservable(this)
    }
}