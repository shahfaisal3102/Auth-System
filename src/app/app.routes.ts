import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { ChangePassword } from './auth/change-password/change-password';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login,
    },{
        path: 'register',
        component: Register
    },
    {
        path: 'change-password',
        component: ChangePassword
    }
];
