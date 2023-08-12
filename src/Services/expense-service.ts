import {ExpenseItem} from "../Store/DataStore/ExpenseItem";
import {api} from "./api-service";

export const createNewExpense = (expense: ExpenseItem) => api.post('expense', expense.toJS())

export const getExpenses = (params?: { category?: string }) => api.get('expense', {params});
export const updateExpense = (expense: ExpenseItem) => api.patch(`expense/${expense._id}`, expense.toJS());
export const deleteExpense = (id: string) => api.delete(`expense/${id}`);