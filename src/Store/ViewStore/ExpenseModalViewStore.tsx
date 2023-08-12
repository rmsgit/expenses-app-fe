import {makeAutoObservable, toJS} from "mobx";
import {ExpenseItem} from "../DataStore/ExpenseItem";
import {mainStore} from "../index";
import {CategoryDropDownItem} from "./common-types";

export class ExpenseModalViewStore {

    public isOpen = false;

    public expense: ExpenseItem = new ExpenseItem({});

    public selectedCategory?: CategoryDropDownItem;

    constructor() {
        makeAutoObservable(this)
    }

    open(expense?: ExpenseItem) {
        if (expense) {
            this.expense = expense
            this.selectedCategory = {name: expense.category, code: expense.category}
        } else {
            this.expense = new ExpenseItem();
        }


        this.isOpen = true;
    }

    close() {
        this.isOpen = false;
    }


    get categoryListForDropDown(): CategoryDropDownItem[] {
        return mainStore.dataStore.categoryList.categories.map(({name}) => ({
            code: name,
            name
        }))
    }

    get isUpdateExpense() {
        return !!this.expense._id;
    }

    get selectedCategoryForDropDown() {
        return this.selectedCategory ? toJS(this.selectedCategory) : null;
    }


    selectCategory(item: CategoryDropDownItem) {
        if (!item) {
            return
        }
        this.selectedCategory = item;
        this.expense.setCategory(this.selectedCategory.name);
    }

    async saveExpense() {
        if (this.isUpdateExpense) {
            await this.expense.update();
        } else {
            await mainStore.dataStore.expenseList.crateNew(this.expense);
        }

        this.expense = new ExpenseItem();
        this.close();
    }
}