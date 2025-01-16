import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { TutorialsComponent } from './pages/tutorials/tutorials.component';

export const routes: Routes = [


  {

    path: '',
    component:HomeComponent ,
  },

  {

    path: 'contact',
    component:ContactComponent ,
  },

  {

    path: 'about',
    component: AboutComponent,
  },
  {
     path:'categories',
     component:CategoriesComponent,
  },

  {
     path:'tutorials',
     component:TutorialsComponent,

  }


];
