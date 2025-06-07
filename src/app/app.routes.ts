import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { ParticleHomeComponent } from './particle-home/particle-home.component';

export const routes: Routes = [
    {path:'',component:UserComponent},
    {path:'user',component:UserComponent},
    {path:'home',component:HomeComponent},
    {path:'home-gr',component:ParticleHomeComponent}
];
