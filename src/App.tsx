import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DashboardView} from "./Pages/Dashboard/DashboardView";
import {observer} from "mobx-react-lite";

import {PrimeReactProvider} from 'primereact/api';

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import './Styles/App.scss'
import {ConfirmPopup} from "primereact/confirmpopup";
import {ContainerView} from "./Pages/Dashboard/ContainerView";
import {SummeryView} from "./Pages/Dashboard/SummeryView";

const AppRouting = () =>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<ContainerView/>}>
                <Route path="/" element={<DashboardView/>}/>
                <Route path="/summery" element={<SummeryView/>}/>
            </Route>
        </Routes>
    </BrowserRouter>

const App = observer(() => {
    return (
        <div className="app">
            <ConfirmPopup/>
            <PrimeReactProvider>
                <AppRouting/>
            </PrimeReactProvider>
        </div>

    );
})

export default App;
