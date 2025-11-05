import React from 'react';
import { Outlet } from 'react-router';

const mainLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default mainLayout;