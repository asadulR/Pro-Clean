import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardSidebar from '../../components/DashboardSidebar';
import AddAdmin from './AddAdmin';
import AddService from './AddService';

const Dashboard = () => {
    return (
        <DashboardSidebar>
            <Routes>
                <Route path='add-service' element={<AddService/>}></Route>
                <Route path='add-admin' element={<AddAdmin/>}></Route>
            </Routes>
        </DashboardSidebar>
    );
};

export default Dashboard;