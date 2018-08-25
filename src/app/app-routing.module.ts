// libs
import { NgModule } from '@angular/core';

// imports
import { RouterModule, Routes } from '@angular/router';

// components
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from 'src/app/pages/about/about.component';
import { ServicesComponent } from 'src/app/pages/services/services.component';
import { DonationsComponent } from 'src/app/pages/donations/donations.component';
import { DoctrineComponent } from 'src/app/pages/doctrine/doctrine.component';


export const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'services',
        component: ServicesComponent
    },
    {
        path: 'donations',
        component: DonationsComponent
    },
    {
        path: 'doctrine',
        component: DoctrineComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: true
            }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }