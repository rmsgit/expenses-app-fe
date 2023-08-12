import {ExpenseItem} from "../Store/DataStore/ExpenseItem";
import {api} from "./api-service";

export const createNewExpense = (expense: ExpenseItem) => api.post('expense', expense.toJS())

export const getExpenses = () => api.get('expense');