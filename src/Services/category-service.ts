import {api} from "./api-service";

export const getCategories = <T>() => api.get<T>('/category');