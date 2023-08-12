import {makeAutoObservable} from "mobx";
import {DashboardViewStore} from "./DashboardViewStore";

export class ViewStore {

    public dashboard: DashboardViewStore = new DashboardViewStore();

    constructor() {
        makeAutoObservable(this)
    }
}