import {mainStore} from "../index";
import {makeAutoObservable} from "mobx";

export class SummeryViewStore {

    constructor() {
        makeAutoObservable(this)
    }

    get chartData() {

        const categories = mainStore.dataStore.categoryList.categories.map(c => c.name);

        const values = categories.map(name => mainStore.dataStore.expenseList.getSumByCategory(name));


        return {
            labels: categories,
            datasets: [
                {
                    label: 'Expenses',
                    data: values,
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(40, 102, 255, 0.2)',
                        'rgba(40, 90, 255, 0.2)',
                    ],
                    borderColor: [
                        'rgb(255, 159, 64)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(40, 102, 255)',
                        'rgb(40, 90, 255)',
                    ],
                    borderWidth: 1
                }
            ]
        };
    }
}