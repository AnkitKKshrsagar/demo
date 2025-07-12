import { Routes } from '@angular/router';
import { NidhiComponent } from '../nidhi/nidhi.component';
import { NiniComponent } from './nini/nini.component';

export const routes: Routes = [
    {
        path:'nidhi',component: NidhiComponent
    },
    {
        path:'nini', component:NiniComponent
    }
];
