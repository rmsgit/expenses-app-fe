import {createContext, useContext} from "react";
import {makeAutoObservable} from "mobx";
import {DataStore} from "./DataStore";
import {ViewStore} from "./ViewStore";


export class Store {

    private static _root: Store;

    public dataStore: DataStore = new DataStore();
    public viewStore: ViewStore = new ViewStore();

    constructor() {
        makeAutoObservable(this);
    }

    static GetRoot() {
        if (!Store._root) {
            Store._root = new Store();
        }
        return Store._root;
    }
}

export const mainStore = Store.GetRoot();


const storeContext = createContext(mainStore);
export const useStore = () => useContext<Store>(storeContext)