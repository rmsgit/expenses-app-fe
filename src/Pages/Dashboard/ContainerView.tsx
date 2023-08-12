import {Link, Outlet} from "react-router-dom";
import {useEffect} from "react";
import {useStore} from "../../Store";

export const ContainerView = () => {

    const {dataStore} = useStore();

    useEffect(() => {
        return () => {
            Promise.all([
                dataStore.categoryList.loadAllCategories(),
                dataStore.expenseList.loadExpenses()
            ])

        }
    }, [])

    return <>
        <div>
            <h3><Link to={'/'}>Home</Link> | <Link to={'/summery'}>Summery </Link></h3>
            <Outlet/>
        </div>
    </>
};