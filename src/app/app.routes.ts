import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';

export const routes: Routes = [
    {path: '', component:LoginComponent, pathMatch:"full"},
    {path: 'login',component:LoginComponent, pathMatch:"full"},
    {path: 'pages',loadComponent:()=>import("./Components/layout/layout.component").then(m=>m.LayoutComponent)},
    {path: '**', redirectTo:'login', pathMatch:"full"}
];
