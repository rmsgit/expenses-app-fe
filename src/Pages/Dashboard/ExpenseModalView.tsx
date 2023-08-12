import {observer} from "mobx-react-lite";
import {Dialog} from "primereact/dialog";
import {useStore} from "../../Store";
import {InputText} from "primereact/inputtext";
import {Dropdown} from "primereact/dropdown";
import {InputTextarea} from "primereact/inputtextarea";
import {Calendar} from "primereact/calendar";
import {InputNumber} from "primereact/inputnumber";
import {Button} from "primereact/button";

export const ExpenseModalView = observer(() => {


    const {viewStore: {dashboard: {expenseModalViewStore}}} = useStore();
    const {expense} = expenseModalViewStore;

    return (
        <Dialog header="Expence" visible={expenseModalViewStore.isOpen} style={{width: '50vw'}}
                onHide={() => {
                    expenseModalViewStore.close();
                }}

                footer={
                    <>
                        <Button
                            label="Discard"
                            severity="danger"
                            outlined

                            onClick={() => {
                                expenseModalViewStore.close();
                            }}
                        />
                        <Button
                            label="Save"

                            onClick={() => {
                                console.log(expense)
                            }}
                        />

                    </>
                }
        >
            <InputText value={expense.title} onChange={(e) => expense.setTitle(e.target.value)}/>

            <Dropdown options={expenseModalViewStore.categoryListForDropDown}
                      value={expenseModalViewStore.selectedCategoryForDropDown}
                      onChange={e => {
                          expenseModalViewStore.selectCategory(e.value)

                      }}
                      optionLabel="name"
                      placeholder="Select a Category" className="w-full md:w-14rem"/>

            <InputTextarea value={
                expense.description
            } onChange={(e) => expense.setDescription(e.target.value)} rows={5} cols={30}/>

            <Calendar value={expense.date} onChange={(e) => expense.setDate(e.value as Date)}/>

            <InputNumber value={expense.amount} onValueChange={(e) => expense.setAmount(e.value!)}/>

        </Dialog>
    )
})