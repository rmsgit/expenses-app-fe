import {observer} from "mobx-react-lite";
import {useStore} from "../../Store";
import {ExpenseItemView} from "./ExpenseItemView";
import {DashboardToolbar} from "./DashboardToolbar";
import {ExpenseModalView} from "./ExpenseModalView";
import {useEffect} from "react";

export const Dashboard = observer(() => {

    const {dataStore, viewStore: {dashboard: {expensesList}}} = useStore();

    useEffect(() => {
        return () => {
            dataStore.categoryList.loadAllCategories()
        }
    }, [])
    return (
        <>
            <div className="dashboard">
                <DashboardToolbar/>
                <div className="expense-list">
                    {
                        expensesList.items.map(e => <ExpenseItemView item={e}/>)
                    }
                </div>
            </div>

            <ExpenseModalView/>

        </>
    )
})