import {Toolbar} from "primereact/toolbar";
import {Dropdown} from "primereact/dropdown";
import {Button} from "primereact/button";
import {useStore} from "../../Store";
import {observer} from "mobx-react-lite";

export const DashboardToolbar = observer(() => {

    const {viewStore: {dashboard,}} = useStore();
    return (
        <div className="tool-set">
            <Toolbar
                start={
                    <>
                        <Dropdown options={dashboard.categoryListForDropDown}
                                  value={dashboard.selectedCategoryForDropDown}
                                  onChange={e => {
                                      dashboard.selectCategory(e.value)
                                  }}
                                  optionLabel="name"
                                  placeholder="Select a Category" className="w-full md:w-14rem"/>

                        {
                            dashboard.selectedCategory &&
                            <Button onClick={() => dashboard.selectCategory()} label="Clear" size="small"/>
                        }

                    </>
                }
                end={
                    <>
                        <Button onClick={() => dashboard.expenseModalViewStore.open()} label="Create New"
                                icon="pi pi-plus" size="small"/>
                    </>
                }
            />
        </div>
    )
})