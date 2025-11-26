import { Routes } from '@angular/router';
import { HomePageComponent } from './Pages/Home-Page/home-page-component/home-page-component';

export const routes: Routes = [
    { path:'', component: HomePageComponent },
    { path:'home', component: HomePageComponent }

];
