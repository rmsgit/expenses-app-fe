import {observer} from "mobx-react-lite";
import {useStore} from "../../Store";
import {ExpenseItemView} from "./ExpenseItemView";
import {DashboardToolbar} from "./DashboardToolbar";
import {ExpenseModalView} from "./ExpenseModalView";

export const DashboardView = observer(() => {

    const {viewStore: {dashboard: {expensesList}}} = useStore();

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