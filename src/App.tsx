import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Dashboard} from "./Pages/Dashboard/Dashboard";
import {observer} from "mobx-react-lite";

import {PrimeReactProvider} from 'primereact/api';

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import './Styles/App.scss'

const AppRouting = () =>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
        </Routes>
    </BrowserRouter>

const App = observer(() => {
    return (
        <div className="app">
            <PrimeReactProvider>
                <AppRouting/>
            </PrimeReactProvider>
        </div>

    );
})

export default App;
