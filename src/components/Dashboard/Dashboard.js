import React from 'react';
// import Navigation from '../Shared/Navigation/Navigation';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div class="grid md:grid-cols-5 sm:grid-cols-1 gap-4">
                <div className='bg-slate-900 text-gray-50 md:w-72 sm:w-full h-full px-3'>
                    <div className='flex flex-col col-span-1'>
                        <NavLink to="/" className="py-5">DashBoard</NavLink>
                        <NavLink to="/dashBoard/mainpage">Main Page</NavLink>
                        <NavLink to="/dashBoard/productpage">Product</NavLink>
                    </div>
                </div>
                <div className='md:col-span-4 mx-5'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;