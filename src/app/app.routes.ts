import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RutikaComponent } from './rutika/rutika.component';
import { NidhiComponent } from '../nidhi/nidhi.component';
import { LekhaComponent } from './lekha/lekha.component';


export const routes: Routes = [
    {
        path:'app', component: AppComponent,
    },

    {
        path:'rutika', component: RutikaComponent,
    },
    {
        path:'nidhi',component: NidhiComponent
    },
    {
        path:'lekha',component: LekhaComponent
    }

]
