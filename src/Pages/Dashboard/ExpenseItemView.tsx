import {observer} from "mobx-react-lite";
import {ExpenseItem} from "../../Store/DataStore/ExpenseItem";
import {Card} from "primereact/card";
import {Tag} from "primereact/tag";
import {Button} from "primereact/button";
import {useStore} from "../../Store";
import {confirmPopup} from "primereact/confirmpopup";
import {DashboardViewStore} from "../../Store/ViewStore/DashboardViewStore";

interface ExpenseItemViewProps {
    item: ExpenseItem
}

const footer = (expense: ExpenseItem, dashboardViewStore: DashboardViewStore) => {
    return <>
        <Button
            icon="pi pi-pencil"
            rounded outlined

            onClick={async () => {
                dashboardViewStore.expenseModalViewStore.open(expense);
            }}
        />
        <Button
            icon="pi pi-trash"
            severity="danger"

            onClick={(event) => {
                confirmPopup({
                    target: event.currentTarget,
                    message: 'Do you want to delete this record?',
                    icon: 'pi pi-info-circle',
                    acceptClassName: 'p-button-danger',
                    accept: async () => {
                        await dashboardViewStore.expensesList.remove(expense);
                    },
                    reject: () => {
                        console.log("reject")
                    }
                });
            }}

            rounded outlined/>
    </>
}

export const ExpenseItemView = observer(({item: expense}: ExpenseItemViewProps) => {
    const {viewStore: {dashboard}} = useStore();
    return <>
        <div className="expense-item">
            <Card title={expense.title}
                  subTitle={expense.formattedDate} className="md:w-25rem"
                  footer={() => footer(expense, dashboard)}
            >
                <p className="m-0">
                    {expense.description}
                </p>

                <Tag value={expense.category}></Tag>
                <h4>{expense.amount} $</h4>
            </Card>
        </div>
    </>
})