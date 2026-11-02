import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { About } from './page/about/about';
import { Projects } from './page/projects/projects';
import { Contact } from './page/contact/contact';

export const routes: Routes = [

    {
        path:'', component:Home
    },

     {
        path:'about', component:About
    },

     {
        path:'projects', component:Projects
    },

     {
        path:'contact', component:Contact
    }




];
