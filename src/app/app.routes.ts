import { Routes } from '@angular/router';
import { AppShellComponent } from './layout/shell/shell.component';

export const routes: Routes = [
    {
        path: '',
        component: AppShellComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadComponent: () =>
                    import('./pages/dashboard/dashboard.page')
                        .then(m => m.DashboardPage)
            },
            {
                path: 'petitioner/personal-info',
                loadComponent: () =>
                    import('./pages/petitioner/personal-info/personal-info.component')
                        .then(m => m.PersonalInfoComponent)
            }
        ]
    },
    {
        path: 'register',
        loadComponent: () =>
            import('./pages/auth/register/register.page')
                .then(m => m.RegisterPage)
    },
    {
        path: 'login',
        loadComponent: () =>
            import('./pages/auth/login/login.page')
                .then(m => m.LoginPage)
    },
    {
        path: '**',
        redirectTo: ''
    }
];