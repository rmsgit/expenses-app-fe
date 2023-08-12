import {makeAutoObservable} from "mobx";

export class Category {
    public name: string = '';

    constructor(data: object) {
        Object.assign(this, data);
        makeAutoObservable(this);
    }
}