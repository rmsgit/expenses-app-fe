import {observer} from "mobx-react-lite";
import {ExpenseItem} from "../../Store/DataStore/ExpenseItem";
import {Card} from "primereact/card";
import {Tag} from "primereact/tag";
import {Button} from "primereact/button";

interface ExpenseItemViewProps {
    item: ExpenseItem
}

const footer = () => {
    return <>
        <Button icon="pi pi-pencil" rounded outlined/>
        <Button icon="pi pi-trash" severity="danger" rounded outlined/>
    </>
}

export const ExpenseItemView = observer(({item: expense}: ExpenseItemViewProps) => {
    return <>
        <div className="expense-item">
            <Card title={expense.title}
                  subTitle={expense.formattedDate} className="md:w-25rem"
                  footer={footer}
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