import { Component } from '@angular/core';
import { Routes } from '@angular/router';
<<<<<<< HEAD
import { AppComponent } from './app.component';
import { RutikaComponent } from './rutika/rutika.component';

<<<<<<< HEAD
import { MansiComponent } from './mansi/mansi.component';

export const routes: Routes = [
   {
     path:'mansi' , component:MansiComponent      }
=======
export const routes: Routes = [
    {
        path:'app', component: AppComponent,
    },

    {
        path:'rutika', component: RutikaComponent,
=======
import { NidhiComponent } from '../nidhi/nidhi.component';

export const routes: Routes = [
    {
        path:'nidhi',component: NidhiComponent
>>>>>>> b7ae569f7803c2e649f0bd62282597fd7a2f4972
    }
>>>>>>> 57f19b75384cbe5775b1e46f68135b1af803fe70
];
