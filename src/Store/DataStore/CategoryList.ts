import {Category} from "./Category";
import {makeAutoObservable} from "mobx";
import {getCategories} from "../../Services/category-service";
import {inlinePromise} from '@ruwan.m.s/promise-utils'

type CategoriesResponse = { name: string }[];

export class CategoryList {
    public categories: Category[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    async loadAllCategories() {
        const [response] = await inlinePromise<{ data: CategoriesResponse }>(getCategories<CategoriesResponse>());
        if (response) {
            const {data: categories = []} = response;
            this.categories = categories.map((c: object) => new Category(c));
        }

    }
}