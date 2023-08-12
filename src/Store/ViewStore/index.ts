import {makeAutoObservable} from "mobx";
import {DashboardViewStore} from "./DashboardViewStore";
import {SummeryViewStore} from "./SummeryViewStore";

export class ViewStore {

    public dashboard: DashboardViewStore = new DashboardViewStore();
    public summery: SummeryViewStore = new SummeryViewStore();

    constructor() {
        makeAutoObservable(this)
    }
}