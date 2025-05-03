import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'insights'
    },
    {
        path: 'insights',
        loadChildren: () => import('./insights/genetic-insights.routes').then(m => m.INSIGHTS_ROUTES)
    }
];
