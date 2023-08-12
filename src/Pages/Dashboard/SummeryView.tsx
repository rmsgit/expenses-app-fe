import {Chart} from "primereact/chart";
import {useStore} from "../../Store";
import {observer} from "mobx-react-lite";
import {useEffect} from "react";

export const SummeryView = observer(() => {

    const {viewStore: {summery}, dataStore} = useStore();

    useEffect(() => {

        return () => {
            dataStore.expenseList.loadExpenses();
        }
    }, [])

    return <>
        {
            !!dataStore.categoryList.categories.length && <Chart type="bar" data={summery.chartData}/>
        }

    </>
})