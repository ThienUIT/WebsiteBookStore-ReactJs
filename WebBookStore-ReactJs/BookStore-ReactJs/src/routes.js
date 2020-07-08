import React from 'react';
// pages
import Index from './views/Index';
import ProfilePage from './views/examples/ProfilePage';
import RegisterPage from './views/examples/RegisterPage';
import SectionLogin from './views/index-sections/SectionLogin';
import IndexProduct from './views/Productpage/IndexProduct';
import IndexCart from './views/CartPage/IndexCart';
import IndexAdmin from './views/AdminPage/IndexAdmin';

const routes =[
    {
        path: '/',
        exact: true,
        main :() => <Index/>
    },
    {
        path: '/cart-page',
        exact: false,
        main :() => <IndexCart/>
    },
    {
        path: '/register-page',
        exact: false,
        main :() => <RegisterPage/>
    },
    {
        path: '/login-page',
        exact: false,
        main :() => <SectionLogin/>
    },
    {
        path: '/product-page',
        exact: false,
        main :() => <IndexProduct/>
    },
    {
        path: '/profile-page',
        exact: false,
        main :() => <ProfilePage/>
    },
    {
        path: '/admin-page',
        exact: false,
        main :() => <IndexAdmin/>
    },
];
export default routes;