import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { ParticleHomeComponent } from './particle-home/particle-home.component';
import { MainChainConnectPageComponent } from './main-chain-connect-page/main-chain-connect-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { AboutComponent } from './about/about.component';
import { ActivityComponent } from './activity/activity.component';
import { DiscoverComponent } from './discover/discover.component';
import { EventOrganizerHomeComponent } from './event-organizer-home/event-organizer-home.component';
import { FeedBackComponent } from './feed-back/feed-back.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { BookEventComponent } from './book-event/book-event.component';

export const routes: Routes = [
    {path:'',component:UserComponent},
    {path:'user',component:UserComponent},
    // {path:'home',component:HomeComponent},
    {path:'home',component:MainHomeComponent},
    {path:'home-gr',component:ParticleHomeComponent},
    {path: 'home-eve',component:MainChainConnectPageComponent},
    {path:'home-title',component:HomePageComponent},
    {path:'about-eve',component:AboutComponent},
    {path:'activity',component:ActivityComponent},
    {path:'discover',component:DiscoverComponent},
    {path: 'eventOrganizer',component:EventOrganizerHomeComponent},
    {path: 'feedBack',component:FeedBackComponent},
    {path: 'createEvent',component:CreateEventComponent},
    {path: 'bookEvent', component: BookEventComponent}
];
