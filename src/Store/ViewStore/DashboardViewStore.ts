import {makeAutoObservable, toJS} from "mobx";
import {mainStore} from "../index";
import {ExpenseModalViewStore} from "./ExpenseModalViewStore";
import {CategoryDropDownItem} from "./common-types";


export class DashboardViewStore {

    public selectedCategory?: CategoryDropDownItem;
    public expenseModalViewStore: ExpenseModalViewStore = new ExpenseModalViewStore();

    constructor() {
        makeAutoObservable(this)
    }

    get expensesList() {
        return mainStore.dataStore.expenseList
    }

    get categoryListForDropDown(): CategoryDropDownItem[] {
        return mainStore.dataStore.categoryList.categories.map(({name}) => ({
            code: name,
            name
        }))
    }

    get selectedCategoryForDropDown() {
        return this.selectedCategory ? toJS(this.selectedCategory) : null;
    }


    async selectCategory(item?: CategoryDropDownItem) {
        if (!item) {
            this.selectedCategory = undefined;
            await mainStore.dataStore.expenseList.loadExpenses()
            return
        }
        this.selectedCategory = item;
        const {name: category} = item
        await mainStore.dataStore.expenseList.loadExpenses({category})
    }


}