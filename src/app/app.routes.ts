import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FootballPageComponent } from './football-page/football-page.component';
import { CricketPageComponent } from './cricket-page/cricket-page.component';

export const routes: Routes = [
    { path: 'football', component: FootballPageComponent },
    { path: 'cricket', component: CricketPageComponent },
    { path: 'home', component: HomePageComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' }

];
