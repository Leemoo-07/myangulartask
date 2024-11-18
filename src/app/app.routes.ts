import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './my-components/home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

export const AppRoutingModule = RouterModule.forRoot(routes);  // Make sure to export the RouterModule directly
