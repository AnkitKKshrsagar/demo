import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RutikaComponent } from './rutika/rutika.component';

export const routes: Routes = [
    {
        path:'app', component: AppComponent,
    },

    {
        path:'rutika', component: RutikaComponent,
    }
];
